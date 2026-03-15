'use client';

import { StatCard } from './StatCard';
import { ChartCard } from './ChartCard';
import { GovBarChart, GovPieChart, GovLineChart } from './Charts';
import { crimeMotivesData } from '@/data/motivesData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function MotivesSection() {
  // Prepare chart data
  const domesticByTypeData = crimeMotivesData.domesticAbuse.byType.map(d => ({
    name: d.type,
    value: d.value,
  }));

  const domesticByRelationshipData = crimeMotivesData.domesticAbuse.byRelationship.map(d => ({
    name: d.relationship,
    value: d.value,
  }));

  const domesticByGenderData = crimeMotivesData.domesticAbuse.byGender.map(d => ({
    name: d.gender,
    value: d.value,
  }));

  const hateCrimeByMotivationData = crimeMotivesData.hateCrime.byMotivation.map(d => ({
    name: d.type,
    value: d.value,
  }));

  const hateCrimeTrendData = crimeMotivesData.hateCrime.trend.map(d => ({
    name: d.year,
    'Hate Crimes': d.value,
  }));

  const drugByTypeData = crimeMotivesData.drugRelated.byType.map(d => ({
    name: d.type,
    value: d.value,
  }));

  const drugBySubstanceData = crimeMotivesData.drugRelated.bySubstance.map(d => ({
    name: d.substance,
    value: d.value,
  }));

  const alcoholByTypeData = crimeMotivesData.alcoholRelated.byType.map(d => ({
    name: d.type,
    value: d.value,
  }));

  const gangByRegionData = crimeMotivesData.gangRelated.byRegion.map(d => ({
    name: d.region,
    value: d.value,
  }));

  const countyLinesByAgeData = crimeMotivesData.countyLines.byAge.map(d => ({
    name: d.age,
    value: d.value,
  }));

  const cyberByTypeData = crimeMotivesData.cyberCrime.byType.map(d => ({
    name: d.type,
    value: d.value,
  }));

  const cyberByMethodData = crimeMotivesData.cyberCrime.byMethod.map(d => ({
    name: d.method,
    value: d.value,
  }));

  return (
    <section id="motives" className="py-8" aria-labelledby="motives-heading">
      <div className="border-l-4 border-[#D53680] pl-4 mb-6">
        <h2 id="motives-heading" className="text-2xl font-bold text-[#003087] dark:text-white">
          Motives for Crime
        </h2>
        <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
          Data on motivations behind different crime types from ONS, Home Office, and MoJ
        </p>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        <StatCard
          title="Domestic Abuse Incidents"
          value={(crimeMotivesData.domesticAbuse.totalIncidents / 1000000).toFixed(1)}
          unit="million"
          source={crimeMotivesData.domesticAbuse.source}
          highlight
        />
        <StatCard
          title="Hate Crimes"
          value={crimeMotivesData.hateCrime.total.toLocaleString()}
          source={crimeMotivesData.hateCrime.source}
        />
        <StatCard
          title="Drug Offences"
          value={crimeMotivesData.drugRelated.totalOffences.toLocaleString()}
          source={crimeMotivesData.drugRelated.source}
        />
        <StatCard
          title="Alcohol-Related Crime"
          value={(crimeMotivesData.alcoholRelated.totalIncidents / 1000).toFixed(0)}
          unit="k incidents"
          source={crimeMotivesData.alcoholRelated.source}
        />
        <StatCard
          title="Knife Crimes"
          value={crimeMotivesData.gangRelated.totalKnives.toLocaleString()}
          source={crimeMotivesData.gangRelated.source}
        />
        <StatCard
          title="Cyber Crimes"
          value={(crimeMotivesData.cyberCrime.totalIncidents / 1000000).toFixed(1)}
          unit="million"
          source={crimeMotivesData.cyberCrime.source}
        />
      </div>

      <Tabs defaultValue="domestic" className="w-full">
        <TabsList className="mb-4 flex-wrap">
          <TabsTrigger value="domestic">Domestic Abuse</TabsTrigger>
          <TabsTrigger value="hate">Hate Crime</TabsTrigger>
          <TabsTrigger value="drugs">Drug-Related</TabsTrigger>
          <TabsTrigger value="alcohol">Alcohol</TabsTrigger>
          <TabsTrigger value="gangs">Gang & Knife</TabsTrigger>
          <TabsTrigger value="cyber">Cyber Crime</TabsTrigger>
        </TabsList>

        <TabsContent value="domestic">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ChartCard
              title="Domestic Abuse by Crime Type"
              source={crimeMotivesData.domesticAbuse.source}
            >
              <GovPieChart data={domesticByTypeData} height={250} />
            </ChartCard>

            <ChartCard
              title="By Relationship to Perpetrator"
              source={crimeMotivesData.domesticAbuse.source}
            >
              <GovPieChart data={domesticByRelationshipData} height={250} />
            </ChartCard>

            <ChartCard
              title="Victims by Gender"
              source={crimeMotivesData.domesticAbuse.source}
            >
              <GovPieChart data={domesticByGenderData} height={250} />
            </ChartCard>
          </div>

          <div className="mt-6 bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
            <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Domestic Abuse Statistics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                <p className="text-2xl font-bold text-[#003087] dark:text-white">{(crimeMotivesData.domesticAbuse.totalIncidents / 1000000).toFixed(1)}M</p>
                <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Total Incidents (CSEW)</p>
              </div>
              <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                <p className="text-2xl font-bold text-[#003087] dark:text-white">{(crimeMotivesData.domesticAbuse.crimesRecorded / 1000).toFixed(0)}k</p>
                <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Crimes Recorded by Police</p>
              </div>
              <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                <p className="text-2xl font-bold text-[#D53680]">70.8%</p>
                <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Female Victims</p>
              </div>
              <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                <p className="text-2xl font-bold text-[#003087] dark:text-white">66%</p>
                <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">By Partner/Ex-Partner</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="hate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Hate Crime by Motivation"
              source={crimeMotivesData.hateCrime.source}
            >
              <GovBarChart
                data={hateCrimeByMotivationData}
                bars={[{ dataKey: 'value', name: 'Offences' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>

            <ChartCard
              title="Hate Crime Trend (2019-2023)"
              source={crimeMotivesData.hateCrime.source}
            >
              <GovLineChart
                data={hateCrimeTrendData}
                lines={[{ dataKey: 'Hate Crimes', name: 'Total Hate Crimes' }]}
                showLegend={false}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="mt-6 bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
            <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Hate Crime Breakdown</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {crimeMotivesData.hateCrime.byMotivation.slice(0, 5).map((item, i) => (
                <div key={i} className="text-center p-3 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                  <p className="text-xl font-bold text-[#003087] dark:text-white">{item.value.toLocaleString()}</p>
                  <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">{item.type}</p>
                  <p className="text-sm text-[#00703C]">{item.percentage}%</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="drugs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Drug Offences by Type"
              source={crimeMotivesData.drugRelated.source}
            >
              <GovPieChart data={drugByTypeData} height={280} />
            </ChartCard>

            <ChartCard
              title="Drug Offences by Substance"
              source={crimeMotivesData.drugRelated.source}
            >
              <GovBarChart
                data={drugBySubstanceData}
                bars={[{ dataKey: 'value', name: 'Offences' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">County Lines Operations</h4>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Operations Identified</span>
                  <span className="font-semibold">{crimeMotivesData.countyLines.operationsIdentified.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Arrests Made</span>
                  <span className="font-semibold">{crimeMotivesData.countyLines.arrests.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Safeguarding Referrals</span>
                  <span className="font-semibold">{crimeMotivesData.countyLines.safeguardingReferrals.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <ChartCard
              title="County Lines Arrests by Age"
              source={crimeMotivesData.countyLines.source}
            >
              <GovPieChart data={countyLinesByAgeData} height={200} />
            </ChartCard>
          </div>
        </TabsContent>

        <TabsContent value="alcohol">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Alcohol-Related Crime by Type"
              source={crimeMotivesData.alcoholRelated.source}
            >
              <GovPieChart data={alcoholByTypeData} height={280} />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Alcohol-Related Crime Context</h4>
              <div className="space-y-4">
                <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                  <p className="text-3xl font-bold text-[#003087] dark:text-white">{crimeMotivesData.alcoholRelated.percentageOfViolent}%</p>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">of violent crime is alcohol-related</p>
                </div>
                <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                  <p className="text-3xl font-bold text-[#003087] dark:text-white">{crimeMotivesData.alcoholRelated.percentageOfNighttime}%</p>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">of nighttime violent incidents involve alcohol</p>
                </div>
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Total Incidents</span>
                  <span className="font-semibold">{crimeMotivesData.alcoholRelated.totalIncidents.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="gangs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Gang-Attributed Knife Crimes by Region"
              source={crimeMotivesData.gangRelated.source}
            >
              <GovBarChart
                data={gangByRegionData}
                bars={[{ dataKey: 'value', name: 'Offences' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Knife Crime Statistics</h4>
              <div className="space-y-4">
                <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                  <p className="text-3xl font-bold text-[#003087] dark:text-white">{crimeMotivesData.gangRelated.totalKnives.toLocaleString()}</p>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Total Knife Crimes</p>
                </div>
                <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                  <p className="text-3xl font-bold text-[#D4351C]">{crimeMotivesData.gangRelated.gangAttributed.toLocaleString()}</p>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Gang-Attributed</p>
                </div>
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Percentage Gang-Related</span>
                  <span className="font-semibold text-[#D4351C]">{crimeMotivesData.gangRelated.percentageGang}%</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="cyber">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Cyber Crime by Type"
              source={crimeMotivesData.cyberCrime.source}
            >
              <GovPieChart data={cyberByTypeData} height={280} />
            </ChartCard>

            <ChartCard
              title="Cyber Crime Methods"
              source={crimeMotivesData.cyberCrime.source}
            >
              <GovBarChart
                data={cyberByMethodData}
                bars={[{ dataKey: 'value', name: 'Incidents' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="mt-6 bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
            <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Cyber Crime Context</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {crimeMotivesData.cyberCrime.byMethod.slice(0, 4).map((item, i) => (
                <div key={i} className="text-center p-3 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                  <p className="text-xl font-bold text-[#003087] dark:text-white">{(item.value / 1000).toFixed(0)}k</p>
                  <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">{item.method}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
