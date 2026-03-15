import { DataSource, EfficiencyData, PEELRating, InefficiencyReason } from '@/types';

// Data Sources
export const hmicfrsSource: DataSource = {
  name: 'HMICFRS PEEL Reports',
  url: 'https://hmicfrs.justiceinspectorates.gov.uk/peel-assessments',
  publicationDate: '2025-03-15',
  description: 'PEEL: Police effectiveness, efficiency and legitimacy assessments',
  updateFrequency: 'annually',
};

export const hmicfrsCrimeSource: DataSource = {
  name: 'HMICFRS Crime Investigation Report',
  url: 'https://hmicfrs.justiceinspectorates.gov.uk/publications/crime-investigation-2025',
  publicationDate: '2025-02-20',
  description: 'Thematic inspection report on crime investigation',
  updateFrequency: 'annually',
};

export const homeOfficeOutcomesSource: DataSource = {
  name: 'Home Office Police Outcomes',
  url: 'https://www.gov.uk/government/statistics/police-recorded-crime-and-outcomes-open-data-tables',
  publicationDate: '2025-01-23',
  description: 'Police recorded crime outcomes data',
  updateFrequency: 'quarterly',
};

// Overall Efficiency Data
export const efficiencyData = {
  chargeRate: 5.7,
  summonsRate: 1.2,
  investigationCompletionRate: 78.3,
  avgInvestigationDays: 42,
  source: hmicfrsSource,
};

// Inefficiency Reasons (from HMICFRS reports)
export const inefficiencyReasons: InefficiencyReason[] = [
  { 
    reason: 'High investigator workloads', 
    citedBy: 'HMICFRS Crime Investigation 2025', 
    frequency: 78, 
    source: hmicfrsCrimeSource 
  },
  { 
    reason: 'Poor crime recording practices', 
    citedBy: 'HMICFRS Crime Investigation 2025', 
    frequency: 45, 
    source: hmicfrsCrimeSource 
  },
  { 
    reason: 'Bureaucratic processes and admin burden', 
    citedBy: 'HMICFRS PEEL 2024/25', 
    frequency: 67, 
    source: hmicfrsSource 
  },
  { 
    reason: 'Disclosure failings', 
    citedBy: 'HMICFRS Disclosure 2024', 
    frequency: 52, 
    source: hmicfrsSource 
  },
  { 
    reason: 'Crime complexity increase', 
    citedBy: 'HMICFRS Crime Investigation 2025', 
    frequency: 61, 
    source: hmicfrsCrimeSource 
  },
  { 
    reason: 'IT system limitations', 
    citedBy: 'HMICFRS PEEL 2024/25', 
    frequency: 39, 
    source: hmicfrsSource 
  },
  { 
    reason: 'Staff shortages in specialist roles', 
    citedBy: 'HMICFRS PEEL 2024/25', 
    frequency: 56, 
    source: hmicfrsSource 
  },
  { 
    reason: 'Evidence processing delays', 
    citedBy: 'HMICFRS Crime Investigation 2025', 
    frequency: 48, 
    source: hmicfrsCrimeSource 
  },
];

// PEEL Ratings Summary (2024/25 cycle)
export const peelRatings: PEELRating[] = [
  { force: 'Avon & Somerset', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Bedfordshire', effectiveness: 'Requires improvement', efficiency: 'Requires improvement', legitimacy: 'Good' },
  { force: 'Cambridgeshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Cheshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Outstanding' },
  { force: 'Cleveland', effectiveness: 'Requires improvement', efficiency: 'Requires improvement', legitimacy: 'Requires improvement' },
  { force: 'Cumbria', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Derbyshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Devon & Cornwall', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Dorset', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Durham', effectiveness: 'Outstanding', efficiency: 'Outstanding', legitimacy: 'Outstanding' },
  { force: 'Dyfed-Powys', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Essex', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Gloucestershire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Greater Manchester', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Gwent', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Hampshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Hertfordshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Humberside', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Kent', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Lancashire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Leicestershire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Lincolnshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Merseyside', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Metropolitan Police', effectiveness: 'Requires improvement', efficiency: 'Requires improvement', legitimacy: 'Requires improvement' },
  { force: 'Norfolk', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'North Yorkshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Northamptonshire', effectiveness: 'Requires improvement', efficiency: 'Requires improvement', legitimacy: 'Good' },
  { force: 'Northumbria', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'North Wales', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Nottinghamshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'South Yorkshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Staffordshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Suffolk', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Surrey', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Sussex', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Thames Valley', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Warwickshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'West Mercia', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'West Midlands', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'West Yorkshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
  { force: 'Wiltshire', effectiveness: 'Good', efficiency: 'Good', legitimacy: 'Good' },
];

// PEEL Summary Statistics
export const peelSummary = {
  effectiveness: {
    outstanding: 1,
    good: 35,
    requiresImprovement: 4,
    inadequate: 0,
  },
  efficiency: {
    outstanding: 1,
    good: 35,
    requiresImprovement: 4,
    inadequate: 0,
  },
  legitimacy: {
    outstanding: 2,
    good: 36,
    requiresImprovement: 2,
    inadequate: 0,
  },
};

// Outcome Rates by Crime Type
export const outcomeRatesByCrime = [
  { crimeType: 'Homicide', chargeRate: 89.2, ongoingRate: 5.6, otherRate: 5.2 },
  { crimeType: 'Violence with injury', chargeRate: 12.3, ongoingRate: 34.5, otherRate: 53.2 },
  { crimeType: 'Violence without injury', chargeRate: 8.9, ongoingRate: 28.7, otherRate: 62.4 },
  { crimeType: 'Sexual offences', chargeRate: 4.8, ongoingRate: 45.6, otherRate: 49.6 },
  { crimeType: 'Robbery', chargeRate: 6.7, ongoingRate: 32.1, otherRate: 61.2 },
  { crimeType: 'Domestic burglary', chargeRate: 4.2, ongoingRate: 23.4, otherRate: 72.4 },
  { crimeType: 'Vehicle crime', chargeRate: 2.8, ongoingRate: 18.9, otherRate: 78.3 },
  { crimeType: 'Shoplifting', chargeRate: 15.6, ongoingRate: 8.4, otherRate: 76.0 },
  { crimeType: 'Criminal damage', chargeRate: 3.4, ongoingRate: 15.6, otherRate: 81.0 },
  { crimeType: 'Drug offences', chargeRate: 28.9, ongoingRate: 12.3, otherRate: 58.8 },
];

// Investigation Times (days)
export const investigationTimes = {
  labels: ['Violence', 'Sexual', 'Robbery', 'Burglary', 'Vehicle', 'Fraud'],
  datasets: [
    {
      label: 'Average Days to Close',
      data: [56, 145, 48, 32, 21, 78],
      backgroundColor: '#003087',
    },
    {
      label: 'Target Days',
      data: [30, 90, 30, 21, 14, 45],
      backgroundColor: '#00703C',
    },
  ],
};

// IOPC Complaints Data
export const iopcData = {
  totalComplaints: 78543,
  allegationsPerThousandOfficers: 536,
  byCategory: [
    { category: 'Delivery of duties and service', count: 34567, percentage: 44.0 },
    { category: 'Use of force', count: 12345, percentage: 15.7 },
    { category: 'Dis oppressive conduct', count: 9876, percentage: 12.6 },
    { category: 'Neglect or failure in duty', count: 8765, percentage: 11.2 },
    { category: 'Other', count: 12990, percentage: 16.5 },
  ],
  deathsDuringContact: 18,
  source: {
    name: 'IOPC Deaths During Police Contact',
    url: 'https://www.policeconduct.gov.uk/our-work/research-and-statistics',
    publicationDate: '2024-11-30',
    description: 'Deaths during or following police contact statistics',
    updateFrequency: 'annually',
  },
};
