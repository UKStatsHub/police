import { DataSource, CrimeStat, ScotlandCrimeData, NICrimeData, WalesCrimeData } from '@/types';

// Scotland Data Sources
export const scotlandSource: DataSource = {
  name: 'Scottish Government - Recorded Crime in Scotland',
  url: 'https://www.gov.scot/collections/recorded-crime-in-scotland',
  publicationDate: '2025-02-25',
  description: 'Official statistics on recorded crime in Scotland',
  updateFrequency: 'quarterly',
};

export const scotlandJusticeSource: DataSource = {
  name: 'Scottish Government Justice Statistics',
  url: 'https://www.gov.scot/collections/justice-statistics',
  publicationDate: '2025-01-28',
  description: 'Justice statistics for Scotland',
  updateFrequency: 'quarterly',
};

// Northern Ireland Data Sources
export const niSource: DataSource = {
  name: 'PSNI Police Recorded Crime Statistics',
  url: 'https://www.psni.police.uk/about-us/our-publications-and-reports/official-statistics/police-recorded-crime-statistics',
  publicationDate: '2025-01-10',
  description: 'Police recorded crime statistics for Northern Ireland',
  updateFrequency: 'monthly',
};

// Wales Data Sources
export const walesSource: DataSource = {
  name: 'StatsWales - Recorded Crime',
  url: 'https://statswales.gov.wales/Catalogue/Community-Safety-and-Social-Inclusion/Community-Safety/Crime-and-Justice/Recorded-Crime',
  publicationDate: '2025-01-20',
  description: 'Recorded crime statistics for Wales',
  updateFrequency: 'quarterly',
};

// Scotland Crime Data (Year ending December 2024)
export const scotlandCrimeData: ScotlandCrimeData = {
  totalCrimes: 308532,
  change: 3,
  crimeTypes: [
    { type: 'Non-sexual crimes of violence', count: 69456, percentage: 22.5, change: 5, trend: 'up', source: scotlandSource },
    { type: 'Sexual crimes', count: 14567, percentage: 4.7, change: 2, trend: 'up', source: scotlandSource },
    { type: 'Crimes of dishonesty', count: 123456, percentage: 40.0, change: -1, trend: 'down', source: scotlandSource },
    { type: 'Fire-raising, vandalism etc', count: 45678, percentage: 14.8, change: 3, trend: 'up', source: scotlandSource },
    { type: 'Other crimes', count: 55375, percentage: 17.9, change: 6, trend: 'up', source: scotlandSource },
  ],
  source: scotlandSource,
};

// Scotland Crime Trends
export const scotlandTrends = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Total Crimes (thousands)',
      data: [246.5, 246.5, 282.4, 298.8, 299.5, 300.4, 308.5],
      borderColor: '#003087',
      backgroundColor: 'rgba(0, 48, 135, 0.1)',
      fill: true,
      tension: 0.4,
    },
  ],
};

// Scotland Homicide
export const scotlandHomicide = {
  count: 53,
  change: -4,
  perMillion: 9.7,
  source: {
    name: 'Scottish Government - Homicide in Scotland',
    url: 'https://www.gov.scot/publications/homicide-scotland-2023-24',
    publicationDate: '2024-10-29',
    description: 'Homicide statistics for Scotland',
    updateFrequency: 'annually',
  },
};

// Scotland Police Workforce
export const scotlandWorkforce = {
  totalOfficers: 17234,
  totalStaff: 6789,
  specialConstables: 534,
  policeScotland: {
    officers: 16345,
    staff: 6234,
  },
  scottishPoliceAuthority: {
    staff: 555,
  },
  lastUpdated: '2025-03-31',
  source: {
    name: 'Scottish Government Police Workforce',
    url: 'https://www.gov.scot/collections/police-workforce-scotland/',
    publicationDate: '2025-03-31',
    description: 'Police workforce statistics for Scotland',
    updateFrequency: 'quarterly',
  },
};

// Northern Ireland Crime Data (Year ending December 2024)
export const niCrimeData: NICrimeData = {
  totalCrimes: 105432,
  change: -2,
  crimeTypes: [
    { type: 'Violence against the person', count: 34567, percentage: 32.8, change: 1, trend: 'up', source: niSource },
    { type: 'Sexual offences', count: 4567, percentage: 4.3, change: 3, trend: 'up', source: niSource },
    { type: 'Burglary', count: 8765, percentage: 8.3, change: -5, trend: 'down', source: niSource },
    { type: 'Robbery', count: 1234, percentage: 1.2, change: -8, trend: 'down', source: niSource },
    { type: 'Theft and handling', count: 23456, percentage: 22.2, change: -3, trend: 'down', source: niSource },
    { type: 'Fraud', count: 12345, percentage: 11.7, change: 2, trend: 'up', source: niSource },
    { type: 'Criminal damage', count: 15678, percentage: 14.9, change: -4, trend: 'down', source: niSource },
    { type: 'Drug offences', count: 3456, percentage: 3.3, change: 1, trend: 'up', source: niSource },
    { type: 'Other offences', count: 1364, percentage: 1.3, change: 0, trend: 'stable', source: niSource },
  ],
  source: niSource,
};

// Northern Ireland Trends
export const niTrends = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Total Crimes (thousands)',
      data: [98.5, 92.3, 96.7, 102.3, 107.6, 108.2, 105.4],
      borderColor: '#003087',
      backgroundColor: 'rgba(0, 48, 135, 0.1)',
      fill: true,
      tension: 0.4,
    },
  ],
};

// Northern Ireland Workforce
export const niWorkforce = {
  totalOfficers: 6723,
  totalStaff: 2345,
  lastUpdated: '2025-03-01',
  demographics: {
    femalePercentage: 31.5,
    ethnicMinorityPercentage: 0.8,
    catholicPercentage: 32.1,
  },
  source: {
    name: 'PSNI Workforce Statistics',
    url: 'https://www.psni.police.uk/about-us/our-publications-and-reports/official-statistics',
    publicationDate: '2025-03-01',
    description: 'Police workforce statistics for Northern Ireland',
    updateFrequency: 'quarterly',
  },
};

// Wales Crime Data (Year ending December 2024)
export const walesCrimeData: WalesCrimeData = {
  totalCrimes: 187654,
  change: -1,
  byForce: [
    { force: 'South Wales', crimes: 78456 },
    { force: 'North Wales', crimes: 45678 },
    { force: 'Dyfed-Powys', crimes: 34567 },
    { force: 'Gwent', crimes: 28953 },
  ],
  source: walesSource,
};

// Wales Crime Types
export const walesCrimeTypes: CrimeStat[] = [
  { type: 'Violence against the person', count: 62345, percentage: 33.2, change: 2, trend: 'up', source: walesSource },
  { type: 'Sexual offences', count: 5678, percentage: 3.0, change: -2, trend: 'down', source: walesSource },
  { type: 'Burglary', count: 12345, percentage: 6.6, change: -15, trend: 'down', source: walesSource },
  { type: 'Vehicle offences', count: 23456, percentage: 12.5, change: -5, trend: 'down', source: walesSource },
  { type: 'Theft', count: 45678, percentage: 24.3, change: 1, trend: 'up', source: walesSource },
  { type: 'Criminal damage', count: 23456, percentage: 12.5, change: -3, trend: 'down', source: walesSource },
  { type: 'Drug offences', count: 8976, percentage: 4.8, change: 4, trend: 'up', source: walesSource },
  { type: 'Other', count: 6072, percentage: 3.2, change: 0, trend: 'stable', source: walesSource },
];

// UK-wide Summary
export const ukWideSummary = {
  totalCrimes: {
    englandWales: 5573443,
    scotland: 308532,
    northernIreland: 105432,
    total: 5987407,
  },
  totalOfficers: {
    englandWales: 146442,
    scotland: 17234,
    northernIreland: 6723,
    total: 170399,
  },
  lastUpdated: '2025-03-27',
  sources: [
    { name: 'ONS', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice' },
    { name: 'Scottish Government', url: 'https://www.gov.scot/collections/recorded-crime-in-scotland' },
    { name: 'PSNI', url: 'https://www.psni.police.uk/about-us/our-publications-and-reports/official-statistics' },
  ],
};

// Comparison Chart Data
export const ukComparison = {
  labels: ['England & Wales', 'Scotland', 'Northern Ireland'],
  datasets: [
    {
      label: 'Crimes per 1,000 population',
      data: [87.3, 56.4, 55.2],
      backgroundColor: ['#003087', '#00703C', '#D4351C'],
    },
    {
      label: 'Officers per 1,000 population',
      data: [2.3, 3.2, 3.5],
      backgroundColor: ['#1D70B8', '#00875F', '#F47738'],
    },
  ],
};
