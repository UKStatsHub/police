'use client';

import { StatCard, MiniStat } from './StatCard';
import { ChartCard, DataTable } from './ChartCard';
import { GovBarChart, GovPieChart } from './Charts';
import { efficiencyData, inefficiencyReasons, peelRatings, peelSummary, outcomeRatesByCrime, investigationTimes, iopcData } from '@/data/efficiencyData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, Clock, CheckCircle, XCircle } from 'lucide-react';

export function EfficiencySection() {
  // Prepare chart data
  const inefficiencyData = inefficiencyReasons.map(r => ({
    name: r.reason.length > 30 ? r.reason.substring(0, 30) + '...' : r.reason,
    value: r.frequency,
    fullReason: r.reason,
  }));

  const peelSummaryData = [
    { name: 'Outstanding', value: peelSummary.effectiveness.outstanding },
    { name: 'Good', value: peelSummary.effectiveness.good },
    { name: 'Requires Improvement', value: peelSummary.effectiveness.requiresImprovement },
    { name: 'Inadequate', value: peelSummary.effectiveness.inadequate },
  ];

  const outcomeData = outcomeRatesByCrime.map(c => ({
    name: c.crimeType,
    'Charge Rate': c.chargeRate,
    'Ongoing': c.ongoingRate,
    'Other Outcome': c.otherRate,
  }));

  const investigationData = investigationTimes.datasets[0].data.map((d, i) => ({
    name: investigationTimes.labels[i],
    'Actual': d,
    'Target': investigationTimes.datasets[1].data[i],
  }));

  const peelTableData = peelRatings.map(r => [
    r.force,
    r.effectiveness,
    r.efficiency,
    r.legitimacy,
  ]);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Outstanding':
        return 'text-[#00703C] bg-[#00703C]/10';
      case 'Good':
        return 'text-[#1D70B8] bg-[#1D70B8]/10';
      case 'Requires improvement':
        return 'text-[#F47738] bg-[#F47738]/10';
      case 'Inadequate':
        return 'text-[#D4351C] bg-[#D4351C]/10';
      default:
        return '';
    }
  };

  return (
    <section id="efficiency" className="py-8" aria-labelledby="efficiency-heading">
      <div className="border-l-4 border-[#00703C] pl-4 mb-6">
        <h2 id="efficiency-heading" className="text-2xl font-bold text-[#003087] dark:text-white">
          Police Efficiency, Legitimacy & Operations
        </h2>
        <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
          Data from HMICFRS PEEL assessments and Home Office outcomes data
        </p>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Overall Charge Rate"
          value={`${efficiencyData.chargeRate}%`}
          change={-0.5}
          trend="down"
          description="Crimes resulting in charge or summons"
          source={efficiencyData.source}
          icon={<CheckCircle className="h-5 w-5" />}
          highlight
        />
        <StatCard
          title="Investigation Completion"
          value={`${efficiencyData.investigationCompletionRate}%`}
          description="Investigations completed within period"
          source={efficiencyData.source}
        />
        <StatCard
          title="Avg Investigation Time"
          value={efficiencyData.avgInvestigationDays}
          unit="days"
          description="Average time to close investigation"
          source={efficiencyData.source}
          icon={<Clock className="h-5 w-5" />}
        />
        <StatCard
          title="IOPC Complaints"
          value={iopcData.totalComplaints}
          description="Total complaints recorded"
          source={iopcData.source}
          icon={<AlertTriangle className="h-5 w-5" />}
        />
      </div>

      <Tabs defaultValue="outcomes" className="w-full">
        <TabsList className="mb-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
          <TabsTrigger value="peel">PEEL Ratings</TabsTrigger>
          <TabsTrigger value="inefficiency">Inefficiency Factors</TabsTrigger>
          <TabsTrigger value="complaints">Complaints & Oversight</TabsTrigger>
        </TabsList>

        <TabsContent value="outcomes">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Outcome Rates by Crime Type"
              description="Charge rates, ongoing investigations, and other outcomes"
              source={efficiencyData.source}
            >
              <GovBarChart
                data={outcomeData}
                bars={[
                  { dataKey: 'Charge Rate', name: 'Charge Rate (%)', color: '#00703C' },
                  { dataKey: 'Ongoing', name: 'Ongoing (%)', color: '#1D70B8' },
                ]}
                height={280}
              />
            </ChartCard>

            <ChartCard
              title="Investigation Times vs Targets"
              description="Actual average days compared to targets"
              source={efficiencyData.source}
            >
              <GovBarChart
                data={investigationData}
                bars={[
                  { dataKey: 'Actual', name: 'Actual Days', color: '#003087' },
                  { dataKey: 'Target', name: 'Target Days', color: '#00703C' },
                ]}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="mt-6 bg-[#F5F0E8] dark:bg-[#2B2B2B] p-4 border-l-4 border-[#D4351C]">
            <h4 className="font-semibold text-[#003087] dark:text-white mb-2">Key Finding from HMICFRS</h4>
            <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
              "The overall charge rate has fallen from 15% in 2015 to 5.7% in 2024. This decline 
              reflects increased complexity of cases, greater emphasis on victim support, and 
              rising demand. Forces are struggling to complete investigations within target times, 
              particularly for sexual offences and complex fraud cases."
            </p>
            <a
              href={efficiencyData.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[#1D70B8] hover:underline mt-2"
            >
              Source: {efficiencyData.source.name} →
            </a>
          </div>
        </TabsContent>

        <TabsContent value="peel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="PEEL Ratings Distribution"
              description="Overall distribution of effectiveness ratings"
              source={efficiencyData.source}
            >
              <GovPieChart
                data={peelSummaryData}
                height={280}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">PEEL Summary Statistics</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mb-2">Effectiveness</h5>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-[#00703C]/10 text-[#00703C]">
                      Outstanding: {peelSummary.effectiveness.outstanding}
                    </span>
                    <span className="px-2 py-1 text-xs bg-[#1D70B8]/10 text-[#1D70B8]">
                      Good: {peelSummary.effectiveness.good}
                    </span>
                    <span className="px-2 py-1 text-xs bg-[#F47738]/10 text-[#F47738]">
                      Requires Improvement: {peelSummary.effectiveness.requiresImprovement}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mb-2">Efficiency</h5>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-[#00703C]/10 text-[#00703C]">
                      Outstanding: {peelSummary.efficiency.outstanding}
                    </span>
                    <span className="px-2 py-1 text-xs bg-[#1D70B8]/10 text-[#1D70B8]">
                      Good: {peelSummary.efficiency.good}
                    </span>
                    <span className="px-2 py-1 text-xs bg-[#F47738]/10 text-[#F47738]">
                      Requires Improvement: {peelSummary.efficiency.requiresImprovement}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mb-2">Legitimacy</h5>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs bg-[#00703C]/10 text-[#00703C]">
                      Outstanding: {peelSummary.legitimacy.outstanding}
                    </span>
                    <span className="px-2 py-1 text-xs bg-[#1D70B8]/10 text-[#1D70B8]">
                      Good: {peelSummary.legitimacy.good}
                    </span>
                    <span className="px-2 py-1 text-xs bg-[#F47738]/10 text-[#F47738]">
                      Requires Improvement: {peelSummary.legitimacy.requiresImprovement}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <ChartCard
              title="PEEL Ratings by Force"
              description="Full breakdown of all force ratings"
              source={efficiencyData.source}
            >
              <div className="overflow-x-auto max-h-96 scrollbar-thin">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-white dark:bg-[#2B2B2B]">
                    <tr className="border-b-2 border-[#003087] dark:border-[#4A6FA5]">
                      <th className="py-2 px-3 text-left font-semibold text-[#003087] dark:text-white">Force</th>
                      <th className="py-2 px-3 text-left font-semibold text-[#003087] dark:text-white">Effectiveness</th>
                      <th className="py-2 px-3 text-left font-semibold text-[#003087] dark:text-white">Efficiency</th>
                      <th className="py-2 px-3 text-left font-semibold text-[#003087] dark:text-white">Legitimacy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {peelRatings.map((r, i) => (
                      <tr key={i} className="border-b border-[#DEE0E2] dark:border-[#3A3A3A] hover:bg-[#F5F0E8] dark:hover:bg-[#3A3A3A] dark:bg-[#2B2B2B]">
                        <td className="py-2 px-3">{r.force}</td>
                        <td className="py-2 px-3">
                          <span className={`px-2 py-1 text-xs ${getRatingColor(r.effectiveness)}`}>
                            {r.effectiveness}
                          </span>
                        </td>
                        <td className="py-2 px-3">
                          <span className={`px-2 py-1 text-xs ${getRatingColor(r.efficiency)}`}>
                            {r.efficiency}
                          </span>
                        </td>
                        <td className="py-2 px-3">
                          <span className={`px-2 py-1 text-xs ${getRatingColor(r.legitimacy)}`}>
                            {r.legitimacy}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ChartCard>
          </div>
        </TabsContent>

        <TabsContent value="inefficiency">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Top Inefficiency Factors"
              description="Reasons cited in HMICFRS reports for investigation delays"
              source={inefficiencyReasons[0].source}
            >
              <GovBarChart
                data={inefficiencyData}
                bars={[{ dataKey: 'value', name: 'Frequency Cited' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Key Inefficiency Findings</h4>
              <div className="space-y-4">
                {inefficiencyReasons.slice(0, 5).map((reason, i) => (
                  <div key={i} className="border-l-4 border-[#D4351C] pl-4">
                    <p className="font-medium text-[#003087] dark:text-white">{reason.reason}</p>
                    <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
                      Cited by {reason.citedBy} | Frequency: {reason.frequency}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#F5F0E8] dark:bg-[#2B2B2B] p-4 border-l-4 border-[#00703C]">
            <h4 className="font-semibold text-[#003087] dark:text-white mb-2">HMICFRS Recommendation</h4>
            <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
              "Forces should review investigator workloads and ensure that detectives have manageable 
              caseloads. The current average of 30+ active cases per investigator is unsustainable 
              and leads to delays that affect victims and outcomes." — HMICFRS Crime Investigation 2025
            </p>
          </div>
        </TabsContent>

        <TabsContent value="complaints">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Complaints by Category"
              description="IOPC recorded complaints breakdown"
              source={iopcData.source}
            >
              <GovPieChart
                data={iopcData.byCategory.map(c => ({ name: c.category, value: c.count }))}
                height={280}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">IOPC Key Statistics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Total Complaints</span>
                  <span className="text-xl font-bold text-[#003087] dark:text-white">{iopcData.totalComplaints.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Allegations per 1,000 officers</span>
                  <span className="text-xl font-bold text-[#003087] dark:text-white">{iopcData.allegationsPerThousandOfficers}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Deaths during police contact</span>
                  <span className="text-xl font-bold text-[#D4351C]">{iopcData.deathsDuringContact}</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-[#D4351C]/10">
                <p className="text-sm text-[#D4351C]">
                  <strong>Note:</strong> Deaths during police contact includes road traffic incidents 
                  and other circumstances where police contact occurred before death, not necessarily 
                  caused by police action.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
