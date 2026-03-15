import { DataSource, SiteMetadata } from '@/types';

// Site Metadata
export const siteMetadata: SiteMetadata = {
  lastUpdated: '2025-01-23',
  nextUpdate: '2025-01-24',
  dataVersion: '2025.01.23',
  totalSources: 18,
  lastBuildTime: new Date().toISOString(),
};

// All Official Data Sources
export const allSources: DataSource[] = [
  // Government & Official - England & Wales
  {
    name: 'Office for National Statistics (ONS) - Crime Statistics',
    url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice',
    publicationDate: '2025-01-23',
    description: 'Official quarterly bulletin on crime in England and Wales, including Crime Survey estimates and homicide statistics',
    updateFrequency: 'quarterly',
  },
  {
    name: 'Home Office - Police Recorded Crime Open Data',
    url: 'https://www.gov.uk/government/statistical-data-sets/police-recorded-crime-and-outcomes-open-data-tables',
    publicationDate: '2025-01-23',
    description: 'Open data tables for police recorded crime and outcomes in England and Wales',
    updateFrequency: 'quarterly',
  },
  {
    name: 'Home Office - Police Workforce Statistics',
    url: 'https://www.gov.uk/government/collections/police-workforce-england-and-wales',
    publicationDate: '2025-03-27',
    description: 'Quarterly statistics on police workforce numbers, demographics, and distribution',
    updateFrequency: 'quarterly',
  },
  {
    name: 'Ministry of Justice - Criminal Justice Statistics',
    url: 'https://www.gov.uk/government/collections/criminal-justice-statistics',
    publicationDate: '2024-11-28',
    description: 'Quarterly statistics on the criminal justice system including court outcomes and sentencing',
    updateFrequency: 'quarterly',
  },
  {
    name: 'Ministry of Justice - Ethnicity and the Criminal Justice System',
    url: 'https://www.gov.uk/government/statistics/ethnicity-and-the-criminal-justice-system',
    publicationDate: '2024-11-28',
    description: 'Annual statistics on ethnicity across the criminal justice system',
    updateFrequency: 'annually',
  },
  {
    name: 'Ministry of Justice - Prison Population Statistics',
    url: 'https://data.justice.gov.uk',
    publicationDate: '2025-01-17',
    description: 'Weekly prison population figures and custody statistics',
    updateFrequency: 'weekly',
  },
  {
    name: 'Ethnicity Facts and Figures',
    url: 'https://www.ethnicity-facts-figures.service.gov.uk',
    publicationDate: '2024-12-15',
    description: 'UK government official statistics on ethnicity across public services',
    updateFrequency: 'annually',
  },
  {
    name: 'HMICFRS - PEEL Assessments',
    url: 'https://hmicfrs.justiceinspectorates.gov.uk/peel-assessments',
    publicationDate: '2025-03-15',
    description: 'Police effectiveness, efficiency and legitimacy assessments for all forces',
    updateFrequency: 'annually',
  },
  {
    name: 'HMICFRS - Crime Investigation',
    url: 'https://hmicfrs.justiceinspectorates.gov.uk/publications/crime-investigation-2025',
    publicationDate: '2025-02-20',
    description: 'Thematic inspection report on crime investigation practices',
    updateFrequency: 'annually',
  },
  {
    name: 'Independent Office for Police Conduct (IOPC)',
    url: 'https://www.policeconduct.gov.uk/our-work/research-and-statistics',
    publicationDate: '2024-11-30',
    description: 'Statistics on police complaints and deaths during police contact',
    updateFrequency: 'quarterly',
  },
  {
    name: 'College of Policing',
    url: 'https://www.college.police.uk',
    publicationDate: '2024-09-15',
    description: 'Professional standards and guidance for policing',
    updateFrequency: 'annually',
  },
  {
    name: 'National Police Chiefs Council (NPCC)',
    url: 'https://www.npcc.police.uk',
    publicationDate: '2024-06-01',
    description: 'National coordination and strategy for policing',
    updateFrequency: 'annually',
  },
  {
    name: 'data.police.uk',
    url: 'https://data.police.uk',
    publicationDate: '2025-01-15',
    description: 'Open data from UK police forces',
    updateFrequency: 'monthly',
  },
  
  // Parliamentary
  {
    name: 'House of Commons Library - Police Service Strength',
    url: 'https://commonslibrary.parliament.uk/research-briefings/sn00634/',
    publicationDate: '2024-12-05',
    description: 'Research briefing on police service strength',
    updateFrequency: 'annually',
  },
  
  // Devolved Administrations
  {
    name: 'Scottish Government - Recorded Crime in Scotland',
    url: 'https://www.gov.scot/collections/recorded-crime-in-scotland',
    publicationDate: '2025-02-25',
    description: 'Official statistics on recorded crime in Scotland',
    updateFrequency: 'quarterly',
  },
  {
    name: 'Scottish Government - Police Workforce',
    url: 'https://www.gov.scot/collections/police-workforce-scotland/',
    publicationDate: '2025-03-31',
    description: 'Police workforce statistics for Scotland',
    updateFrequency: 'quarterly',
  },
  {
    name: 'PSNI - Police Recorded Crime Statistics',
    url: 'https://www.psni.police.uk/about-us/our-publications-and-reports/official-statistics/police-recorded-crime-statistics',
    publicationDate: '2025-01-10',
    description: 'Police recorded crime statistics for Northern Ireland',
    updateFrequency: 'monthly',
  },
  {
    name: 'StatsWales - Recorded Crime',
    url: 'https://statswales.gov.wales/Catalogue/Community-Safety-and-Social-Inclusion/Community-Safety/Crime-and-Justice/Recorded-Crime',
    publicationDate: '2025-01-20',
    description: 'Recorded crime statistics for Wales',
    updateFrequency: 'quarterly',
  },
  
  // Independent Bodies
  {
    name: 'Policy Exchange - Crime and Policing',
    url: 'https://policyexchange.org.uk/publications/policing',
    publicationDate: '2024-05-20',
    description: 'Independent research on policing and crime costs',
    updateFrequency: 'occasionally',
  },
  {
    name: 'Centre for Social Justice',
    url: 'https://www.centreforsocialjustice.org.uk',
    publicationDate: '2024-04-10',
    description: 'Research on root causes of crime and social justice issues',
    updateFrequency: 'occasionally',
  },
  {
    name: 'Police Foundation',
    url: 'https://www.police-foundation.org.uk',
    publicationDate: '2024-03-15',
    description: 'Independent research on policing policy',
    updateFrequency: 'occasionally',
  },
  {
    name: 'Migration Observatory - Foreign National Prisoners',
    url: 'https://migrationobservatory.ox.ac.uk',
    publicationDate: '2024-06-20',
    description: 'Research on migration and foreign national prisoners',
    updateFrequency: 'occasionally',
  },
  {
    name: 'Institute for Government - Performance Tracker',
    url: 'https://www.instituteforgovernment.org.uk/publication/performance-tracker',
    publicationDate: '2024-11-15',
    description: 'Analysis of public service performance including policing',
    updateFrequency: 'annually',
  },
  {
    name: 'National Crime Agency',
    url: 'https://www.nationalcrimeagency.gov.uk/publications',
    publicationDate: '2024-10-01',
    description: 'Publications on organised crime statistics',
    updateFrequency: 'annually',
  },
];

// Source categories for navigation
export const sourceCategories = [
  {
    name: 'Government & Official (England & Wales)',
    sources: allSources.filter(s => 
      s.url.includes('ons.gov.uk') || 
      s.url.includes('gov.uk') || 
      s.url.includes('justice.gov.uk') ||
      s.url.includes('hmicfrs') ||
      s.url.includes('policeconduct.gov.uk') ||
      s.url.includes('college.police.uk') ||
      s.url.includes('npcc.police.uk') ||
      s.url.includes('data.police.uk')
    ),
  },
  {
    name: 'Devolved Administrations',
    sources: allSources.filter(s => 
      s.url.includes('gov.scot') || 
      s.url.includes('psni.police.uk') || 
      s.url.includes('statswales.gov.wales')
    ),
  },
  {
    name: 'Parliamentary',
    sources: allSources.filter(s => s.url.includes('commonslibrary.parliament.uk')),
  },
  {
    name: 'Independent Bodies & Think Tanks',
    sources: allSources.filter(s => 
      s.url.includes('policyexchange') ||
      s.url.includes('centreforsocialjustice') ||
      s.url.includes('police-foundation') ||
      s.url.includes('migrationobservatory') ||
      s.url.includes('instituteforgovernment') ||
      s.url.includes('nationalcrimeagency')
    ),
  },
];

// Update schedule
export const updateSchedule = [
  { source: 'ONS Crime Statistics', frequency: 'Quarterly', typicalRelease: 'January, April, July, October' },
  { source: 'Home Office Workforce', frequency: 'Quarterly', typicalRelease: 'End of March, June, September, December' },
  { source: 'MoJ Criminal Justice Stats', frequency: 'Quarterly', typicalRelease: 'February, May, August, November' },
  { source: 'HMICFRS PEEL Reports', frequency: 'Annual', typicalRelease: 'March' },
  { source: 'MoJ Ethnicity & CJS', frequency: 'Annual', typicalRelease: 'November' },
  { source: 'Prison Population', frequency: 'Weekly', typicalRelease: 'Every Friday' },
  { source: 'Scottish Crime Stats', frequency: 'Quarterly', typicalRelease: 'February, May, August, November' },
  { source: 'PSNI Crime Stats', frequency: 'Monthly', typicalRelease: 'Second week of following month' },
];

// Data gaps and limitations
export const dataGaps = [
  {
    gap: 'Officers\' political affiliations',
    note: 'No official national data collected on police officers\' political party memberships or affiliations',
    reason: 'Not recorded in official statistics',
  },
  {
    gap: 'Religion of police officers',
    note: 'Data collected but not routinely published at national level',
    reason: 'Partial coverage, data quality concerns',
  },
  {
    gap: 'Disability status of police officers',
    note: 'Limited data available, self-reported with low response rates',
    reason: 'Data quality and definition issues',
  },
  {
    gap: 'Sexual orientation of police officers',
    note: 'Collected but publication limited due to data quality',
    reason: 'Low disclosure rates, privacy concerns',
  },
  {
    gap: 'Real-time crime data',
    note: 'Most official statistics published with 3-6 month lag',
    reason: 'Validation and quality assurance processes',
  },
  {
    gap: 'Criminal justice outcomes by police force area',
    note: 'Some outcome data available but limited granularity',
    reason: 'Data linkage challenges across agencies',
  },
];
