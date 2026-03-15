'use client';

import { StatCard } from './StatCard';
import { ChartCard, DataTable } from './ChartCard';
import { GovBarChart, GovLineChart, GovPieChart } from './Charts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { workforceStats, workforceSource, workforceTrends, rankDistribution, workforceDemographics, joinersLeavers } from '@/data/workforceData';
import { workforceDiversityData, collegePoliceData } from '@/data/ethnicityData';

export function WorkforceSection() {
  // Prepare chart data
  const officerTrendData = workforceTrends.labels.map((label, i) => ({
    name: label,
    'Officers': workforceTrends.datasets[0].data[i],
    'Female %': workforceTrends.datasets[1].data[i],
    'Ethnic Minority %': workforceTrends.datasets[2].data[i],
  }));

  const rankData = rankDistribution.map(r => ({
    name: r.rank,
    value: r.count,
  }));

  const ethnicityData = workforceDiversityData.policeByEthnicity.map(e => ({
    name: e.ethnicity,
    value: e.officers,
  }));

  const nationalityData = workforceDiversityData.policeByNationality.map(n => ({
    name: n.nationality,
    value: n.officers,
  }));

  const genderData = [
    { name: 'Male', value: Math.round(workforceStats.totalOfficers * (100 - workforceDemographics.femalePercentage) / 100) },
    { name: 'Female', value: Math.round(workforceStats.totalOfficers * workforceDemographics.femalePercentage / 100) },
  ];

  const genderTableData = [
    ['Male', Math.round(workforceStats.totalOfficers * (100 - workforceDemographics.femalePercentage) / 100).toLocaleString(), `${(100 - workforceDemographics.femalePercentage).toFixed(1)}%`],
    ['Female', Math.round(workforceStats.totalOfficers * workforceDemographics.femalePercentage / 100).toLocaleString(), `${workforceDemographics.femalePercentage.toFixed(1)}%`],
  ];

  const recruitmentTableData = collegePoliceData.recruitmentStats.byRoute.map(r => [
    r.route,
    r.applications.toLocaleString(),
    r.success.toLocaleString(),
    `${((r.success / r.applications) * 100).toFixed(1)}%`,
  ]);

  const joinersLeaversData = joinersLeavers.labels.map((label, i) => ({
    name: label,
    'Joiners': joinersLeavers.datasets[0].data[i],
    'Leavers': joinersLeavers.datasets[1].data[i],
  }));

  return (
    <section id="workforce" className="py-8" aria-labelledby="workforce-heading">
      <div className="border-l-4 border-[#003087] pl-4 mb-6">
        <h2 id="workforce-heading" className="text-2xl font-bold text-[#003087] dark:text-white">
          Police Workforce
        </h2>
        <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
          Data from Home Office, College of Police, and House of Commons Library
        </p>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Officers"
          value={workforceStats.totalOfficers.toLocaleString()}
          change={5}
          trend="up"
          source={workforceSource}
          highlight
        />
        <StatCard
          title="Police Staff"
          value={workforceStats.totalStaff.toLocaleString()}
          change={3}
          trend="up"
          source={workforceSource}
        />
        <StatCard
          title="PCSOs"
          value={workforceStats.totalPCSOs.toLocaleString()}
          source={workforceSource}
        />
        <StatCard
          title="Female Officers"
          value={`${workforceDemographics.femalePercentage}%`}
          description={`${Math.round(workforceStats.totalOfficers * workforceDemographics.femalePercentage / 100).toLocaleString()} officers`}
          source={workforceSource}
        />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ethnicity">Ethnicity</TabsTrigger>
          <TabsTrigger value="nationality">Nationality</TabsTrigger>
          <TabsTrigger value="gender">Gender</TabsTrigger>
          <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Officer Numbers Trend"
              description="Total officers and diversity trends (thousands)"
              source={workforceSource}
            >
              <GovLineChart
                data={officerTrendData}
                lines={[
                  { dataKey: 'Officers', name: 'Total Officers' },
                ]}
                height={280}
              />
            </ChartCard>

            <ChartCard
              title="Officers by Rank"
              description="Distribution of officers by rank"
              source={workforceSource}
            >
              <GovBarChart
                data={rankData}
                bars={[{ dataKey: 'value', name: 'Officers' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChartCard
              title="Joiners vs Leavers"
              description="Annual joiners and leavers trend"
              source={workforceSource}
            >
              <GovBarChart
                data={joinersLeaversData}
                bars={[
                  { dataKey: 'Joiners', name: 'Joiners', color: '#00703C' },
                  { dataKey: 'Leavers', name: 'Leavers', color: '#D4351C' },
                ]}
                height={250}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Workforce Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Total Workforce</span>
                  <span className="font-semibold">{workforceStats.totalWorkforce.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Frontline Percentage</span>
                  <span className="font-semibold">{workforceStats.frontlinePercentage}%</span>
                </div>
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Ethnic Minority Officers</span>
                  <span className="font-semibold">{workforceDemographics.ethnicMinorityPercentage}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Joiners Last Year</span>
                  <span className="font-semibold text-[#00703C]">+{workforceDemographics.joinersLastYear.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ethnicity">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Workforce by Ethnicity"
              description="Police officers by ethnic background"
              source={workforceDiversityData.source}
            >
              <GovPieChart data={ethnicityData} height={280} />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Ethnicity Breakdown</h4>
              <DataTable
                headers={['Ethnicity', 'Officers', 'Percentage']}
                rows={workforceDiversityData.policeByEthnicity.map(e => [
                  e.ethnicity,
                  e.officers.toLocaleString(),
                  `${e.percentage}%`,
                ])}
              />
              <a
                href={workforceDiversityData.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D70B8] dark:text-[#64B5F6] hover:underline text-sm mt-4 inline-block"
              >
                Source: {workforceDiversityData.source.name} →
              </a>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="nationality">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Workforce by Nationality"
              description="Police officers by nationality"
              source={workforceSource}
            >
              <GovPieChart data={nationalityData} height={280} />
            </ChartCard>

            <ChartCard
              title="Officers by Nationality"
              description="Breakdown by nationality"
              source={workforceSource}
            >
              <GovBarChart
                data={nationalityData}
                bars={[{ dataKey: 'value', name: 'Officers' }]}
                layout="vertical"
                showLegend={false}
                height={280}
              />
            </ChartCard>
          </div>
        </TabsContent>

        <TabsContent value="gender">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Workforce by Gender"
              description="Male and female officers"
              source={workforceSource}
            >
              <GovPieChart data={genderData} height={280} />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Gender Breakdown</h4>
              <DataTable
                headers={['Gender', 'Count', 'Percentage']}
                rows={genderTableData}
              />
              <a
                href={workforceSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D70B8] dark:text-[#64B5F6] hover:underline text-sm mt-4 inline-block"
              >
                Source: {workforceSource.name} →
              </a>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="recruitment">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Recruitment by Route"
              description="Applications and successful candidates by route"
              source={collegePoliceData.source}
            >
              <GovBarChart
                data={collegePoliceData.recruitmentStats.byRoute.map(r => ({
                  name: r.route,
                  Applications: r.applications,
                  Successful: r.success,
                }))}
                bars={[
                  { dataKey: 'Applications', name: 'Applications', color: '#003087' },
                  { dataKey: 'Successful', name: 'Successful', color: '#00703C' },
                ]}
                height={280}
              />
            </ChartCard>

            <div className="bg-white dark:bg-[#2B2B2B] p-6 border border-[#DEE0E2] dark:border-[#3A3A3A]">
              <h4 className="font-semibold text-[#003087] dark:text-white mb-4">Recruitment Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Total Applications</span>
                  <span className="font-semibold">{collegePoliceData.recruitmentStats.totalApplications.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-[#DEE0E2] dark:border-[#3A3A3A] pb-2">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Successful</span>
                  <span className="font-semibold text-[#00703C]">{collegePoliceData.recruitmentStats.successfulApplications.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Success Rate</span>
                  <span className="font-semibold">{collegePoliceData.recruitmentStats.successRate}%</span>
                </div>
              </div>
              <a
                href={collegePoliceData.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D70B8] dark:text-[#64B5F6] hover:underline text-sm mt-4 inline-block"
              >
                Source: {collegePoliceData.source.name} →
              </a>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
