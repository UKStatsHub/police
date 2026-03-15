'use client';

import { StatCard, MiniStat } from './StatCard';
import { ChartCard, DataTable } from './ChartCard';
import { GovBarChart, GovLineChart, GovPieChart } from './Charts';
import { 
  deiData, 
  workforceGenderData, 
  workforceEthnicityData, 
  seniorOfficersGender,
  seniorOfficersEthnicity,
  recruitmentData,
  targets,
  forceDiversityData,
  homeOfficeDEISource,
} from '@/data/policyData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Target, TrendingUp } from 'lucide-react';

export function PolicySection() {
  // Prepare chart data
  const diversityTrendData = deiData.femaleOfficersTrend.map((item, i) => ({
    name: item.year.toString(),
    'Female Officers': item.percentage,
    'Ethnic Minority': deiData.ethnicMinorityTrend[i].percentage,
  }));

  const recruitmentTrendData = recruitmentData.joiners.map((item, i) => ({
    name: item.year.toString(),
    Joiners: item.count,
    Leavers: recruitmentData.leavers[i].count,
  }));

  const targetData = targets.map(t => ({
    name: t.category,
    Current: t.current,
    Target: t.target,
  }));

  const forceDiversityChartData = forceDiversityData.map(f => ({
    name: f.force.replace('Police', '').trim(),
    Female: f.female,
    'Ethnic Minority': f.ethnicMinority,
  }));

  return (
    <section id="policy" className="py-8" aria-labelledby="policy-heading">
      <div className="border-l-4 border-[#00703C] pl-4 mb-6">
        <h2 id="policy-heading" className="text-2xl font-bold text-[#003087] dark:text-white">
          Workforce Representation
        </h2>
        <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
          Police workforce diversity statistics from Home Office official data
        </p>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Female Officers"
          value={`${deiData.femaleOfficersTrend[deiData.femaleOfficersTrend.length - 1].percentage}%`}
          change={7}
          trend="up"
          description="Since 2015"
          source={deiData.source}
          icon={<Users className="h-5 w-5" />}
          highlight
        />
        <StatCard
          title="Ethnic Minority Officers"
          value={`${deiData.ethnicMinorityTrend[deiData.ethnicMinorityTrend.length - 1].percentage}%`}
          change={53}
          trend="up"
          description="Increase since 2015"
          source={deiData.source}
        />
        <StatCard
          title="Female Senior Officers"
          value={`${seniorOfficersGender[0].value}%`}
          description="Chief Inspector and above"
          source={deiData.source}
          icon={<Target className="h-5 w-5" />}
        />
        <StatCard
          title="New Joiners (Female)"
          value={`${recruitmentData.joinersByGender[0].value}%`}
          description="Of recent recruits"
          source={deiData.source}
        />
      </div>

      <Tabs defaultValue="demographics" className="w-full">
        <TabsList className="mb-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
          <TabsTrigger value="forces">By Force</TabsTrigger>
        </TabsList>

        <TabsContent value="demographics">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <ChartCard
              title="All Officers by Gender"
              source={homeOfficeDEISource}
            >
              <GovPieChart data={workforceGenderData} height={200} showLabels={true} />
            </ChartCard>

            <ChartCard
              title="All Officers by Ethnicity"
              source={homeOfficeDEISource}
            >
              <GovPieChart data={workforceEthnicityData} height={200} showLabels={true} />
            </ChartCard>

            <ChartCard
              title="Senior Officers by Gender"
              source={homeOfficeDEISource}
            >
              <GovPieChart data={seniorOfficersGender} height={200} showLabels={true} />
            </ChartCard>

            <ChartCard
              title="Senior Officers by Ethnicity"
              source={homeOfficeDEISource}
            >
              <GovPieChart data={seniorOfficersEthnicity} height={200} showLabels={true} />
            </ChartCard>
          </div>

          <div className="mt-6 bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
            <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Representation Targets (2030)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#003087] dark:border-[#4A6FA5]">
                    <th className="py-2 px-4 text-left">Category</th>
                    <th className="py-2 px-4 text-right">Current %</th>
                    <th className="py-2 px-4 text-right">Target %</th>
                    <th className="py-2 px-4 text-right">Gap</th>
                    <th className="py-2 px-4 text-left w-1/3">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {targets.map((t, i) => {
                    const progress = (t.current / t.target) * 100;
                    return (
                      <tr key={i} className="border-b border-[#DEE0E2] dark:border-[#3A3A3A]">
                        <td className="py-3 px-4">{t.category}</td>
                        <td className="py-3 px-4 text-right font-semibold">{t.current}%</td>
                        <td className="py-3 px-4 text-right">{t.target}%</td>
                        <td className="py-3 px-4 text-right">{(t.target - t.current).toFixed(1)}%</td>
                        <td className="py-3 px-4">
                          <div className="w-full bg-[#DEE0E2] dark:bg-[#3A3A3A] h-2">
                            <div 
                              className="bg-[#00703C] h-2" 
                              style={{ width: `${Math.min(progress, 100)}%` }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="trends">
          <div className="space-y-6">
            <ChartCard
              title="Workforce Diversity Trends (2015-2025)"
              description="Percentage of female and ethnic minority officers"
              source={deiData.source}
            >
              <GovLineChart
                data={diversityTrendData}
                lines={[
                  { dataKey: 'Female Officers', name: 'Female Officers %', color: '#D53680' },
                  { dataKey: 'Ethnic Minority', name: 'Ethnic Minority %', color: '#00703C' },
                ]}
                height={300}
              />
            </ChartCard>

            <ChartCard
              title="Current vs Target Representation"
              source={deiData.source}
            >
              <GovBarChart
                data={targetData}
                bars={[
                  { dataKey: 'Current', name: 'Current %', color: '#003087' },
                  { dataKey: 'Target', name: '2030 Target %', color: '#00703C' },
                ]}
                height={250}
              />
            </ChartCard>
          </div>
        </TabsContent>

        <TabsContent value="recruitment">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Joiners vs Leavers Trend"
              source={homeOfficeDEISource}
            >
              <GovBarChart
                data={recruitmentTrendData}
                bars={[
                  { dataKey: 'Joiners', name: 'Joiners', color: '#00703C' },
                  { dataKey: 'Leavers', name: 'Leavers', color: '#D4351C' },
                ]}
                height={280}
              />
            </ChartCard>

            <div className="space-y-6">
              <ChartCard
                title="New Joiners by Gender"
                source={homeOfficeDEISource}
              >
                <GovPieChart data={recruitmentData.joinersByGender} height={180} showLabels={true} />
              </ChartCard>

              <ChartCard
                title="New Joiners by Ethnicity"
                source={homeOfficeDEISource}
              >
                <GovPieChart data={recruitmentData.joinersByEthnicity} height={180} showLabels={true} />
              </ChartCard>
            </div>
          </div>

          <div className="mt-6 bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
            <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Recruitment Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                <p className="text-2xl font-bold text-[#003087] dark:text-white">{recruitmentData.joiners[recruitmentData.joiners.length - 1].count.toLocaleString()}</p>
                <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Joiners (2024)</p>
              </div>
              <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                <p className="text-2xl font-bold text-[#003087] dark:text-white">{recruitmentData.leavers[recruitmentData.leavers.length - 1].count.toLocaleString()}</p>
                <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Leavers (2024)</p>
              </div>
              <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                <p className="text-2xl font-bold text-[#00703C]">+{(recruitmentData.joiners[recruitmentData.joiners.length - 1].count - recruitmentData.leavers[recruitmentData.leavers.length - 1].count).toLocaleString()}</p>
                <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Net Change</p>
              </div>
              <div className="text-center p-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
                <p className="text-2xl font-bold text-[#003087] dark:text-white">{recruitmentData.joinersByGender[0].value}%</p>
                <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">Female New Joiners</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="forces">
          <ChartCard
            title="Workforce Diversity by Police Force"
            description="Percentage of female and ethnic minority officers by force"
            source={homeOfficeDEISource}
          >
            <GovBarChart
              data={forceDiversityChartData}
              bars={[
                { dataKey: 'Female', name: 'Female %', color: '#D53680' },
                { dataKey: 'Ethnic Minority', name: 'Ethnic Minority %', color: '#00703C' },
              ]}
              height={350}
            />
          </ChartCard>

          <div className="mt-6">
            <ChartCard
              title="Force Diversity Data"
              source={homeOfficeDEISource}
            >
              <DataTable
                headers={['Force', 'Female %', 'Ethnic Minority %']}
                rows={forceDiversityData.map(f => [
                  f.force,
                  `${f.female}%`,
                  `${f.ethnicMinority}%`,
                ])}
              />
            </ChartCard>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
