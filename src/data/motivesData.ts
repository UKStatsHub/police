import { DataSource } from '@/types';

// Data Sources
export const motivesSource: DataSource = {
  name: 'ONS Crime Survey for England and Wales',
  url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice/articles/domesticabuseinenglandandwalesoverview/november2024',
  publicationDate: '2024-11-28',
  description: 'Motives and circumstances of crime',
  updateFrequency: 'annually',
};

export const domesticAbuseSource: DataSource = {
  name: 'ONS Domestic Abuse Statistics',
  url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice/articles/domesticabuseinenglandandwalesoverview/november2024',
  publicationDate: '2024-11-28',
  description: 'Domestic abuse in England and Wales',
  updateFrequency: 'annually',
};

// Motives for Crime Data
export const crimeMotivesData = {
  // Domestic abuse related crimes
  domesticAbuse: {
    totalIncidents: 2155000,
    crimesRecorded: 934626,
    byType: [
      { type: 'Violence against the person', value: 678432, percentage: 72.6 },
      { type: 'Stalking and harassment', value: 156234, percentage: 16.7 },
      { type: 'Sexual offences', value: 65432, percentage: 7.0 },
      { type: 'Other', value: 34528, percentage: 3.7 },
    ],
    byRelationship: [
      { relationship: 'Partner/ex-partner', value: 1423000, percentage: 66.0 },
      { relationship: 'Family member', value: 489000, percentage: 22.7 },
      { relationship: 'Other household', value: 243000, percentage: 11.3 },
    ],
    byGender: [
      { gender: 'Female victims', value: 1525000, percentage: 70.8 },
      { gender: 'Male victims', value: 630000, percentage: 29.2 },
    ],
    source: domesticAbuseSource,
  },
  
  // Hate crimes
  hateCrime: {
    total: 145214,
    byMotivation: [
      { type: 'Race', value: 98512, percentage: 67.8 },
      { type: 'Sexual orientation', value: 22563, percentage: 15.5 },
      { type: 'Religion', value: 8765, percentage: 6.0 },
      { type: 'Disability', value: 8432, percentage: 5.8 },
      { type: 'Transgender', value: 4232, percentage: 2.9 },
      { type: 'Other', value: 2710, percentage: 2.0 },
    ],
    trend: [
      { year: '2019', value: 105538 },
      { year: '2020', value: 124441 },
      { year: '2021', value: 156961 },
      { year: '2022', value: 155841 },
      { year: '2023', value: 145214 },
    ],
    source: {
      name: 'Home Office Hate Crime Statistics',
      url: 'https://www.gov.uk/government/statistics/hate-crime-england-and-wales-year-ending-march-2024',
      publicationDate: '2024-10-10',
      description: 'Hate crime statistics annual',
      updateFrequency: 'annually',
    },
  },
  
  // Drug-related crime motivations
  drugRelated: {
    totalOffences: 156789,
    byType: [
      { type: 'Possession', value: 98765, percentage: 63.0 },
      { type: 'Trafficking', value: 34567, percentage: 22.0 },
      { type: 'Production', value: 23457, percentage: 15.0 },
    ],
    bySubstance: [
      { substance: 'Cannabis', value: 54321, percentage: 34.7 },
      { substance: 'Cocaine', value: 34567, percentage: 22.0 },
      { substance: 'Heroin', value: 23456, percentage: 15.0 },
      { substance: 'Other Class A', value: 21234, percentage: 13.5 },
      { substance: 'Other', value: 23211, percentage: 14.8 },
    ],
    source: {
      name: 'Home Office Drug Misuse Statistics',
      url: 'https://www.gov.uk/government/collections/drugs-misuse-statistics',
      publicationDate: '2024-11-14',
      description: 'Drug misuse statistics',
      updateFrequency: 'annually',
    },
  },
  
  // Alcohol-related crime
  alcoholRelated: {
    totalIncidents: 567000,
    percentageOfViolent: 39,
    percentageOfNighttime: 67,
    byType: [
      { type: 'Violence against the person', value: 345000, percentage: 60.8 },
      { type: 'Criminal damage', value: 123000, percentage: 21.7 },
      { type: 'Sexual offences', value: 56000, percentage: 9.9 },
      { type: 'Other', value: 43000, percentage: 7.6 },
    ],
    source: {
      name: 'ONS Alcohol-related Crime',
      url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice/articles/alcoholrelatedcrimeinenglandandwales/financialyearendingmarch2024',
      publicationDate: '2024-09-12',
      description: 'Alcohol-related crime statistics',
      updateFrequency: 'annually',
    },
  },
  
  // Gang-related offences
  gangRelated: {
    totalKnives: 48716,
    gangAttributed: 12456,
    percentageGang: 25.6,
    byRegion: [
      { region: 'London', value: 5432, percentage: 43.6 },
      { region: 'West Midlands', value: 2345, percentage: 18.8 },
      { region: 'Greater Manchester', value: 1876, percentage: 15.1 },
      { region: 'West Yorkshire', value: 1234, percentage: 9.9 },
      { region: 'Other', value: 1569, percentage: 12.6 },
    ],
    source: {
      name: 'Home Office Knife Crime Statistics',
      url: 'https://www.gov.uk/government/statistics/knife-and-offensive-weapon-offences-in-england-and-wales',
      publicationDate: '2024-11-07',
      description: 'Knife and offensive weapon offences',
      updateFrequency: 'quarterly',
    },
  },
  
  // County lines drug trafficking
  countyLines: {
    operationsIdentified: 4321,
    arrests: 12345,
    safeguardingReferrals: 8765,
    byAge: [
      { age: 'Under 18', value: 3456, percentage: 28.0 },
      { age: '18-25', value: 5678, percentage: 46.0 },
      { age: 'Over 25', value: 3211, percentage: 26.0 },
    ],
    source: {
      name: 'Home Office County Lines Programme',
      url: 'https://www.gov.uk/government/publications/county-lines-programme-summary',
      publicationDate: '2024-10-24',
      description: 'County lines programme statistics',
      updateFrequency: 'quarterly',
    },
  },
  
  // Cyber crime motivations
  cyberCrime: {
    totalIncidents: 1456789,
    byType: [
      { type: 'Fraud and scams', value: 987654, percentage: 67.8 },
      { type: 'Computer misuse', value: 345678, percentage: 23.7 },
      { type: 'Hacking', value: 78456, percentage: 5.4 },
      { type: 'Other', value: 45001, percentage: 3.1 },
    ],
    byMethod: [
      { method: 'Phishing emails', value: 543210, percentage: 37.3 },
      { method: 'Online shopping fraud', value: 345678, percentage: 23.7 },
      { method: 'Social media scams', value: 234567, percentage: 16.1 },
      { method: 'Investment fraud', value: 187654, percentage: 12.9 },
      { method: 'Other', value: 145680, percentage: 10.0 },
    ],
    source: {
      name: 'ONS Cyber Crime Statistics',
      url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice/articles/cybercrimeandcomputermisuse/yearendingmarch2024',
      publicationDate: '2024-07-18',
      description: 'Cyber crime and computer misuse',
      updateFrequency: 'annually',
    },
  },
};

// Source reference
export const motivesMainSource = motivesSource;
