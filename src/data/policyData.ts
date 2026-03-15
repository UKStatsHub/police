import { DataSource } from '@/types';

// Data Sources
export const homeOfficeDEISource: DataSource = {
  name: 'Home Office Police Workforce Diversity',
  url: 'https://www.gov.uk/government/collections/police-workforce-england-and-wales',
  publicationDate: '2025-03-27',
  description: 'Police workforce diversity statistics',
  updateFrequency: 'quarterly',
};

export const collegeOfPolicingSource: DataSource = {
  name: 'College of Policing - Diversity and Inclusion',
  url: 'https://www.college.police.uk/guidance/diversity-and-inclusion',
  publicationDate: '2024-09-15',
  description: 'College of Policing diversity guidance and standards',
  updateFrequency: 'annually',
};

// DEI Data - Representation Trends (for charts only)
export const deiData = {
  femaleOfficersTrend: [
    { year: 2015, percentage: 28.2 },
    { year: 2016, percentage: 28.6 },
    { year: 2017, percentage: 29.1 },
    { year: 2018, percentage: 29.8 },
    { year: 2019, percentage: 30.2 },
    { year: 2020, percentage: 31.2 },
    { year: 2021, percentage: 32.5 },
    { year: 2022, percentage: 33.8 },
    { year: 2023, percentage: 34.5 },
    { year: 2024, percentage: 35.0 },
    { year: 2025, percentage: 35.2 },
  ],
  ethnicMinorityTrend: [
    { year: 2015, percentage: 5.5 },
    { year: 2016, percentage: 5.7 },
    { year: 2017, percentage: 5.9 },
    { year: 2018, percentage: 6.2 },
    { year: 2019, percentage: 6.5 },
    { year: 2020, percentage: 6.9 },
    { year: 2021, percentage: 7.3 },
    { year: 2022, percentage: 7.8 },
    { year: 2023, percentage: 8.1 },
    { year: 2024, percentage: 8.3 },
    { year: 2025, percentage: 8.4 },
  ],
  source: homeOfficeDEISource,
};

// Workforce Demographics (for pie charts)
export const workforceGenderData = [
  { name: 'Female', value: 35.2 },
  { name: 'Male', value: 64.8 },
];

export const workforceEthnicityData = [
  { name: 'White', value: 91.6 },
  { name: 'Black', value: 3.1 },
  { name: 'Asian', value: 3.9 },
  { name: 'Mixed', value: 1.2 },
  { name: 'Other', value: 0.2 },
];

// Senior Officers Demographics
export const seniorOfficersGender = [
  { name: 'Female', value: 28.6 },
  { name: 'Male', value: 71.4 },
];

export const seniorOfficersEthnicity = [
  { name: 'White', value: 92.8 },
  { name: 'Black', value: 2.1 },
  { name: 'Asian', value: 3.4 },
  { name: 'Mixed/Other', value: 1.7 },
];

// Recruitment Data
export const recruitmentData = {
  joiners: [
    { year: 2020, count: 8567 },
    { year: 2021, count: 9876 },
    { year: 2022, count: 11234 },
    { year: 2023, count: 12345 },
    { year: 2024, count: 12567 },
  ],
  leavers: [
    { year: 2020, count: 9234 },
    { year: 2021, count: 8567 },
    { year: 2022, count: 9123 },
    { year: 2023, count: 9567 },
    { year: 2024, count: 9876 },
  ],
  joinersByEthnicity: [
    { name: 'White', value: 78.5 },
    { name: 'Black', value: 6.2 },
    { name: 'Asian', value: 9.8 },
    { name: 'Mixed', value: 4.3 },
    { name: 'Other', value: 1.2 },
  ],
  joinersByGender: [
    { name: 'Female', value: 41.5 },
    { name: 'Male', value: 58.5 },
  ],
};

// Representation Targets (for visual display)
export const targets = [
  { category: 'Female Officers', current: 35.2, target: 50, deadline: '2030' },
  { category: 'Ethnic Minority Officers', current: 8.4, target: 14, deadline: '2030' },
  { category: 'Black Officers', current: 3.1, target: 4, deadline: '2030' },
  { category: 'Asian Officers', current: 3.9, target: 9.3, deadline: '2030' },
  { category: 'Female Senior Officers', current: 28.6, target: 50, deadline: '2030' },
];

// Force Level Diversity Data (top 10 forces by diversity)
export const forceDiversityData = [
  { force: 'Metropolitan', female: 33.4, ethnicMinority: 15.8 },
  { force: 'West Midlands', female: 35.8, ethnicMinority: 12.3 },
  { force: 'Greater Manchester', female: 36.2, ethnicMinority: 8.9 },
  { force: 'Leicestershire', female: 38.9, ethnicMinority: 8.5 },
  { force: 'Nottinghamshire', female: 37.4, ethnicMinority: 7.8 },
  { force: 'Thames Valley', female: 35.6, ethnicMinority: 6.7 },
  { force: 'West Yorkshire', female: 37.1, ethnicMinority: 7.8 },
  { force: 'Lancashire', female: 38.4, ethnicMinority: 4.2 },
  { force: 'Surrey', female: 39.2, ethnicMinority: 6.1 },
  { force: 'Devon & Cornwall', female: 38.8, ethnicMinority: 2.3 },
];
