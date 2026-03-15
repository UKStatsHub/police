// Data source types
export interface DataSource {
  name: string;
  url: string;
  publicationDate: string;
  description: string;
  updateFrequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'annually' | 'ongoing' | 'occasionally';
}

// Crime Statistics
export interface CrimeStat {
  type: string;
  count: number;
  percentage: number;
  change: number; // YoY change
  trend: 'up' | 'down' | 'stable';
  source: DataSource;
}

export interface CrimeOverview {
  totalCSEWIncidents: number;
  totalRecordedCrimes: number;
  lastUpdated: string;
  crimeTypes: CrimeStat[];
  quarterlyChange: number;
  annualChange: number;
  sources: DataSource[];
}

export interface HomicideStats {
  count: number;
  change: number;
  lowestSince: string;
  perMillion: number;
  byMethod: { method: string; count: number; percentage: number }[];
  source: DataSource;
}

// Police Workforce
export interface WorkforceStats {
  totalOfficers: number;
  totalStaff: number;
  totalPCSOs: number;
  totalWorkforce: number;
  frontlinePercentage: number;
  lastUpdated: string;
  source: DataSource;
}

export interface WorkforceDemographics {
  femalePercentage: number;
  ethnicMinorityPercentage: number;
  blackOfficers: number;
  asianOfficers: number;
  mixedOfficers: number;
  otherEthnicity: number;
  joinersLastYear: number;
  leaversLastYear: number;
  source: DataSource;
}

export interface ForceData {
  name: string;
  officers: number;
  staff: number;
  pcsos: number;
  frontlinePercent: number;
  femalePercent: number;
  ethnicMinorityPercent: number;
}

// Offender Demographics
export interface OffenderDemographics {
  suspectsByEthnicity: EthnicityBreakdown[];
  defendantsByEthnicity: EthnicityBreakdown[];
  prisonPopulationByEthnicity: EthnicityBreakdown[];
  foreignNationalsInPrison: number;
  foreignNationalTopCountries: { country: string; count: number }[];
  reoffendingRate: number;
  source: DataSource;
}

export interface EthnicityBreakdown {
  ethnicity: string;
  count: number;
  percentage: number;
}

// Police Efficiency
export interface EfficiencyData {
  chargeRate: number;
  summonsRate: number;
  investigationCompletionRate: number;
  avgInvestigationDays: number;
  peelRatings: PEELRating[];
  inefficiencyReasons: InefficiencyReason[];
  source: DataSource;
}

export interface PEELRating {
  force: string;
  effectiveness: 'Outstanding' | 'Good' | 'Requires improvement' | 'Inadequate';
  efficiency: 'Outstanding' | 'Good' | 'Requires improvement' | 'Inadequate';
  legitimacy: 'Outstanding' | 'Good' | 'Requires improvement' | 'Inadequate';
}

export interface InefficiencyReason {
  reason: string;
  citedBy: string;
  frequency: number;
  source: DataSource;
}

// Stop and Search
export interface StopSearchData {
  totalStops: number;
  byEthnicity: { ethnicity: string; stops: number; rate: number; disproportionality: number }[];
  arrestRate: number;
  source: DataSource;
}

// Policy & DEI
export interface DEIData {
  femaleOfficersTrend: { year: number; percentage: number }[];
  ethnicMinorityTrend: { year: number; percentage: number }[];
  representationTargets: { target: string; current: number; goal: number; deadline: string }[];
  impactNotes: { finding: string; source: DataSource }[];
  source: DataSource;
}

// Devolved Nations
export interface ScotlandCrimeData {
  totalCrimes: number;
  change: number;
  crimeTypes: CrimeStat[];
  source: DataSource;
}

export interface NICrimeData {
  totalCrimes: number;
  change: number;
  crimeTypes: CrimeStat[];
  source: DataSource;
}

export interface WalesCrimeData {
  totalCrimes: number;
  change: number;
  byForce: { force: string; crimes: number }[];
  source: DataSource;
}

// Time Series Data
export interface TimeSeriesPoint {
  date: string;
  value: number;
}

export interface CrimeTrend {
  type: string;
  data: TimeSeriesPoint[];
  source: DataSource;
}

// Site Metadata
export interface SiteMetadata {
  lastUpdated: string;
  nextUpdate: string;
  dataVersion: string;
  totalSources: number;
  lastBuildTime: string;
}

// Chart Types
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    fill?: boolean;
  }[];
}

export interface TrendData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
    tension: number;
  }[];
}
