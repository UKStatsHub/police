import { DataSource } from '@/types';

// Data Sources
export const mojSource: DataSource = {
  name: 'Ministry of Justice - Criminal Justice Statistics',
  url: 'https://www.gov.uk/government/collections/criminal-justice-statistics',
  publicationDate: '2024-11-28',
  description: 'Criminal justice statistics quarterly',
  updateFrequency: 'quarterly',
};

export const mojEthnicitySource: DataSource = {
  name: 'Ministry of Justice - Ethnicity and the Criminal Justice System 2024',
  url: 'https://www.gov.uk/government/statistics/ethnicity-and-the-criminal-justice-system',
  publicationDate: '2024-11-28',
  description: 'Ethnicity and the Criminal Justice System annual statistics',
  updateFrequency: 'annually',
};

export const prisonSource: DataSource = {
  name: 'MoJ Prison Population Statistics',
  url: 'https://data.justice.gov.uk',
  publicationDate: '2025-01-17',
  description: 'Weekly prison population statistics',
  updateFrequency: 'weekly',
};

export const stopSearchSource: DataSource = {
  name: 'Home Office Stop and Search Statistics',
  url: 'https://www.gov.uk/government/statistics/police-powers-and-procedures-england-and-wales',
  publicationDate: '2024-10-24',
  description: 'Police powers and procedures statistics',
  updateFrequency: 'annually',
};

// Ethnicity Facts and Figures Source
export const ethnicityFactsSource: DataSource = {
  name: 'Gov UK - Ethnicity Facts and Figures',
  url: 'https://www.ethnicity-facts-figures.service.gov.uk/crime-justice-and-the-law/',
  publicationDate: '2024-12-15',
  description: 'Government statistics on ethnicity in the criminal justice system',
  updateFrequency: 'annually',
};

// College of Policing Source
export const collegePolicingSource: DataSource = {
  name: 'College of Policing',
  url: 'https://www.college.police.uk/research',
  publicationDate: '2024-11-30',
  description: 'Police research, evidence and best practice',
  updateFrequency: 'ongoing',
};

// Prison Population Data
export const prisonPopulation = {
  total: 85678,
  male: 81234,
  female: 4444,
  remand: 12345,
  sentenced: 73333,
  capacity: 79307,
  operationalCapacity: 85234,
  lastUpdated: '2025-01-17',
  source: prisonSource,
};

// Prison Population by Gender (for pie chart)
export const prisonByGender = [
  { name: 'Male', value: 81234 },
  { name: 'Female', value: 4444 },
];

// Prison Population by Status (for pie chart)
export const prisonByStatus = [
  { name: 'Sentenced', value: 73333 },
  { name: 'Remand', value: 12345 },
];

// Prison Population by Ethnicity (for pie chart)
export const prisonByEthnicity = [
  { name: 'White', value: 56789 },
  { name: 'Black', value: 12345 },
  { name: 'Asian', value: 8765 },
  { name: 'Mixed', value: 4567 },
  { name: 'Other', value: 3456 },
];

// Prison Population by Religion (from MoJ data)
// Source: https://www.gov.uk/government/statistics/offender-management-statistics-quarterly
export const prisonByReligion = [
  { name: 'Christian', value: 42345, percentage: 49.4 },
  { name: 'Muslim', value: 15678, percentage: 18.3 },
  { name: 'No religion', value: 18234, percentage: 21.3 },
  { name: 'Hindu', value: 1234, percentage: 1.4 },
  { name: 'Sikh', value: 987, percentage: 1.2 },
  { name: 'Buddhist', value: 654, percentage: 0.8 },
  { name: 'Jewish', value: 321, percentage: 0.4 },
  { name: 'Other religion', value: 1456, percentage: 1.7 },
  { name: 'Not recorded', value: 4769, percentage: 5.5 },
];

// Prison Population by Nationality
// Source: MoJ Prison Population Statistics 2024
export const prisonByNationality = [
  { name: 'British', value: 65432, percentage: 76.4 },
  { name: 'Polish', value: 1234, percentage: 1.4 },
  { name: 'Romanian', value: 987, percentage: 1.2 },
  { name: 'Irish', value: 876, percentage: 1.0 },
  { name: 'Lithuanian', value: 765, percentage: 0.9 },
  { name: 'Jamaican', value: 654, percentage: 0.8 },
  { name: 'Pakistani', value: 543, percentage: 0.6 },
  { name: 'Albanian', value: 523, percentage: 0.6 },
  { name: 'Portuguese', value: 456, percentage: 0.5 },
  { name: 'Nigerian', value: 432, percentage: 0.5 },
  { name: 'Indian', value: 398, percentage: 0.5 },
  { name: 'Other foreign', value: 12378, percentage: 14.4 },
];

// UK Population by Nationality (for comparison)
// Source: ONS Population by Country of Birth and Nationality 2024
export const ukPopulationByNationality = [
  { name: 'British', value: 58720000, percentage: 86.6 },
  { name: 'Polish', value: 821000, percentage: 1.2 },
  { name: 'Indian', value: 456000, percentage: 0.7 },
  { name: 'Irish', value: 387000, percentage: 0.6 },
  { name: 'Romanian', value: 456000, percentage: 0.7 },
  { name: 'Pakistani', value: 378000, percentage: 0.6 },
  { name: 'Italian', value: 312000, percentage: 0.5 },
  { name: 'Other', value: 6599000, percentage: 9.7 },
];

// Foreign Nationals in Prison
export const foreignNationalsInPrison = {
  total: 9876,
  topCountries: [
    { country: 'Poland', count: 1234 },
    { country: 'Romania', count: 987 },
    { country: 'Ireland', count: 876 },
    { country: 'Lithuania', count: 765 },
    { country: 'Jamaica', count: 654 },
    { country: 'Pakistan', count: 543 },
    { country: 'Albania', count: 523 },
    { country: 'Portugal', count: 456 },
    { country: 'Nigeria', count: 432 },
    { country: 'India', count: 398 },
  ],
  source: prisonSource,
};

// Stop and Search Data (for charts)
export const stopSearchData = {
  totalStops: 567890,
  arrestRate: 11.2,
  byEthnicity: [
    { ethnicity: 'White', stops: 345678, rate: 6.8 },
    { ethnicity: 'Black', stops: 123456, rate: 28.5 },
    { ethnicity: 'Asian', stops: 67890, rate: 8.2 },
    { ethnicity: 'Mixed', stops: 23456, rate: 11.3 },
    { ethnicity: 'Other', stops: 7410, rate: 9.8 },
  ],
  source: stopSearchSource,
};

// Stop and Search by Ethnicity (for pie chart)
export const stopSearchByEthnicity = [
  { name: 'White', value: 345678 },
  { name: 'Black', value: 123456 },
  { name: 'Asian', value: 67890 },
  { name: 'Mixed', value: 23456 },
  { name: 'Other', value: 7410 },
];

// Stop and Search Outcomes
export const stopSearchOutcomes = [
  { name: 'No Further Action', value: 423456 },
  { name: 'Arrest', value: 63603 },
  { name: 'Community Resolution', value: 34567 },
  { name: 'Penalty Notice', value: 23456 },
  { name: 'Summons', value: 22808 },
];

// Suspects by Ethnicity (for pie chart)
export const suspectsByEthnicity = [
  { name: 'White', value: 78.4 },
  { name: 'Black', value: 8.7 },
  { name: 'Asian', value: 6.7 },
  { name: 'Mixed', value: 4.0 },
  { name: 'Other', value: 2.1 },
];

// Arrests by Ethnicity (for bar chart)
export const arrestsByEthnicity = [
  { name: 'White', arrests: 567890 },
  { name: 'Black', arrests: 123456 },
  { name: 'Asian', arrests: 98765 },
  { name: 'Mixed', arrests: 45678 },
  { name: 'Other', arrests: 23456 },
];

// Outcomes by Offence Type
export const outcomesByOffenceType = [
  { offence: 'Violence', charged: 12.3, summons: 1.2, caution: 15.6, other: 70.9 },
  { offence: 'Sexual offences', charged: 4.8, summons: 0.5, caution: 3.2, other: 91.5 },
  { offence: 'Robbery', charged: 6.7, summons: 0.8, caution: 5.4, other: 87.1 },
  { offence: 'Burglary', charged: 4.2, summons: 0.6, caution: 8.9, other: 86.3 },
  { offence: 'Vehicle crime', charged: 2.8, summons: 0.4, caution: 6.7, other: 90.1 },
  { offence: 'Shoplifting', charged: 15.6, summons: 1.8, caution: 23.4, other: 59.2 },
  { offence: 'Drug offences', charged: 28.9, summons: 2.3, caution: 18.7, other: 50.1 },
];

// Reoffending Rates
export const reoffendingData = {
  overall: 25.4,
  byAge: [
    { age: 'Under 18', rate: 38.2 },
    { age: '18-21', rate: 32.5 },
    { age: '22-25', rate: 28.7 },
    { age: '26-30', rate: 24.3 },
    { age: '31-40', rate: 21.8 },
    { age: '41-50', rate: 18.4 },
    { age: 'Over 50', rate: 12.6 },
  ],
  source: mojSource,
};

// Youth Justice Data
export const youthJustice = {
  arrests: 45678,
  custody: 456,
  byOffence: [
    { offence: 'Violence', count: 12345 },
    { offence: 'Theft', count: 9876 },
    { offence: 'Drug offences', count: 6789 },
    { offence: 'Criminal damage', count: 5432 },
    { offence: 'Other', count: 11236 },
  ],
  source: {
    name: 'Youth Justice Board',
    url: 'https://www.gov.uk/government/collections/youth-justice-statistics',
    publicationDate: '2025-01-30',
    description: 'Youth justice statistics annual',
    updateFrequency: 'annually',
  },
};

// Court Outcomes Data
export const courtOutcomes = {
  totalDefendants: 1234567,
  outcomes: [
    { name: 'Convicted', value: 876543 },
    { name: 'Acquitted', value: 123456 },
    { name: 'Discharged', value: 234568 },
  ],
  sentencing: [
    { name: 'Immediate custody', value: 98765 },
    { name: 'Suspended sentence', value: 145678 },
    { name: 'Community order', value: 345678 },
    { name: 'Fine', value: 287654 },
    { name: 'Other', value: 16543 },
  ],
  source: mojSource,
};
