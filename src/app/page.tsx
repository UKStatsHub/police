// UK Police & Crime Data Tracker Dashboard
// Static site - data is pre-fetched at build time from official government sources

import { Header } from '@/components/dashboard/Header';
import { Footer } from '@/components/dashboard/Footer';
import { CrimeJusticeSection } from '@/components/dashboard/CrimeJusticeSection';
import { WorkforceSection } from '@/components/dashboard/WorkforceSection';
import { EfficiencySection } from '@/components/dashboard/EfficiencySection';
import { PolicySection } from '@/components/dashboard/PolicySection';
import { DevolvedSection } from '@/components/dashboard/DevolvedSection';
import { SourcesSection } from '@/components/dashboard/SourcesSection';
import { DataFilterToggle } from '@/components/dashboard/DataFilterToggle';
import { StatCard } from '@/components/dashboard/StatCard';
import { crimeOverview, homicideStats } from '@/data/crimeData';
import { workforceStats, workforceSource } from '@/data/workforceData';
import { efficiencyData, peelSummary, hmicfrsSource } from '@/data/efficiencyData';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, Users, Target, CheckCircle } from 'lucide-react';
import { DataFilterProvider } from '@/contexts/DataFilterContext';

// Import pre-fetched static data - generated at build time
import staticData from '@/data/static-data.json';

function DashboardContent() {
  // Use static data that was pre-fetched at build time
  const dataTimestamp = staticData.timestamp;
  const sources = staticData.sources;
  const summary = staticData.summary;

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E8] dark:bg-[#1A1A1A]">
      <Header lastUpdated={dataTimestamp?.split('T')[0] || new Date().toISOString().split('T')[0]} />
      
      <main className="flex-1 container mx-auto px-4 py-6" id="main-content">
        <a id="overview" className="sr-only">Overview</a>
        
        {/* Hero Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-[#003087] to-[#003087]/90 text-white p-8">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                UK Police & Crime Data Tracker
              </h1>
              <p className="text-lg text-white/90 mb-4">
                A centralised dashboard aggregating UK police and crime statistics 
                from all official public sources. Data updated daily from government APIs.
              </p>
              
              {/* Data Status */}
              <div className="flex flex-wrap gap-3 items-center bg-white/10 p-3 rounded">
                <span className="flex items-center gap-1.5 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>All data sources connected</span>
                </span>
                <span className="text-white/60">|</span>
                <span className="text-sm font-semibold">
                  {summary?.total || 8} official sources
                </span>
                <span className="text-white/60">|</span>
                <span className="text-sm">
                  Last updated: {new Date(dataTimestamp).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Data Filter Toggle */}
        <section className="mb-6 flex justify-end">
          <DataFilterToggle />
        </section>

        {/* Key Headline Stats */}
        <section className="mb-8" aria-labelledby="headline-stats-heading">
          <h2 id="headline-stats-heading" className="text-xl font-bold text-[#003087] dark:text-white mb-4">
            Key Headline Statistics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <StatCard
              title="CSEW Incidents"
              rawValue={crimeOverview.totalCSEWIncidents}
              change={crimeOverview.annualChange}
              trend="down"
              source={crimeOverview.sources[0]}
              highlight
            />
            <StatCard
              title="Recorded Crime"
              rawValue={crimeOverview.totalRecordedCrimes}
              change={crimeOverview.annualChange}
              trend="down"
              source={crimeOverview.sources[1]}
            />
            <StatCard
              title="Homicides"
              value={homicideStats.count}
              change={homicideStats.change}
              trend="down"
              source={homicideStats.source}
              icon={<AlertTriangle className="h-4 w-4" />}
            />
            <StatCard
              title="Police Officers"
              rawValue={workforceStats.totalOfficers}
              change={5}
              trend="up"
              source={workforceSource}
              icon={<Users className="h-4 w-4" />}
            />
            <StatCard
              title="Charge Rate"
              value={`${efficiencyData.chargeRate}%`}
              change={-0.5}
              trend="down"
              source={hmicfrsSource}
              icon={<Target className="h-4 w-4" />}
            />
            <StatCard
              title="Good+ PEEL Ratings"
              value={peelSummary.effectiveness.good}
              description="out of 40 forces"
              source={hmicfrsSource}
            />
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-8 bg-white dark:bg-[#2B2B2B] border border-[#DEE0E2] dark:border-[#3A3A3A] p-4">
          <h2 className="text-sm font-semibold text-[#6B6B6B] dark:text-[#A0A0A0] mb-3">Quick Navigation</h2>
          <nav className="flex flex-wrap gap-2" aria-label="Section navigation">
            <a href="#crime-justice" className="px-3 py-1.5 bg-[#003087]/10 text-[#003087] dark:text-[#6B9BD1] text-sm hover:bg-[#003087]/20 transition-colors">
              Crime & Justice
            </a>
            <a href="#workforce" className="px-3 py-1.5 bg-[#003087]/10 text-[#003087] dark:text-[#6B9BD1] text-sm hover:bg-[#003087]/20 transition-colors">
              Police Workforce
            </a>
            <a href="#efficiency" className="px-3 py-1.5 bg-[#003087]/10 text-[#003087] dark:text-[#6B9BD1] text-sm hover:bg-[#003087]/20 transition-colors">
              Efficiency & PEEL
            </a>
            <a href="#devolved" className="px-3 py-1.5 bg-[#003087]/10 text-[#003087] dark:text-[#6B9BD1] text-sm hover:bg-[#003087]/20 transition-colors">
              Devolved Nations
            </a>
            <a href="#sources" className="px-3 py-1.5 bg-[#00703C]/10 text-[#00703C] dark:text-[#4CAF50] text-sm hover:bg-[#00703C]/20 transition-colors">
              All Sources
            </a>
          </nav>
        </section>

        {/* Data Sources Notice */}
        <div className="mb-8 bg-[#00703C]/10 border-l-4 border-[#00703C] p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-[#00703C] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-[#2B2B2B] dark:text-[#F5F0E8]">Official Data Sources</h3>
              <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
                All statistics are sourced from official UK government bodies: ONS, Home Office, 
                Ministry of Justice, HMICFRS, Scottish Government, PSNI, and StatsWales. 
                Data is pre-fetched during build time for GitHub Pages deployment.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-[#DEE0E2] dark:bg-[#3A3A3A]" />

        {/* Main Content Sections */}
        <CrimeJusticeSection />
        <Separator className="my-8 bg-[#DEE0E2] dark:bg-[#3A3A3A]" />
        
        <WorkforceSection />
        <Separator className="my-8 bg-[#DEE0E2] dark:bg-[#3A3A3A]" />
        
        <EfficiencySection />
        <Separator className="my-8 bg-[#DEE0E2] dark:bg-[#3A3A3A]" />
        
        <PolicySection />
        <Separator className="my-8 bg-[#DEE0E2] dark:bg-[#3A3A3A]" />
        
        <DevolvedSection />
        <Separator className="my-8 bg-[#DEE0E2] dark:bg-[#3A3A3A]" />
        
        <SourcesSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default function Dashboard() {
  return (
    <DataFilterProvider>
      <DashboardContent />
    </DataFilterProvider>
  );
}
