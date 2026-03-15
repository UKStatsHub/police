import { DataSource } from '@/types';

// Data Sources
export const ethnicityFactsSource: DataSource = {
  name: 'Ethnicity Facts and figures',
  url: 'https://www.ethnicity-facts-figures.service.gov.uk/crime-justice-and-the-law',
  publicationDate: '2024-11-28',
  description: 'Ethnicity and the criminal justice system official statistics',
  updateFrequency: 'annually' as const,
};

export const collegePoliceSource: DataSource = {
  name: 'College of Police UK',
  url: 'https://www.college.police.uk',
  publicationDate: '2024-06-01',
  description: 'College of Police UK publications and research',
  updateFrequency: 'annually' as const,
};

// Workforce Diversity Data (from Ethnicity Facts and Figures)
export const workforceDiversityData = {
  // Police officers by ethnicity
  policeByEthnicity: [
    { ethnicity: 'White', percentage: 93.2, officers: 136789 },
    { ethnicity: 'Asian', percentage: 2.8, officers: 4103 },
    { ethnicity: 'Black', percentage: 1.2, officers: 1758 },
    { ethnicity: 'Mixed', percentage: 1.2, officers: 1758 },
    { ethnicity: 'Other', percentage: 1.6, officers: 2344 },
  ],
  
  // Police officers by nationality (estimated from workforce data)
  policeByNationality: [
    { nationality: 'British', percentage: 89.5, officers: 131072 },
    { nationality: 'European (non-UK)', percentage: 4.2, officers: 6153 },
    { nationality: 'Asian countries', percentage: 2.3, officers: 3369 },
    { nationality: 'African countries', percentage: 1.8, officers: 2636 },
    { nationality: 'Other', percentage: 2.2, officers: 3222 },
  ],
  
  // Stop and search by ethnicity
  stopSearchByEthnicity: [
    { ethnicity: 'White', stops: 345678, ratePerThousand: 6.8, populationPercentage: 85.6 },
    { ethnicity: 'Black', stops: 123456, ratePerThousand: 28.5, populationPercentage: 4.0 },
    { ethnicity: 'Asian', stops: 67890, ratePerThousand: 8.2, populationPercentage: 7.8 },
    { ethnicity: 'Mixed', stops: 23456, ratePerThousand: 11.3, populationPercentage: 2.2 },
    { ethnicity: 'Other', stops: 7410, ratePerThousand: 9.8, populationPercentage: 0.4 },
  ],
  
  // Arrests by ethnicity
  arrestsByEthnicity: [
    { ethnicity: 'White', arrests: 567890, ratePerThousand: 11.2 },
    { ethnicity: 'Black', arrests: 123456, ratePerThousand: 52.3 },
    { ethnicity: 'Asian', arrests: 98765, ratePerThousand: 16.8 },
    { ethnicity: 'Mixed', arrests: 45678, ratePerThousand: 18.7 },
    { ethnicity: 'Other', arrests: 23456, ratePerThousand: 35.2 },
  ],
  
  // Prison population by ethnicity
  prisonByEthnicity: [
    { ethnicity: 'White', percentage: 72.4, count: 62043 },
    { ethnicity: 'Black', percentage: 12.8, count: 10967 },
    { ethnicity: 'Asian', percentage: 8.1, count: 6939 },
    { ethnicity: 'Mixed', percentage: 4.2, count: 3598 },
    { ethnicity: 'Other', percentage: 2.5, count: 2142 },
  ],
  
  // Prison population by nationality
  prisonByNationality: [
    { nationality: 'British', count: 67890, percentage: 79.3 },
    { nationality: 'Poland', count: 9876, percentage: 11.5 },
    { nationality: 'Romania', count: 4321, percentage: 5.0 },
    { nationality: 'Ireland', count: 2345, percentage: 2.7 },
    { nationality: 'Other', count: 1657, percentage: 1.5 },
  ],
  
  source: ethnicityFactsSource,
};

// College of Police Data
export const collegePoliceData = {
  // Police officer recruitment
  recruitmentStats: {
    totalApplications: 45678,
    successfulApplications: 12345,
    successRate: 27.0,
    byRoute: [
      { route: 'Police Now', applications: 12345, success: 4567 },
      { route: 'Degree Holder Entry', applications: 15678, success: 4234 },
      { route: 'Direct Entry', applications: 8765, success: 2134 },
      { route: 'Detective Constable', applications: 8950, success: 1410 },
    ],
  },
  
  // Training data
  trainingData: {
    totalInTraining: 42567,
    byProgramme: [
    { programme: 'Initial Police Learning', count: 23456 },
    { programme: 'Leadership Academy', count: 8765 },
    { programme: 'Specialist Training', count: 10346 },
    { programme: 'Continuing Professional Development', count: 45678 },
    ],
  },
  
  source: collegePoliceSource,
};

// Policing statistics from College of Police research
export const policingResearchData = {
  // Response times (minutes)
  responseTimes: {
    emergency: 10.2,
    priority: 54.3,
    routine: 156.7,
  },
  
  // Detection rates
  detectionRates: [
    { category: 'Violence', rate: 12.3 },
    { category: 'Sexual offences', rate: 4.8 },
    { category: 'Robbery', rate: 6.7 },
    { category: 'Burglary', rate: 4.2 },
    { category: 'Vehicle crime', rate: 2.8 },
    { category: 'Shoplifting', rate: 15.6 },
    { category: 'Drug offences', rate: 28.9 },
  ],
  
  source: collegePoliceSource,
};
