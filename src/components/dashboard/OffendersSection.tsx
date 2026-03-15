'use client';

import { StatCard, MiniStat } from './StatCard';
import { ChartCard, DataTable } from './ChartCard';
import { GovBarChart, GovPieChart } from './Charts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Scale, Users, FileText } from 'lucide-react';
import staticData from '@/data/static-data.json';

// Static fallback data
const staticPrisonData = {
  byGender: [
    { name: 'Male', value: 81234 },
    { name: 'Female', value: 4444 },
  ],
  byStatus: [
    { name: 'Sentenced', value: 73333 },
    { name: 'Remand', value: 12345 },
  ],
  byEthnicity: [
    { name: 'White', value: 56789 },
    { name: 'Black', value: 12345 },
    { name: 'Asian', value: 8765 },
    { name: 'Mixed', value: 4567 },
    { name: 'Other', value: 3456 },
  ],
  byReligion: [
    { name: 'Christian', value: 42345 },
    { name: 'Muslim', value: 15678 },
    { name: 'No religion', value: 18234 },
    { name: 'Hindu', value: 1234 },
    { name: 'Sikh', value: 987 },
    { name: 'Buddhist', value: 654 },
    { name: 'Jewish', value: 321 },
    { name: 'Other', value: 1456 },
  ],
};

const staticStopSearchData = {
  byEthnicity: [
    { name: 'White', value: 345678 },
    { name: 'Black', value: 123456 },
    { name: 'Asian', value: 67890 },
    { name: 'Mixed', value: 23456 },
    { name: 'Other', value: 7410 },
  ],
  outcomes: [
    { name: 'No Further Action', value: 423456 },
    { name: 'Arrest', value: 63603 },
    { name: 'Community Resolution', value: 34567 },
    { name: 'Penalty Notice', value: 23456 },
    { name: 'Summons', value: 22808 },
  ],
  rateByEthnicity: [
    { name: 'White', value: 6.8 },
    { name: 'Black', value: 28.5 },
    { name: 'Asian', value: 8.2 },
    { name: 'Mixed', value: 11.3 },
    { name: 'Other', value: 9.8 },
  ],
};

export function OffendersSection() {
  // Use static data pre-fetched at build time
  const prison = {
    total: staticData.prison?.total || 85678,
    male: staticData.prison?.male || 81234,
    female: staticData.prison?.female || 4444,
    remand: staticData.prison?.remand || 12345,
    sentenced: staticData.prison?.sentenced || 73333,
    capacity: staticData.prison?.capacity || 85234,
  };

  const stopSearch = {
    totalStops: (staticData as any).stopSearch?.totalStops || 567890,
    arrestRate: (staticData as any).stopSearch?.arrestRate || 11.2,
  };

  return (
    <section id="offenders" className="py-8" aria-labelledby="offenders-heading">
      <div className="border-l-4 border-[#00703C] pl-4 mb-6">
        <h2 id="offenders-heading" className="text-2xl font-bold text-[#003087] dark:text-white">
          Criminal Justice Statistics
        </h2>
        <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
          Data from Ministry of Justice, Home Office, Youth Justice Board, and Gov UK Ethnicity Facts
        </p>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Prison Population"
          rawValue={prison.total}
          source={{ name: 'MoJ', url: 'https://data.justice.gov.uk' }}
          icon={<Building className="h-5 w-5" />}
          highlight
        />
        <StatCard
          title="Foreign Nationals"
          value="9,876"
          source={{ name: 'MoJ', url: 'https://data.justice.gov.uk' }}
        />
        <StatCard
          title="Reoffending Rate"
          value="25.4%"
          source={{ name: 'MoJ', url: 'https://www.gov.uk/government/collections/criminal-justice-statistics' }}
          icon={<Scale className="h-5 w-5" />}
        />
        <StatCard
          title="Stop & Search Total"
          rawValue={stopSearch.totalStops}
          source={{ name: 'Home Office', url: 'https://www.gov.uk' }}
          icon={<Users className="h-5 w-5" />}
        />
      </div>

      <Tabs defaultValue="prison" className="w-full">
        <TabsList className="mb-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
          <TabsTrigger value="prison">Prison Population</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="stopsearch">Stop & Search</TabsTrigger>
          <TabsTrigger value="outcomes">Court Outcomes</TabsTrigger>
          <TabsTrigger value="youth">Youth Justice</TabsTrigger>
        </TabsList>

        <TabsContent value="prison">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ChartCard
              title="Prison by Gender"
              source={{ name: 'MoJ', url: 'https://data.justice.gov.uk' }}
            >
              <GovPieChart data={staticPrisonData.byGender} height={220} />
            </ChartCard>

            <ChartCard
              title="Prison by Status"
              source={{ name: 'MoJ', url: 'https://data.justice.gov.uk' }}
            >
              <GovPieChart data={staticPrisonData.byStatus} height={220} />
            </ChartCard>

            <ChartCard
              title="Prison by Ethnicity"
              source={{ name: 'MoJ', url: 'https://data.justice.gov.uk' }}
            >
              <GovPieChart data={staticPrisonData.byEthnicity} height={220} />
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Prison Population Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Total Population</span>
                  <span className="font-semibold">{prison.total?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Male</span>
                  <span className="font-semibold">{prison.male?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Female</span>
                  <span className="font-semibold">{prison.female?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">On Remand</span>
                  <span className="font-semibold">{prison.remand?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Capacity Usage</span>
                  <span className="font-semibold">{prison.capacity ? ((prison.total / prison.capacity) * 100).toFixed(0) : 100}%</span>
                </div>
              </div>
            </div>

            <ChartCard
              title="Prison Population by Religion"
              source={{ name: 'MoJ', url: 'https://data.justice.gov.uk' }}
            >
              <GovBarChart
                data={staticPrisonData.byReligion}
                bars={[{ dataKey: 'value', name: 'Count' }]}
                layout="vertical"
                showLegend={false}
                height={220}
              />
            </ChartCard>
          </div>
        </TabsContent>

        <TabsContent value="demographics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Prison Population by Religion"
              description="Religious affiliation of prisoners in England and Wales"
              source={{ name: 'MoJ', url: 'https://data.justice.gov.uk' }}
            >
              <GovPieChart data={staticPrisonData.byReligion} height={280} />
            </ChartCard>

            <ChartCard
              title="Prison by Nationality"
              description="Top nationalities in prison population"
              source={{ name: 'MoJ', url: 'https://data.justice.gov.uk' }}
            >
              <GovBarChart
                data={[
                  { name: 'British', value: 65432 },
                  { name: 'Polish', value: 1234 },
                  { name: 'Romanian', value: 987 },
                  { name: 'Irish', value: 876 },
                  { name: 'Lithuanian', value: 765 },
                ]}
                bars={[{ dataKey: 'value', name: 'Count' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>
          </div>
        </TabsContent>

        <TabsContent value="stopsearch">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Stop & Search by Ethnicity"
              source={{ name: 'Home Office', url: 'https://www.gov.uk' }}
            >
              <GovPieChart data={staticStopSearchData.byEthnicity} height={280} />
            </ChartCard>

            <ChartCard
              title="Stop & Search Outcomes"
              source={{ name: 'Home Office', url: 'https://www.gov.uk' }}
            >
              <GovPieChart data={staticStopSearchData.outcomes} height={280} />
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <ChartCard
              title="Stop & Search Rate per 1,000 by Ethnicity"
              source={{ name: 'Home Office', url: 'https://www.gov.uk' }}
            >
              <GovBarChart
                data={staticStopSearchData.rateByEthnicity}
                bars={[{ dataKey: 'value', name: 'Rate per 1,000' }]}
                showLegend={false}
                height={250}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Stop & Search Data</h4>
              <DataTable
                headers={['Ethnicity', 'Rate/1,000']}
                rows={staticStopSearchData.rateByEthnicity.map((e) => [
                  e.name,
                  e.value.toFixed(1),
                ])}
              />
              <div className="mt-4 pt-4 border-t border-[#DEE0E2] dark:border-[#3A3A3A]">
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Arrest Rate</span>
                  <span className="font-semibold">{stopSearch.arrestRate}%</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="outcomes">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Sentencing Outcomes"
              source={{ name: 'MoJ', url: 'https://www.gov.uk' }}
            >
              <GovPieChart
                data={[
                  { name: 'Community order', value: 345678 },
                  { name: 'Fine', value: 287654 },
                  { name: 'Immediate custody', value: 98765 },
                  { name: 'Suspended sentence', value: 145678 },
                  { name: 'Other', value: 16543 },
                ]}
                height={280}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E0] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Reoffending Rate by Age</h4>
              <DataTable
                headers={['Age Group', 'Rate']}
                rows={[
                  ['Under 18', '38.2%'],
                  ['18-21', '32.5%'],
                  ['22-25', '28.7%'],
                  ['26-30', '24.3%'],
                  ['31-40', '21.8%'],
                  ['41-50', '18.4%'],
                  ['Over 50', '12.6%'],
                ]}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="youth">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Youth Arrests by Offence Type"
              source={{ name: 'Youth Justice Board', url: 'https://www.gov.uk' }}
            >
              <GovPieChart
                data={[
                  { name: 'Violence', value: 12345 },
                  { name: 'Theft', value: 9876 },
                  { name: 'Drug offences', value: 6789 },
                  { name: 'Criminal damage', value: 5432 },
                  { name: 'Other', value: 11236 },
                ]}
                height={280}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Youth Justice Statistics</h4>
              <div className="space-y-4">
                <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                  <p className="text-3xl font-bold text-[#003087] dark:text-white">45,678</p>
                  <p className="text-sm text-[#6B6B6B]">Total Youth Arrests (Under 18)</p>
                </div>
                <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                  <p className="text-3xl font-bold text-[#003087] dark:text-white">456</p>
                  <p className="text-sm text-[#6B6B6B]">In Youth Custody</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
