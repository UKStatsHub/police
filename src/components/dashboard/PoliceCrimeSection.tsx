'use client';

import { StatCard, MiniStat } from './StatCard';
import { ChartCard, DataTable } from './ChartCard';
import { GovBarChart, GovPieChart } from './Charts';
import { 
  officersConvictedData, 
  misconductData, 
  sexualMisconductData,
  domesticAbuseByOfficers,
  deathsInCustodyData,
  corruptionData,
  officerArrests,
  iopcSource 
} from '@/data/policeCrimeData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, ShieldAlert, Scale, FileWarning } from 'lucide-react';

export function PoliceCrimeSection() {
  // Prepare chart data
  const convictionByOffenceData = officersConvictedData.byOffenceType.map(o => ({
    name: o.offence,
    value: o.count,
  }));

  const convictionByRankData = officersConvictedData.byRank.map(r => ({
    name: r.rank,
    value: r.count,
  }));

  const misconductByCategoryData = misconductData.byCategory.map(c => ({
    name: c.category,
    value: c.count,
  }));

  const sexualMisconductTypeData = sexualMisconductData.byType.map(t => ({
    name: t.type,
    value: t.count,
  }));

  const deathsByCategoryData = deathsInCustodyData.byCategory.map(c => ({
    name: c.category,
    value: c.count,
  }));

  const corruptionTypeData = corruptionData.byType.map(t => ({
    name: t.type,
    value: t.count,
  }));

  // Table data
  const misconductTableData = misconductData.byForce.map(f => [
    f.force,
    f.allegations.toLocaleString(),
    f.officers.toLocaleString(),
    f.rate.toFixed(1),
  ]);

  const arrestsTableData = officerArrests.byOffence.map(o => [
    o.offence,
    o.count.toLocaleString(),
    `${o.percentage}%`,
  ]);

  return (
    <section id="police-crime" className="py-8" aria-labelledby="police-crime-heading">
      <div className="border-l-4 border-[#D4351C] pl-4 mb-6">
        <h2 id="police-crime-heading" className="text-2xl font-bold text-[#003087] dark:text-white">
          Police Crime & Misconduct
        </h2>
        <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
          Statistics on police officers exposed for crimes, misconduct, and disciplinary action
        </p>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatCard
          title="Officers Convicted"
          value={officersConvictedData.totalConvictions}
          description={`Criminal convictions ${officersConvictedData.year}`}
          source={iopcSource}
          icon={<Scale className="h-5 w-5" />}
          highlight
        />
        <StatCard
          title="Misconduct Allegations"
          value={misconductData.totalAllegations.toLocaleString()}
          description="Total allegations recorded"
          source={iopcSource}
          icon={<FileWarning className="h-5 w-5" />}
        />
        <StatCard
          title="Sexual Misconduct"
          value={sexualMisconductData.totalCases}
          description="Sexual misconduct allegations"
          source={iopcSource}
          icon={<AlertTriangle className="h-5 w-5" />}
        />
        <StatCard
          title="Corruption Cases"
          value={corruptionData.totalAllegations}
          description="Corruption allegations"
          source={iopcSource}
          icon={<ShieldAlert className="h-5 w-5" />}
        />
        <StatCard
          title="Deaths After Contact"
          value={deathsInCustodyData.totalDeaths}
          description="During/following police contact"
          source={iopcSource}
        />
      </div>

      <Tabs defaultValue="convictions" className="w-full">
        <TabsList className="mb-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
          <TabsTrigger value="convictions">Criminal Convictions</TabsTrigger>
          <TabsTrigger value="misconduct">Misconduct</TabsTrigger>
          <TabsTrigger value="sexual">Sexual Misconduct</TabsTrigger>
          <TabsTrigger value="corruption">Corruption</TabsTrigger>
          <TabsTrigger value="deaths">Deaths</TabsTrigger>
        </TabsList>

        <TabsContent value="convictions">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Officer Convictions by Offence Type"
              description={`Total officers convicted: ${officersConvictedData.totalConvictions} (${officersConvictedData.year})`}
              source={iopcSource}
            >
              <GovBarChart
                data={convictionByOffenceData}
                bars={[{ dataKey: 'value', name: 'Officers' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>

            <ChartCard
              title="Convictions by Rank"
              description="Police officer convictions by rank"
              source={iopcSource}
            >
              <GovPieChart
                data={convictionByRankData}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Disciplinary Outcomes</h4>
              <div className="space-y-3">
                {officersConvictedData.outcomes.map((outcome, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2 last:border-0">
                    <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">{outcome.outcome}</span>
                    <div className="text-right">
                      <span className="font-semibold text-[#003087] dark:text-white">{outcome.count}</span>
                      <span className="text-sm text-[#6B6B6B] ml-2">({outcome.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Officer Arrests by Offence</h4>
              <DataTable
                headers={['Offence', 'Count', 'Share']}
                rows={arrestsTableData}
              />
              <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] mt-3">
                Total officer arrests: {officerArrests.total} ({officerArrests.year})
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="misconduct">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Misconduct by Category"
              description={`Total allegations: ${misconductData.totalAllegations.toLocaleString()}`}
              source={iopcSource}
            >
              <GovBarChart
                data={misconductByCategoryData}
                bars={[{ dataKey: 'value', name: 'Allegations' }]}
                layout="vertical"
                showLegend={false}
                height={300}
              />
            </ChartCard>

            <ChartCard
              title="Misconduct Outcomes"
              description="Resolution of misconduct allegations"
              source={iopcSource}
            >
              <GovPieChart
                data={misconductData.outcomes.map(o => ({ name: o.outcome, value: o.count }))}
                height={300}
              />
            </ChartCard>
          </div>

          <div className="mt-6 bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
            <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Allegations by Force (Top 5)</h4>
            <DataTable
              headers={['Force', 'Allegations', 'Officers', 'Rate per 1,000']}
              rows={misconductTableData}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Domestic Abuse Allegations</h4>
              <div className="space-y-3">
                <div className="text-center p-4 bg-[#D4351C]/10">
                  <p className="text-3xl font-bold text-[#D4351C]">{domesticAbuseByOfficers.totalAllegations}</p>
                  <p className="text-sm text-[#6B6B6B]">Allegations against officers ({domesticAbuseByOfficers.year})</p>
                </div>
                <div className="pt-4 space-y-2">
                  {domesticAbuseByOfficers.outcomes.slice(0, 3).map((o, i) => (
                    <MiniStat key={i} label={o.outcome} value={`${o.percentage}%`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Key Misconduct Facts</h4>
              <ul className="text-sm text-[#6B6B6B] space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4351C]">•</span>
                  <span><strong>{misconductData.totalAllegations.toLocaleString()}</strong> allegations recorded in {misconductData.year}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4351C]">•</span>
                  <span><strong>{misconductData.totalCases.toLocaleString()}</strong> individual misconduct cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4351C]">•</span>
                  <span><strong>{misconductData.outcomes.find(o => o.outcome === 'Substantiated')?.percentage}%</strong> of allegations substantiated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4351C]">•</span>
                  <span><strong>{misconductData.outcomes.find(o => o.outcome === 'No case to answer')?.percentage}%</strong> resulted in no case to answer</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sexual">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Sexual Misconduct by Type"
              description={`Total cases: ${sexualMisconductData.totalCases} (${sexualMisconductData.year})`}
              source={iopcSource}
            >
              <GovBarChart
                data={sexualMisconductTypeData}
                bars={[{ dataKey: 'value', name: 'Cases' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>

            <ChartCard
              title="Victims of Sexual Misconduct"
              description="Breakdown by victim type"
              source={iopcSource}
            >
              <GovPieChart
                data={sexualMisconductData.victimTypes.map(v => ({ name: v.victim, value: v.count }))}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="mt-6 bg-[#D4351C]/10 border-l-4 border-[#D4351C] p-6">
            <h4 className="font-semibold text-[#D4351C] mb-4">⚠️ Sexual Misconduct Outcomes</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {sexualMisconductData.byOutcome.map((outcome, i) => (
                <div key={i} className="text-center p-3 bg-white dark:bg-[#2B2B2B]">
                  <p className="text-2xl font-bold text-[#003087] dark:text-white">{outcome.count}</p>
                  <p className="text-xs text-[#6B6B6B]">{outcome.outcome}</p>
                  <p className="text-sm font-semibold text-[#D4351C]">{outcome.percentage}%</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
            <h4 className="font-semibold text-[#003087] dark:text-white mb-3">About Abuse of Position</h4>
            <p className="text-sm text-[#6B6B6B]">
              "Abuse of position for sexual gain" includes officers who misuse their authority 
              to form inappropriate relationships with victims of crime, witnesses, or vulnerable 
              individuals. This is a serious form of corruption and accounts for a significant 
              proportion of sexual misconduct cases.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="corruption">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Corruption by Type"
              description={`Total allegations: ${corruptionData.totalAllegations}`}
              source={iopcSource}
            >
              <GovBarChart
                data={corruptionTypeData}
                bars={[{ dataKey: 'value', name: 'Allegations' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Corruption Outcomes</h4>
              <div className="space-y-4">
                <div className="text-center p-4 bg-[#D4351C]/10">
                  <p className="text-3xl font-bold text-[#D4351C]">{corruptionData.substantiated}</p>
                  <p className="text-sm text-[#6B6B6B]">Substantiated allegations</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 border border-[#DEE0E2] dark:border-[#3A3A3A]">
                    <p className="text-2xl font-bold text-[#003087] dark:text-white">{corruptionData.dismissed}</p>
                    <p className="text-xs text-[#6B6B6B]">Officers dismissed</p>
                  </div>
                  <div className="text-center p-4 border border-[#DEE0E2] dark:border-[#3A3A3A]">
                    <p className="text-2xl font-bold text-[#003087] dark:text-white">{corruptionData.criminallyConvicted}</p>
                    <p className="text-xs text-[#6B6B6B]">Criminal convictions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="deaths">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Deaths by Category"
              description={`Total deaths: ${deathsInCustodyData.totalDeaths} (${deathsInCustodyData.year})`}
              source={iopcSource}
            >
              <GovBarChart
                data={deathsByCategoryData}
                bars={[{ dataKey: 'value', name: 'Deaths' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Deaths by Ethnicity</h4>
              <DataTable
                headers={['Ethnicity', 'Count', 'Percentage']}
                rows={deathsInCustodyData.byEthnicity.map(e => [
                  e.ethnicity,
                  e.count.toString(),
                  `${e.percentage}%`,
                ])}
              />
              <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] mt-3">
                Note: These are deaths during or following police contact, not necessarily caused by police action.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-[#6B6B6B]/10 border-l-4 border-[#6B6B6B] p-6">
            <h4 className="font-semibold text-[#2B2B2B] dark:text-white mb-3">Important Context</h4>
            <p className="text-sm text-[#6B6B6B]">
              The IOPC investigates all deaths during or following police contact. This includes 
              road traffic incidents involving police vehicles, deaths in police custody, apparent 
              suicides following custody release, and other deaths where police contact may have 
              been relevant. The majority of these deaths are not attributed to police misconduct.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6 bg-[#003087]/5 border border-[#003087]/20 p-4">
        <p className="text-sm text-[#6B6B6B]">
          <strong className="text-[#003087]">Source:</strong> All data sourced from the 
          Independent Office for Police Conduct (IOPC) Annual Statistics and official 
          police disciplinary records. Data represents England and Wales only.
        </p>
      </div>
    </section>
  );
}
