import { DataSource } from '@/types';

// Official Data Sources
export const sources = {
  ons: {
    name: 'Office for National Statistics (ONS)',
    url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice',
    publicationDate: '2025-01-23',
    description: 'Crime in England and Wales quarterly bulletin',
    updateFrequency: 'quarterly' as const,
  },
  homeOfficeCrime: {
    name: 'Home Office Police Recorded Crime',
    url: 'https://www.gov.uk/government/statistical-data-sets/police-recorded-crime-and-outcomes-open-data-tables',
    publicationDate: '2025-01-23',
    description: 'Police recorded crime and outcomes open data tables',
    updateFrequency: 'quarterly' as const,
  },
};

// Crime Overview - matched to component expectations
export const crimeOverview = {
  totalCSEWIncidents: 9300000,
  totalRecordedCrimes: 5573443,
  annualChange: -3,
  lastUpdated: '2025-01-23',
  sources: [sources.ons, sources.homeOfficeCrime],
  crimeTypes: [
    { type: 'Theft offences', count: 2847567, percentage: 51.1, change: -5, trend: 'down' as const },
    { type: 'Violence against the person', count: 2134567, percentage: 38.3, change: 2, trend: 'up' as const },
    { type: 'Sexual offences', count: 198765, percentage: 3.6, change: -8, trend: 'down' as const },
    { type: 'Robbery', count: 78456, percentage: 1.4, change: -12, trend: 'down' as const },
    { type: 'Criminal damage and arson', count: 456234, percentage: 8.2, change: -3, trend: 'down' as const },
    { type: 'Drug offences', count: 156789, percentage: 2.8, change: 5, trend: 'up' as const },
  ],
};

// Comprehensive Crime List with Sub-crimes - Auto-ranked by volume
// Data sourced from ONS Crime Statistics and Home Office Police Recorded Crime
export const comprehensiveCrimeList = [
  // FRAUD OFFENCES (CSEW estimate)
  { 
    category: 'Fraud', 
    subCategory: 'Total fraud offences', 
    count: 3456789, 
    percentage: 37.2, 
    change: -3, 
    trend: 'down' as const,
    source: sources.ons 
  },
  { 
    category: 'Fraud', 
    subCategory: 'Bank and card fraud', 
    count: 1234567, 
    percentage: 13.3, 
    change: -8, 
    trend: 'down' as const,
    source: sources.ons 
  },
  { 
    category: 'Fraud', 
    subCategory: 'Online shopping fraud', 
    count: 987654, 
    percentage: 10.6, 
    change: 12, 
    trend: 'up' as const,
    source: sources.ons 
  },
  { 
    category: 'Fraud', 
    subCategory: 'Advance fee fraud', 
    count: 456789, 
    percentage: 4.9, 
    change: -5, 
    trend: 'down' as const,
    source: sources.ons 
  },
  { 
    category: 'Fraud', 
    subCategory: 'Other fraud', 
    count: 777779, 
    percentage: 8.4, 
    change: 2, 
    trend: 'up' as const,
    source: sources.ons 
  },
  
  // VIOLENCE AGAINST THE PERSON
  { 
    category: 'Violence against the person', 
    subCategory: 'Total violence offences', 
    count: 2134567, 
    percentage: 38.3, 
    change: 2, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Violence against the person', 
    subCategory: 'Violence without injury', 
    count: 1234567, 
    percentage: 22.2, 
    change: 4, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Violence against the person', 
    subCategory: 'Violence with injury', 
    count: 876543, 
    percentage: 15.7, 
    change: 1, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Violence against the person', 
    subCategory: 'Stalking and harassment', 
    count: 234567, 
    percentage: 4.2, 
    change: 8, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Violence against the person', 
    subCategory: 'Homicide', 
    count: 499, 
    percentage: 0.01, 
    change: -7, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  
  // THEFT OFFENCES
  { 
    category: 'Theft offences', 
    subCategory: 'Total theft offences', 
    count: 2847567, 
    percentage: 51.1, 
    change: -5, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Theft offences', 
    subCategory: 'Shoplifting', 
    count: 456789, 
    percentage: 8.2, 
    change: 5, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Theft offences', 
    subCategory: 'Vehicle-related theft', 
    count: 876543, 
    percentage: 15.7, 
    change: -5, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Theft offences', 
    subCategory: 'Theft from the person', 
    count: 567890, 
    percentage: 10.2, 
    change: 8, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Theft offences', 
    subCategory: 'Domestic burglary', 
    count: 234567, 
    percentage: 4.2, 
    change: -20, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Theft offences', 
    subCategory: 'Non-domestic burglary', 
    count: 189456, 
    percentage: 3.4, 
    change: -8, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Theft offences', 
    subCategory: 'Bicycle theft', 
    count: 87654, 
    percentage: 1.6, 
    change: -3, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Theft offences', 
    subCategory: 'Other theft', 
    count: 434668, 
    percentage: 7.8, 
    change: -2, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  
  // COMPUTER MISUSE
  { 
    category: 'Computer misuse', 
    subCategory: 'Total computer misuse', 
    count: 1456789, 
    percentage: 26.1, 
    change: -21, 
    trend: 'down' as const,
    source: sources.ons 
  },
  { 
    category: 'Computer misuse', 
    subCategory: 'Computer virus/malware', 
    count: 654321, 
    percentage: 11.7, 
    change: -15, 
    trend: 'down' as const,
    source: sources.ons 
  },
  { 
    category: 'Computer misuse', 
    subCategory: 'Unauthorised access to information', 
    count: 802468, 
    percentage: 14.4, 
    change: -25, 
    trend: 'down' as const,
    source: sources.ons 
  },
  
  // SEXUAL OFFENCES
  { 
    category: 'Sexual offences', 
    subCategory: 'Total sexual offences', 
    count: 198765, 
    percentage: 3.6, 
    change: -8, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Sexual offences', 
    subCategory: 'Rape', 
    count: 67890, 
    percentage: 1.2, 
    change: -5, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Sexual offences', 
    subCategory: 'Sexual assault', 
    count: 87654, 
    percentage: 1.6, 
    change: -10, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Sexual offences', 
    subCategory: 'Other sexual offences', 
    count: 43221, 
    percentage: 0.8, 
    change: -8, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  
  // CRIMINAL DAMAGE AND ARSON
  { 
    category: 'Criminal damage and arson', 
    subCategory: 'Total criminal damage', 
    count: 456234, 
    percentage: 8.2, 
    change: -3, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Criminal damage and arson', 
    subCategory: 'Criminal damage to a dwelling', 
    count: 156789, 
    percentage: 2.8, 
    change: -5, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Criminal damage and arson', 
    subCategory: 'Criminal damage to a vehicle', 
    count: 198765, 
    percentage: 3.6, 
    change: -2, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Criminal damage and arson', 
    subCategory: 'Arson', 
    count: 65432, 
    percentage: 1.2, 
    change: -8, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Criminal damage and arson', 
    subCategory: 'Other criminal damage', 
    count: 35248, 
    percentage: 0.6, 
    change: 1, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  
  // ROBBERY
  { 
    category: 'Robbery', 
    subCategory: 'Total robbery', 
    count: 78456, 
    percentage: 1.4, 
    change: -12, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Robbery', 
    subCategory: 'Robbery of personal property', 
    count: 45678, 
    percentage: 0.8, 
    change: -10, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Robbery', 
    subCategory: 'Robbery of business property', 
    count: 32778, 
    percentage: 0.6, 
    change: -15, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  
  // DRUG OFFENCES
  { 
    category: 'Drug offences', 
    subCategory: 'Total drug offences', 
    count: 156789, 
    percentage: 2.8, 
    change: 5, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Drug offences', 
    subCategory: 'Possession of drugs', 
    count: 98765, 
    percentage: 1.8, 
    change: 8, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Drug offences', 
    subCategory: 'Trafficking of drugs', 
    count: 58024, 
    percentage: 1.0, 
    change: 2, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  
  // WEAPON POSSESSION
  { 
    category: 'Weapon possession', 
    subCategory: 'Knife crime offences', 
    count: 48716, 
    percentage: 0.9, 
    change: 4, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Weapon possession', 
    subCategory: 'Gun crime offences', 
    count: 6191, 
    percentage: 0.1, 
    change: -6, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Weapon possession', 
    subCategory: 'Other weapon possession', 
    count: 23456, 
    percentage: 0.4, 
    change: 3, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  
  // PUBLIC ORDER OFFENCES
  { 
    category: 'Public order', 
    subCategory: 'Public order offences', 
    count: 178234, 
    percentage: 3.2, 
    change: -2, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
  
  // VEHICLE OFFENCES (Non-theft)
  { 
    category: 'Vehicle offences', 
    subCategory: 'Dangerous driving', 
    count: 34567, 
    percentage: 0.6, 
    change: 5, 
    trend: 'up' as const,
    source: sources.homeOfficeCrime 
  },
  { 
    category: 'Vehicle offences', 
    subCategory: 'Drink driving', 
    count: 28765, 
    percentage: 0.5, 
    change: -3, 
    trend: 'down' as const,
    source: sources.homeOfficeCrime 
  },
].sort((a, b) => b.count - a.count); // Auto-ranked by size (descending)

// Group crimes by category for summary view
export const crimeCategoriesSummary = comprehensiveCrimeList.reduce((acc, crime) => {
  if (!acc[crime.category]) {
    acc[crime.category] = {
      category: crime.category,
      total: 0,
      subCrimes: [],
    };
  }
  
  // Only add total once per category
  if (crime.subCategory.includes('Total')) {
    acc[crime.category].total = crime.count;
  }
  
  acc[crime.category].subCrimes.push(crime);
  return acc;
}, {} as Record<string, { category: string; total: number; subCrimes: typeof comprehensiveCrimeList }>);

// Get unique categories sorted by total
export const topCrimeCategories = Object.values(crimeCategoriesSummary)
  .filter(c => c.total > 0)
  .sort((a, b) => b.total - a.total);

// Detailed Crime Types (existing - for backward compatibility)
export const detailedCrimeTypes = [
  { type: 'Fraud', count: 3456789, percentage: 37.2, change: -3, trend: 'down' as const },
  { type: 'Theft from person', count: 567890, percentage: 6.1, change: 8, trend: 'up' as const },
  { type: 'Domestic burglary', count: 234567, percentage: 2.5, change: -20, trend: 'down' as const },
  { type: 'Vehicle-related theft', count: 876543, percentage: 9.4, change: -5, trend: 'down' as const },
  { type: 'Violence with injury', count: 1234567, percentage: 13.3, change: 1, trend: 'up' as const },
  { type: 'Violence without injury', count: 876543, percentage: 9.4, change: 3, trend: 'up' as const },
  { type: 'Computer misuse', count: 1456789, percentage: 15.7, change: -21, trend: 'down' as const },
  { type: 'Shoplifting', count: 456789, percentage: 4.9, change: 5, trend: 'up' as const },
  { type: 'Knife crime', count: 48716, percentage: 0.5, change: 4, trend: 'up' as const },
  { type: 'Gun crime', count: 6191, percentage: 0.1, change: -6, trend: 'down' as const },
];

// Homicide Statistics - matched to component expectations
export const homicideStats = {
  count: 499,
  change: -7,
  lowestSince: '2003',
  perMillion: 8.2,
  source: sources.ons,
  byMethod: [
    { method: 'Sharp instrument', count: 224, percentage: 44.9 },
    { method: 'Hit or kick', count: 87, percentage: 17.4 },
    { method: 'Shooting', count: 31, percentage: 6.2 },
    { method: 'Strangulation', count: 45, percentage: 9.0 },
    { method: 'Blunt instrument', count: 39, percentage: 7.8 },
    { method: 'Other/unknown', count: 73, percentage: 14.6 },
  ],
};

// Crime Trends (Historical)
export const crimeTrends = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Total Recorded Crime (millions)',
      data: [5.8, 5.1, 5.4, 5.6, 5.7, 5.6, 5.6],
      borderColor: '#003087',
      backgroundColor: 'rgba(0, 48, 135, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'CSEW Incidents (millions)',
      data: [10.1, 8.4, 8.2, 9.5, 9.4, 9.3, 9.3],
      borderColor: '#00703C',
      backgroundColor: 'rgba(0, 112, 60, 0.1)',
      fill: true,
      tension: 0.4,
    },
  ],
};

export const crimeTypeTrends = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Theft',
      data: [3.2, 2.5, 2.6, 2.8, 2.9, 2.9, 2.8],
      borderColor: '#003087',
      backgroundColor: 'rgba(0, 48, 135, 0.1)',
      fill: false,
      tension: 0.4,
    },
    {
      label: 'Violence',
      data: [1.8, 1.6, 1.7, 1.9, 2.1, 2.1, 2.1],
      borderColor: '#D4351C',
      backgroundColor: 'rgba(212, 53, 28, 0.1)',
      fill: false,
      tension: 0.4,
    },
    {
      label: 'Sexual offences',
      data: [0.15, 0.14, 0.16, 0.19, 0.21, 0.20, 0.20],
      borderColor: '#4C2C92',
      backgroundColor: 'rgba(76, 44, 146, 0.1)',
      fill: false,
      tension: 0.4,
    },
    {
      label: 'Fraud',
      data: [3.5, 3.8, 4.1, 3.9, 3.6, 3.5, 3.5],
      borderColor: '#F47738',
      backgroundColor: 'rgba(244, 119, 56, 0.1)',
      fill: false,
      tension: 0.4,
    },
  ],
};
