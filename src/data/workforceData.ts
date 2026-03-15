import { DataSource, WorkforceStats, WorkforceDemographics, ForceData } from '@/types';

// Data Sources
export const workforceSource: DataSource = {
  name: 'Home Office Police Workforce Statistics',
  url: 'https://www.gov.uk/government/collections/police-workforce-england-and-wales',
  publicationDate: '2025-03-27',
  description: 'Police workforce England and Wales quarterly statistics',
  updateFrequency: 'quarterly',
};

export const commonsSource: DataSource = {
  name: 'House of Commons Library - Police Service Strength',
  url: 'https://commonslibrary.parliament.uk/research-briefings/sn00634/',
  publicationDate: '2024-12-05',
  description: 'Police service strength research briefing',
  updateFrequency: 'annually',
};

// Main Workforce Statistics (March 2025)
export const workforceStats = {
  totalOfficers: 146442,
  totalStaff: 73891,
  totalPCSOs: 15420,
  totalWorkforce: 235753,
  frontlinePercentage: 83.2,
  lastUpdated: '2025-03-27',
  source: workforceSource,
};

// Demographics
export const workforceDemographics: WorkforceDemographics = {
  femalePercentage: 35.2,
  ethnicMinorityPercentage: 8.4,
  blackOfficers: 4503,
  asianOfficers: 5678,
  mixedOfficers: 1823,
  otherEthnicity: 320,
  joinersLastYear: 12567,
  leaversLastYear: 9876,
  source: workforceSource,
};

// Workforce by Force (Top 15 forces by officer numbers)
export const forcesByOfficers: ForceData[] = [
  { name: 'Metropolitan Police', officers: 34234, staff: 16345, pcsos: 1234, frontlinePercent: 81.2, femalePercent: 33.4, ethnicMinorityPercent: 15.8 },
  { name: 'Greater Manchester', officers: 8234, staff: 4567, pcsos: 345, frontlinePercent: 84.5, femalePercent: 36.2, ethnicMinorityPercent: 8.9 },
  { name: 'West Midlands', officers: 7654, staff: 3890, pcsos: 456, frontlinePercent: 82.3, femalePercent: 35.8, ethnicMinorityPercent: 12.3 },
  { name: 'West Yorkshire', officers: 5678, staff: 2890, pcsos: 234, frontlinePercent: 85.6, femalePercent: 37.1, ethnicMinorityPercent: 7.8 },
  { name: 'Lancashire', officers: 3456, staff: 1789, pcsos: 167, frontlinePercent: 86.2, femalePercent: 38.4, ethnicMinorityPercent: 4.2 },
  { name: 'Thames Valley', officers: 4567, staff: 2345, pcsos: 198, frontlinePercent: 83.4, femalePercent: 35.6, ethnicMinorityPercent: 6.7 },
  { name: 'Hampshire', officers: 3789, staff: 1890, pcsos: 178, frontlinePercent: 84.8, femalePercent: 36.8, ethnicMinorityPercent: 5.4 },
  { name: 'Kent', officers: 3678, staff: 1756, pcsos: 167, frontlinePercent: 85.1, femalePercent: 37.2, ethnicMinorityPercent: 4.8 },
  { name: 'Essex', officers: 3456, staff: 1678, pcsos: 156, frontlinePercent: 86.3, femalePercent: 38.1, ethnicMinorityPercent: 5.1 },
  { name: 'South Yorkshire', officers: 2987, staff: 1456, pcsos: 134, frontlinePercent: 84.2, femalePercent: 36.5, ethnicMinorityPercent: 6.3 },
  { name: 'Merseyside', officers: 3123, staff: 1534, pcsos: 145, frontlinePercent: 83.9, femalePercent: 35.9, ethnicMinorityPercent: 3.8 },
  { name: 'Northumbria', officers: 3234, staff: 1567, pcsos: 156, frontlinePercent: 85.4, femalePercent: 37.6, ethnicMinorityPercent: 2.9 },
  { name: 'Surrey', officers: 2345, staff: 1123, pcsos: 98, frontlinePercent: 86.7, femalePercent: 39.2, ethnicMinorityPercent: 6.1 },
  { name: 'Devon & Cornwall', officers: 3123, staff: 1489, pcsos: 167, frontlinePercent: 87.1, femalePercent: 38.8, ethnicMinorityPercent: 2.3 },
  { name: 'Avon & Somerset', officers: 2876, staff: 1389, pcsos: 134, frontlinePercent: 84.6, femalePercent: 36.4, ethnicMinorityPercent: 4.5 },
];

// Officer Rank Distribution
export const rankDistribution = [
  { rank: 'Constable', count: 108234, percentage: 73.9 },
  { rank: 'Sergeant', count: 21345, percentage: 14.6 },
  { rank: 'Inspector', count: 9876, percentage: 6.7 },
  { rank: 'Chief Inspector', count: 3456, percentage: 2.4 },
  { rank: 'Superintendent', count: 2156, percentage: 1.5 },
  { rank: 'Chief Superintendent', count: 987, percentage: 0.7 },
  { rank: 'Commander/ACPO', count: 388, percentage: 0.3 },
];

// Workforce Trends
export const workforceTrends = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Total Officers (thousands)',
      data: [124.6, 122.3, 121.9, 122.4, 123.1, 128.7, 135.4, 140.2, 143.8, 145.2, 146.4],
      borderColor: '#003087',
      backgroundColor: 'rgba(0, 48, 135, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Female Officers (%)',
      data: [28.2, 28.6, 29.1, 29.8, 30.2, 31.2, 32.5, 33.8, 34.5, 35.0, 35.2],
      borderColor: '#D53680',
      backgroundColor: 'rgba(213, 54, 128, 0.1)',
      fill: false,
      tension: 0.4,
    },
    {
      label: 'Ethnic Minority Officers (%)',
      data: [5.5, 5.7, 5.9, 6.2, 6.5, 6.9, 7.3, 7.8, 8.1, 8.3, 8.4],
      borderColor: '#00703C',
      backgroundColor: 'rgba(0, 112, 60, 0.1)',
      fill: false,
      tension: 0.4,
    },
  ],
};

// Joiners and Leavers Trend
export const joinersLeavers = {
  labels: ['2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Joiners',
      data: [8567, 9876, 11234, 12345, 12567],
      borderColor: '#00703C',
      backgroundColor: '#00703C',
    },
    {
      label: 'Leavers',
      data: [9234, 8567, 9123, 9567, 9876],
      borderColor: '#D4351C',
      backgroundColor: '#D4351C',
    },
  ],
};

// Scotland Workforce
export const scotlandWorkforce = {
  totalOfficers: 17234,
  totalStaff: 6789,
  totalSpecials: 534,
  lastUpdated: '2025-03-31',
  source: {
    name: 'Scottish Government Police Workforce',
    url: 'https://www.gov.scot/collections/police-workforce-scotland/',
    publicationDate: '2025-03-31',
    description: 'Police workforce statistics for Scotland',
    updateFrequency: 'quarterly',
  },
};

// Northern Ireland Workforce
export const niWorkforce = {
  totalOfficers: 6723,
  totalStaff: 2345,
  totalPCSOs: 0, // PSNI does not have PCSOs
  lastUpdated: '2025-03-01',
  source: {
    name: 'PSNI Workforce Statistics',
    url: 'https://www.psni.police.uk/about-us/our-publications-and-reports/official-statistics',
    publicationDate: '2025-03-01',
    description: 'Police workforce statistics for Northern Ireland',
    updateFrequency: 'quarterly',
  },
};
