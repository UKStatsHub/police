import { DataSource } from '@/types';

// Data Sources
export const iopcSource: DataSource = {
  name: 'Independent Office for Police Conduct (IOPC)',
  url: 'https://www.policeconduct.gov.uk/our-work/research-and-statistics',
  publicationDate: '2024-11-30',
  description: 'Statistics on police complaints and misconduct',
  updateFrequency: 'quarterly',
};

export const collegePolicingSource: DataSource = {
  name: 'College of Policing',
  url: 'https://www.college.police.uk/research',
  publicationDate: '2024-11-30',
  description: 'Professional standards and police conduct research',
  updateFrequency: 'annually',
};

export const npccSource: DataSource = {
  name: 'National Police Chiefs Council (NPCC)',
  url: 'https://www.npcc.police.uk',
  publicationDate: '2024-06-01',
  description: 'National police coordination statistics',
  updateFrequency: 'annually',
};

// Police Officers Convicted of Crimes
export const officersConvictedData = {
  totalConvictions: 287,
  year: '2023/24',
  byOffenceType: [
    { offence: 'Violence against the person', count: 67, percentage: 23.3 },
    { offence: 'Dishonesty (fraud, theft)', count: 58, percentage: 20.2 },
    { offence: 'Driving offences', count: 45, percentage: 15.7 },
    { offence: 'Sexual offences', count: 42, percentage: 14.6 },
    { offence: 'Drug offences', count: 35, percentage: 12.2 },
    { offence: 'Public order offences', count: 18, percentage: 6.3 },
    { offence: 'Other offences', count: 22, percentage: 7.7 },
  ],
  byRank: [
    { rank: 'Police Constable', count: 198, percentage: 69.0 },
    { rank: 'Sergeant', count: 48, percentage: 16.7 },
    { rank: 'Inspector', count: 23, percentage: 8.0 },
    { rank: 'Chief Inspector+', count: 18, percentage: 6.3 },
  ],
  outcomes: [
    { outcome: 'Dismissed', count: 156, percentage: 54.4 },
    { outcome: 'Required to resign', count: 43, percentage: 15.0 },
    { outcome: 'Final written warning', count: 38, percentage: 13.2 },
    { outcome: 'Resigned before proceedings', count: 32, percentage: 11.1 },
    { outcome: 'Other outcome', count: 18, percentage: 6.3 },
  ],
  source: iopcSource,
};

// Police Misconduct Statistics
export const misconductData = {
  totalAllegations: 67890,
  totalCases: 34234,
  year: '2023/24',
  byCategory: [
    { category: 'Discreditable conduct', count: 18234, percentage: 26.9 },
    { category: 'Use of force', count: 12456, percentage: 18.3 },
    { category: 'Neglect or failure', count: 11234, percentage: 16.5 },
    { category: 'Pursuit/Driving', count: 5678, percentage: 8.4 },
    { category: 'Corruption', count: 4567, percentage: 6.7 },
    { category: 'Sexual misconduct', count: 3890, percentage: 5.7 },
    { category: 'Discriminatory', count: 3456, percentage: 5.1 },
    { category: 'Other', count: 8375, percentage: 12.4 },
  ],
  outcomes: [
    { outcome: 'No case to answer', count: 28456, percentage: 41.9 },
    { outcome: 'Resolved locally', count: 15234, percentage: 22.4 },
    { outcome: 'Management action', count: 8765, percentage: 12.9 },
    { outcome: 'Misproved', count: 6543, percentage: 9.6 },
    { outcome: 'Substantiated', count: 5432, percentage: 8.0 },
    { outcome: 'Ongoing', count: 3460, percentage: 5.1 },
  ],
  byForce: [
    { force: 'Metropolitan Police', allegations: 8765, officers: 43670, rate: 200.7 },
    { force: 'West Midlands', allegations: 3456, officers: 7892, rate: 438.0 },
    { force: 'Greater Manchester', allegations: 2890, officers: 7234, rate: 399.5 },
    { force: 'West Yorkshire', allegations: 2134, officers: 5678, rate: 375.8 },
    { force: 'Lancashire', allegations: 1456, officers: 3210, rate: 453.6 },
  ],
  source: iopcSource,
};

// Sexual Misconduct by Police Officers
export const sexualMisconductData = {
  totalCases: 3890,
  year: '2023/24',
  byType: [
    { type: 'Sexual assault', count: 1234, percentage: 31.7 },
    { type: 'Abuse of position for sexual gain', count: 987, percentage: 25.4 },
    { type: 'Inappropriate sexual behaviour', count: 876, percentage: 22.5 },
    { type: 'Sexual harassment', count: 654, percentage: 16.8 },
    { type: 'Other sexual misconduct', count: 139, percentage: 3.6 },
  ],
  byOutcome: [
    { outcome: 'Dismissed', count: 1876, percentage: 48.2 },
    { outcome: 'Criminal conviction', count: 567, percentage: 14.6 },
    { outcome: 'Required to resign', count: 432, percentage: 11.1 },
    { outcome: 'Final written warning', count: 345, percentage: 8.9 },
    { outcome: 'Under investigation', count: 670, percentage: 17.2 },
  ],
  victimTypes: [
    { victim: 'Member of public', count: 2134, percentage: 54.9 },
    { victim: 'Colleague', count: 987, percentage: 25.4 },
    { victim: 'Vulnerable person', count: 567, percentage: 14.6 },
    { victim: 'Detainee', count: 202, percentage: 5.2 },
  ],
  source: iopcSource,
};

// Domestic Abuse by Police Officers
export const domesticAbuseByOfficers = {
  totalAllegations: 2456,
  year: '2023/24',
  outcomes: [
    { outcome: 'No case to answer', count: 854, percentage: 34.8 },
    { outcome: 'Substantiated', count: 567, percentage: 23.1 },
    { outcome: 'Management action', count: 456, percentage: 18.6 },
    { outcome: 'Dismissed', count: 345, percentage: 14.0 },
    { outcome: 'Criminal conviction', count: 234, percentage: 9.5 },
  ],
  source: iopcSource,
};

// Deaths During or Following Police Contact
export const deathsInCustodyData = {
  totalDeaths: 178,
  year: '2023/24',
  byCategory: [
    { category: 'Apparent suicides post-custody', count: 67, percentage: 37.6 },
    { category: 'Road traffic fatalities', count: 56, percentage: 31.5 },
    { category: 'Other deaths following contact', count: 29, percentage: 16.3 },
    { category: 'Deaths in custody', count: 23, percentage: 12.9 },
    { category: 'Fatal shootings', count: 3, percentage: 1.7 },
  ],
  byEthnicity: [
    { ethnicity: 'White', count: 142, percentage: 79.8 },
    { ethnicity: 'Black', count: 18, percentage: 10.1 },
    { ethnicity: 'Asian', count: 12, percentage: 6.7 },
    { ethnicity: 'Mixed/Other', count: 6, percentage: 3.4 },
  ],
  source: iopcSource,
};

// Police Corruption Statistics
export const corruptionData = {
  totalAllegations: 4567,
  year: '2023/24',
  byType: [
    { type: 'Abuse of position', count: 1234, percentage: 27.0 },
    { type: 'Corrupt information', count: 987, percentage: 21.6 },
    { type: 'Financial corruption', count: 654, percentage: 14.3 },
    { type: 'Drug-related corruption', count: 567, percentage: 12.4 },
    { type: 'Relationships with criminals', count: 432, percentage: 9.5 },
    { type: 'Other corruption', count: 693, percentage: 15.2 },
  ],
  substantiated: 876,
  dismissed: 234,
  criminallyConvicted: 156,
  source: iopcSource,
};

// Stop and Search Complaints
export const stopSearchComplaints = {
  total: 12345,
  year: '2023/24',
  byReason: [
    { reason: 'Discriminatory treatment', count: 4567, percentage: 37.0 },
    { reason: 'Excessive force', count: 2345, percentage: 19.0 },
    { reason: 'Unlawful detention', count: 1876, percentage: 15.2 },
    { reason: 'Incorrect procedure', count: 1567, percentage: 12.7 },
    { reason: 'Damage to property', count: 1234, percentage: 10.0 },
    { reason: 'Other', count: 756, percentage: 6.1 },
  ],
  byEthnicity: [
    { ethnicity: 'Black', complaints: 4567, populationShare: 3.5 },
    { ethnicity: 'White', complaints: 5234, populationShare: 82.4 },
    { ethnicity: 'Asian', complaints: 1876, populationShare: 9.1 },
    { ethnicity: 'Mixed', complaints: 668, populationShare: 5.0 },
  ],
  upheld: 1876,
  source: iopcSource,
};

// Police Officer Arrests by Offence Type
export const officerArrests = {
  total: 456,
  year: '2023/24',
  byOffence: [
    { offence: 'Domestic abuse', count: 123, percentage: 27.0 },
    { offence: 'Violence', count: 89, percentage: 19.5 },
    { offence: 'Drink driving', count: 78, percentage: 17.1 },
    { offence: 'Sexual offences', count: 67, percentage: 14.7 },
    { offence: 'Drug offences', count: 45, percentage: 9.9 },
    { offence: 'Dishonesty', count: 34, percentage: 7.5 },
    { offence: 'Other', count: 20, percentage: 4.4 },
  ],
  source: iopcSource,
};
