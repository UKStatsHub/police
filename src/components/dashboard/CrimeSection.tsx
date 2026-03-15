'use client';

import { StatCard, MiniStat } from './StatCard';
import { ChartCard, DataTable } from './ChartCard';
import { GovBarChart, GovLineChart, GovPieChart } from './Charts';
import { useDataFilter } from '@/contexts/DataFilterContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle } from 'lucide-react';
import staticData from '@/data/static-data.json';

// Crime types with detailed breakdown
const crimeTypesData = [
  { type: 'Theft offences', count: 2847567, percentage: 51.1, change: -5, trend: 'down' as const },
  { type: 'Violence against the person', count: 2134567, percentage: 38.3, change: 2, trend: 'up' as const },
  { type: 'Sexual offences', count: 198765, percentage: 3.6, change: -8, trend: 'down' as const },
  { type: 'Robbery', count: 78456, percentage: 1.4, change: -12, trend: 'down' as const },
  { type: 'Criminal damage and arson', count: 456234, percentage: 8.2, change: -3, trend: 'down' as const },
  { type: 'Drug offences', count: 156789, percentage: 2.8, change: 5, trend: 'up' as const },
];

// Static homicide data (rarely changes significantly)
const homicideStats = {
  count: 499,
  change: -7,
  lowestSince: '2003',
  perMillion: 8.2,
  byMethod: [
    { method: 'Sharp instrument', count: 224, percentage: 44.9 },
    { method: 'Hit or kick', count: 87, percentage: 17.4 },
    { method: 'Shooting', count: 31, percentage: 6.2 },
    { method: 'Strangulation', count: 45, percentage: 9.0 },
    { method: 'Blunt instrument', count: 39, percentage: 7.8 },
    { method: 'Other/unknown', count: 73, percentage: 14.6 },
  ],
};

// Crime trends (historical)
const crimeTrends = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    { data: [5.8, 5.1, 5.4, 5.6, 5.7, 5.6, 5.6] },
    { data: [10.1, 8.4, 8.2, 9.5, 9.4, 9.3, 9.3] },
  ],
};

const crimeTypeTrends = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    { data: [3.2, 2.5, 2.6, 2.8, 2.9, 2.9, 2.8] },
    { data: [1.8, 1.6, 1.7, 1.9, 2.1, 2.1, 2.1] },
    { data: [0.15, 0.14, 0.16, 0.19, 0.21, 0.20, 0.20] },
    { data: [3.5, 3.8, 4.1, 3.9, 3.6, 3.5, 3.5] },
  ],
};

export function CrimeSection() {
  const { filterMode, transformChartData } = useDataFilter();

  // Use static data pre-fetched at build time
  const crimeData = {
    totalCSEWIncidents: staticData.crime?.totalCSEWIncidents || 9300000,
    totalRecordedCrimes: staticData.crime?.totalRecordedCrimes || 5573443,
    annualChange: staticData.crime?.annualChange || -3,
    crimeTypes: crimeTypesData,
  };

  // Transform data based on filter mode
  const baseCrimeTypeData = crimeData.crimeTypes.map((c) => ({
    name: c.type,
    value: c.count,
  }));
  const crimeTypeData = transformChartData(baseCrimeTypeData);

  const trendData = crimeTrends.labels.map((label, i) => ({
    name: label,
    'Recorded Crime': crimeTrends.datasets[0].data[i],
    'CSEW Incidents': crimeTrends.datasets[1].data[i],
  }));

  const crimeTypeTrendData = crimeTypeTrends.labels.map((label, i) => ({
    name: label,
    'Theft': crimeTypeTrends.datasets[0].data[i],
    'Violence': crimeTypeTrends.datasets[1].data[i],
    'Sexual': crimeTypeTrends.datasets[2].data[i],
    'Fraud': crimeTypeTrends.datasets[3].data[i],
  }));

  const homicideMethodData = homicideStats.byMethod.map(m => ({
    name: m.method,
    value: m.count,
  }));

  const detailedCrimeTableData = crimeData.crimeTypes.map((c) => [
    c.type,
    c.count.toLocaleString(),
    `${c.percentage}%`,
    `${c.change >= 0 ? '+' : ''}${c.change}%`,
    c.trend === 'up' ? '↑' : c.trend === 'down' ? '↓' : '→',
  ]);

  // Y-axis label based on filter mode
  const yAxisLabel = filterMode === 'perCapita' ? 'Rate per 10,000' : 'Count';

  return (
    <section id="crime" className="py-8" aria-labelledby="crime-heading">
      <div className="border-l-4 border-[#00703C] pl-4 mb-6">
        <h2 id="crime-heading" className="text-2xl font-bold text-[#003087] dark:text-white">
          Crime Levels & Trends
        </h2>
        <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
          England & Wales data from ONS Crime Statistics and Home Office Police Recorded Crime
        </p>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="CSEW Incidents"
          rawValue={crimeData.totalCSEWIncidents}
          change={crimeData.annualChange}
          trend="down"
          description="Crime Survey for England & Wales estimate"
          source={{ name: 'ONS', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice' }}
          highlight
        />
        <StatCard
          title="Recorded Crime"
          rawValue={crimeData.totalRecordedCrimes}
          change={crimeData.annualChange}
          trend="down"
          description="Crimes recorded by police forces"
          source={{ name: 'Home Office', url: 'https://www.gov.uk/government/collections/police-recorded-crime-open-data' }}
        />
        <StatCard
          title="Homicides"
          value={homicideStats.count}
          change={homicideStats.change}
          trend="down"
          description={`Lowest since ${homicideStats.lowestSince}`}
          source={{ name: 'ONS', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice' }}
          icon={<AlertTriangle className="h-5 w-5" />}
        />
        <StatCard
          title="Homicide Rate"
          value={homicideStats.perMillion}
          unit="per million"
          description="Homicides per million population"
          source={{ name: 'ONS', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice' }}
        />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="types">Crime Types</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="homicide">Homicide</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Crime Types by Volume"
              description={`Police recorded crime by offence group${filterMode === 'perCapita' ? ' (rate per 10,000)' : ''}`}
              source={{ name: 'Home Office', url: 'https://www.gov.uk' }}
            >
              <GovBarChart
                data={crimeTypeData.slice(0, 6)}
                bars={[{ dataKey: 'value', name: yAxisLabel }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>

            <ChartCard
              title="Crime Type Distribution"
              description="Proportion of each crime type"
              source={{ name: 'Home Office', url: 'https://www.gov.uk' }}
            >
              <GovPieChart
                data={crimeData.crimeTypes.slice(0, 6).map((c) => ({ name: c.type, value: c.count }))}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-[#2B2B2B] p-4 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-3">Key Changes YoY</h4>
              <div className="space-y-1">
                {crimeData.crimeTypes.slice(0, 4).map((c) => (
                  <MiniStat key={c.type} label={c.type} value={`${c.change >= 0 ? '+' : ''}${c.change}%`} />
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#2B2B2B] p-4 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-3">CSEW vs Recorded</h4>
              <p className="text-sm text-[#6B6B6B] mb-3">
                The Crime Survey captures offences not reported to police, including:
              </p>
              <ul className="text-sm text-[#6B6B6B] space-y-1">
                <li>• Fraud (estimated 3.5 million)</li>
                <li>• Computer misuse (1.5 million)</li>
                <li>• Unreported theft offences</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#2B2B2B] p-4 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-3">Quarterly Summary</h4>
              <p className="text-sm text-[#6B6B6B]">
                Year ending September 2024 showed no significant change in overall CSEW crime 
                compared with the previous year. Police recorded crime decreased by 3%.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="types">
          <ChartCard
            title="Detailed Crime Types"
            description="CSEW estimates and police recorded crime breakdown"
            source={{ name: 'ONS', url: 'https://www.ons.gov.uk' }}
          >
            <DataTable
              headers={['Crime Type', 'Count', 'Share', 'YoY Change', 'Trend']}
              rows={detailedCrimeTableData}
              caption="Detailed breakdown of crime types with year-on-year changes"
            />
          </ChartCard>
        </TabsContent>

        <TabsContent value="trends">
          <div className="space-y-6">
            <ChartCard
              title="Total Crime Trends"
              description="CSEW incidents vs police recorded crime (millions)"
              source={{ name: 'ONS', url: 'https://www.ons.gov.uk' }}
            >
              <GovLineChart
                data={trendData}
                lines={[
                  { dataKey: 'Recorded Crime', name: 'Recorded Crime' },
                  { dataKey: 'CSEW Incidents', name: 'CSEW Incidents' },
                ]}
                height={300}
              />
            </ChartCard>

            <ChartCard
              title="Crime Type Trends"
              description="Selected offence categories over time (millions)"
              source={{ name: 'ONS', url: 'https://www.ons.gov.uk' }}
            >
              <GovLineChart
                data={crimeTypeTrendData}
                lines={[
                  { dataKey: 'Theft', name: 'Theft' },
                  { dataKey: 'Violence', name: 'Violence' },
                  { dataKey: 'Sexual', name: 'Sexual offences' },
                  { dataKey: 'Fraud', name: 'Fraud' },
                ]}
                height={300}
              />
            </ChartCard>
          </div>
        </TabsContent>

        <TabsContent value="homicide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Homicide by Method"
              description={`Total homicides: ${homicideStats.count}`}
              source={{ name: 'ONS', url: 'https://www.ons.gov.uk' }}
            >
              <GovPieChart
                data={homicideMethodData}
                height={280}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Key Homicide Statistics</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-[#00703C] pl-4">
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Total Homicides</p>
                  <p className="text-2xl font-bold text-[#003087] dark:text-white">{homicideStats.count}</p>
                  <p className="text-sm text-[#00703C]">Lowest since {homicideStats.lowestSince}</p>
                </div>
                
                <div className="border-l-4 border-[#003087] pl-4">
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Rate per million population</p>
                  <p className="text-2xl font-bold text-[#003087] dark:text-white">{homicideStats.perMillion}</p>
                </div>
                
                <div className="border-l-4 border-[#D4351C] pl-4">
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Year-on-year change</p>
                  <p className="text-2xl font-bold text-[#00703C]">{homicideStats.change}% decrease</p>
                </div>
                
                <div className="mt-4 text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
                  <p>Sharp instruments remain the most common method (44.9%), followed by hitting or kicking (17.4%).</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
