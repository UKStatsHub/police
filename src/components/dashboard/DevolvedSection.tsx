'use client';

import { StatCard, MiniStat } from './StatCard';
import { ChartCard, DataTable } from './ChartCard';
import { GovBarChart, GovLineChart, GovPieChart } from './Charts';
import { scotlandCrimeData, scotlandTrends, scotlandHomicide, scotlandWorkforce, niCrimeData, niTrends, niWorkforce, walesCrimeData, walesCrimeTypes, ukWideSummary, ukComparison } from '@/data/devolvedData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Users, TrendingUp } from 'lucide-react';

export function DevolvedSection() {
  // Prepare chart data
  const scotlandCrimeTypeData = scotlandCrimeData.crimeTypes.map(c => ({
    name: c.type,
    value: c.count,
  }));

  const scotlandTrendData = scotlandTrends.labels.map((label, i) => ({
    name: label,
    'Total Crimes': scotlandTrends.datasets[0].data[i],
  }));

  const niCrimeTypeData = niCrimeData.crimeTypes.slice(0, 6).map(c => ({
    name: c.type,
    value: c.count,
  }));

  const niTrendData = niTrends.labels.map((label, i) => ({
    name: label,
    'Total Crimes': niTrends.datasets[0].data[i],
  }));

  const walesForceData = walesCrimeData.byForce.map(f => ({
    name: f.force,
    value: f.crimes,
  }));

  const ukComparisonData = ukComparison.labels.map((label, i) => ({
    name: label,
    'Crimes per 1,000': ukComparison.datasets[0].data[i],
  }));

  const ukOfficerData = ukComparison.labels.map((label, i) => ({
    name: label,
    'Officers per 1,000': ukComparison.datasets[1].data[i],
  }));

  return (
    <section id="devolved" className="py-8" aria-labelledby="devolved-heading">
      <div className="border-l-4 border-[#00703C] pl-4 mb-6">
        <h2 id="devolved-heading" className="text-2xl font-bold text-[#003087] dark:text-white">
          Devolved Nations
        </h2>
        <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
          Crime and policing data for Scotland, Northern Ireland, and Wales
        </p>
      </div>

      {/* UK-wide Summary */}
      <div className="bg-[#003087] text-white p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">UK-Wide Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold">{(ukWideSummary.totalCrimes.total / 1000000).toFixed(1)}M</p>
            <p className="text-sm text-white/80">Total Crimes (UK)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{ukWideSummary.totalOfficers.total.toLocaleString()}</p>
            <p className="text-sm text-white/80">Total Officers (UK)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{(ukWideSummary.totalCrimes.englandWales / 1000000).toFixed(1)}M</p>
            <p className="text-sm text-white/80">England & Wales</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{(ukWideSummary.totalCrimes.scotland / 1000).toFixed(0)}K</p>
            <p className="text-sm text-white/80">Scotland</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="scotland" className="w-full">
        <TabsList className="mb-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
          <TabsTrigger value="scotland">Scotland</TabsTrigger>
          <TabsTrigger value="ni">Northern Ireland</TabsTrigger>
          <TabsTrigger value="wales">Wales</TabsTrigger>
          <TabsTrigger value="comparison">UK Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="scotland">
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Crimes"
              value={scotlandCrimeData.totalCrimes}
              change={scotlandCrimeData.change}
              trend="up"
              description="Year ending December 2024"
              source={scotlandCrimeData.source}
              highlight
            />
            <StatCard
              title="Homicides"
              value={scotlandHomicide.count}
              change={scotlandHomicide.change}
              trend="down"
              description="Total homicide cases"
              source={scotlandHomicide.source}
            />
            <StatCard
              title="Police Officers"
              value={scotlandWorkforce.totalOfficers}
              description="Total FTE officers"
              source={scotlandWorkforce.source}
              icon={<Users className="h-5 w-5" />}
            />
            <StatCard
              title="Homicide Rate"
              value={scotlandHomicide.perMillion}
              unit="per million"
              description="Per million population"
              source={scotlandHomicide.source}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Crime Types in Scotland"
              description="Distribution by offence category"
              source={scotlandCrimeData.source}
            >
              <GovPieChart
                data={scotlandCrimeTypeData}
                height={280}
              />
            </ChartCard>

            <ChartCard
              title="Crime Trend"
              description="Total recorded crimes (thousands)"
              source={scotlandCrimeData.source}
            >
              <GovLineChart
                data={scotlandTrendData}
                lines={[{ dataKey: 'Total Crimes', name: 'Total Crimes (thousands)' }]}
                showLegend={false}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="mt-6">
            <ChartCard
              title="Crime Types Detail"
              description="Full breakdown by offence type"
              source={scotlandCrimeData.source}
            >
              <DataTable
                headers={['Crime Type', 'Count', 'Share', 'YoY Change']}
                rows={scotlandCrimeData.crimeTypes.map(c => [
                  c.type,
                  c.count.toLocaleString(),
                  `${c.percentage}%`,
                  `${c.change >= 0 ? '+' : ''}${c.change}%`,
                ])}
              />
            </ChartCard>
          </div>
        </TabsContent>

        <TabsContent value="ni">
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Crimes"
              value={niCrimeData.totalCrimes}
              change={niCrimeData.change}
              trend="down"
              description="Year ending December 2024"
              source={niCrimeData.source}
              highlight
            />
            <StatCard
              title="Police Officers"
              value={niWorkforce.totalOfficers}
              description="PSNI total officers"
              source={niWorkforce.source}
              icon={<Users className="h-5 w-5" />}
            />
            <StatCard
              title="Female Officers"
              value={`${niWorkforce.demographics?.femalePercentage}%`}
              description="Proportion of female officers"
              source={niWorkforce.source}
            />
            <StatCard
              title="Catholic Officers"
              value={`${niWorkforce.demographics?.catholicPercentage}%`}
              description="Religious composition"
              source={niWorkforce.source}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Crime Types in Northern Ireland"
              description="Distribution by offence category"
              source={niCrimeData.source}
            >
              <GovPieChart
                data={niCrimeTypeData}
                height={280}
              />
            </ChartCard>

            <ChartCard
              title="Crime Trend"
              description="Total recorded crimes (thousands)"
              source={niCrimeData.source}
            >
              <GovLineChart
                data={niTrendData}
                lines={[{ dataKey: 'Total Crimes', name: 'Total Crimes (thousands)' }]}
                showLegend={false}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="mt-6">
            <ChartCard
              title="Crime Types Detail"
              description="Full breakdown by offence type"
              source={niCrimeData.source}
            >
              <DataTable
                headers={['Crime Type', 'Count', 'Share', 'YoY Change']}
                rows={niCrimeData.crimeTypes.map(c => [
                  c.type,
                  c.count.toLocaleString(),
                  `${c.percentage}%`,
                  `${c.change >= 0 ? '+' : ''}${c.change}%`,
                ])}
              />
            </ChartCard>
          </div>
        </TabsContent>

        <TabsContent value="wales">
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Crimes"
              value={walesCrimeData.totalCrimes}
              change={walesCrimeData.change}
              trend="down"
              description="All Welsh forces combined"
              source={walesCrimeData.source}
              highlight
            />
            <StatCard
              title="Dyfed-Powys"
              value={walesCrimeData.byForce.find(f => f.force === 'Dyfed-Powys')?.crimes}
              description="Lowest crime in Wales"
              source={walesCrimeData.source}
            />
            <StatCard
              title="South Wales"
              value={walesCrimeData.byForce.find(f => f.force === 'South Wales')?.crimes}
              description="Highest crime in Wales"
              source={walesCrimeData.source}
            />
            <StatCard
              title="4 Welsh Forces"
              value={walesCrimeData.byForce.length}
              description="Police force areas"
              source={walesCrimeData.source}
              icon={<MapPin className="h-5 w-5" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Crimes by Welsh Force"
              description="Distribution across police force areas"
              source={walesCrimeData.source}
            >
              <GovBarChart
                data={walesForceData}
                bars={[{ dataKey: 'value', name: 'Crimes' }]}
                showLegend={false}
                height={280}
              />
            </ChartCard>

            <ChartCard
              title="Crime Types in Wales"
              description="Breakdown by offence category"
              source={walesCrimeData.source}
            >
              <GovPieChart
                data={walesCrimeTypes.slice(0, 6).map(c => ({ name: c.type, value: c.count }))}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="mt-6">
            <ChartCard
              title="Crime Types Detail"
              description="Full breakdown by offence type"
              source={walesCrimeData.source}
            >
              <DataTable
                headers={['Crime Type', 'Count', 'Share', 'YoY Change']}
                rows={walesCrimeTypes.map(c => [
                  c.type,
                  c.count.toLocaleString(),
                  `${c.percentage}%`,
                  `${c.change >= 0 ? '+' : ''}${c.change}%`,
                ])}
              />
            </ChartCard>
          </div>
        </TabsContent>

        <TabsContent value="comparison">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Crime Rate Comparison"
              description="Crimes per 1,000 population"
              source={ukWideSummary.sources[0]}
            >
              <GovBarChart
                data={ukComparisonData}
                bars={[{ dataKey: 'Crimes per 1,000', name: 'Rate' }]}
                showLegend={false}
                height={280}
              />
            </ChartCard>

            <ChartCard
              title="Officer Rate Comparison"
              description="Officers per 1,000 population"
              source={ukWideSummary.sources[0]}
            >
              <GovBarChart
                data={ukOfficerData}
                bars={[{ dataKey: 'Officers per 1,000', name: 'Rate' }]}
                showLegend={false}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="mt-6 bg-[#F5F0E8] dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
            <h4 className="font-semibold text-[#003087] dark:text-white mb-4">UK Comparison Notes</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-[#003087] dark:text-white mb-2">Scotland</h5>
                <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                  Scotland has lower crime rates per capita but higher officer numbers. 
                  Uses different crime classification system (Scottish Crime Recording Standard).
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-[#003087] dark:text-white mb-2">Northern Ireland</h5>
                <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                  Lowest crime rate per capita. Single police force (PSNI). 
                  Tracks religious composition of officers (Catholic: 32%).
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-[#003087] dark:text-white mb-2">England & Wales</h5>
                <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                  Highest crime rate. 43 territorial forces. 
                  Data from ONS Crime Survey and Home Office recorded crime.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <ChartCard
              title="Data Sources by Nation"
              description="Official statistical sources"
              source={ukWideSummary.sources[0]}
            >
              <DataTable
                headers={['Nation', 'Source', 'URL']}
                rows={[
                  ['England & Wales', 'ONS Crime Statistics', 'ons.gov.uk'],
                  ['Scotland', 'Scottish Government', 'gov.scot'],
                  ['Northern Ireland', 'PSNI Statistics', 'psni.police.uk'],
                  ['Wales', 'StatsWales', 'statswales.gov.wales'],
                ]}
              />
            </ChartCard>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
