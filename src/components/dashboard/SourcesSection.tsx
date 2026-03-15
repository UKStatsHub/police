'use client';

import { ChartCard } from './ChartCard';
import { allSources, sourceCategories, updateSchedule, dataGaps } from '@/data/sourcesData';
import { ExternalLink, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function SourcesSection() {
  return (
    <section id="sources" className="py-8" aria-labelledby="sources-heading">
      <div className="border-l-4 border-[#00703C] pl-4 mb-6">
        <h2 id="sources-heading" className="text-2xl font-bold text-[#003087] dark:text-white">
          Sources & Methodology
        </h2>
        <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
          Complete list of data sources, update schedules, and limitations
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4 bg-[#F5F0E8] dark:bg-[#2B2B2B]">
          <TabsTrigger value="all">All Sources</TabsTrigger>
          <TabsTrigger value="schedule">Update Schedule</TabsTrigger>
          <TabsTrigger value="gaps">Data Limitations</TabsTrigger>
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-6">
            {sourceCategories.map((category, i) => (
              <div key={i} className="bg-white dark:bg-[#2B2B2B] border border-[#DEE0E2] dark:border-[#3A3A3A]">
                <div className="bg-[#003087] text-white px-4 py-3">
                  <h3 className="font-semibold">{category.name}</h3>
                </div>
                <div className="divide-y divide-[#DEE0E2] dark:divide-[#3A3A3A]">
                  {category.sources.map((source, j) => (
                    <div key={j} className="p-4 hover:bg-[#F5F0E8] dark:hover:bg-[#3A3A3A] transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[#003087] dark:text-white hover:text-[#1D70B8] hover:underline"
                          >
                            {source.name}
                            <ExternalLink className="inline h-4 w-4 ml-1" aria-hidden="true" />
                          </a>
                          <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">{source.description}</p>
                        </div>
                        <div className="text-right text-sm flex-shrink-0">
                          <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                            <Calendar className="inline h-4 w-4 mr-1" aria-hidden="true" />
                            {new Date(source.publicationDate).toLocaleDateString('en-GB')}
                          </p>
                          <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] mt-1 capitalize">
                            {source.updateFrequency}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule">
          <div className="bg-white dark:bg-[#2B2B2B] border border-[#DEE0E2] dark:border-[#3A3A3A]">
            <div className="bg-[#003087] text-white px-4 py-3">
              <h3 className="font-semibold">Data Update Schedule</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#003087] dark:border-[#4A6FA5]">
                    <th className="py-3 px-4 text-left font-semibold">Source</th>
                    <th className="py-3 px-4 text-left font-semibold">Frequency</th>
                    <th className="py-3 px-4 text-left font-semibold">Typical Release</th>
                  </tr>
                </thead>
                <tbody>
                  {updateSchedule.map((item, i) => (
                    <tr key={i} className="border-b border-[#DEE0E2] dark:border-[#3A3A3A] hover:bg-[#F5F0E8] dark:hover:bg-[#3A3A3A]">
                      <td className="py-3 px-4">{item.source}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs ${
                          item.frequency === 'Weekly' ? 'bg-[#00703C]/10 text-[#00703C]' :
                          item.frequency === 'Monthly' ? 'bg-[#1D70B8]/10 text-[#1D70B8]' :
                          item.frequency === 'Quarterly' ? 'bg-[#F47738]/10 text-[#F47738]' :
                          'bg-[#4C2C92]/10 text-[#4C2C92]'
                        }`}>
                          {item.frequency}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[#6B6B6B] dark:text-[#A0A0A0]">{item.typicalRelease}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-[#00703C]/10 p-4 border-l-4 border-[#00703C]">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#00703C]" aria-hidden="true" />
              <h4 className="font-semibold text-[#003087] dark:text-white">Automated Updates</h4>
            </div>
            <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mt-2">
              This site updates automatically via GitHub Actions, which runs daily at 02:00 UTC 
              to fetch the latest data from official sources. If new data is detected, the site 
              is rebuilt and deployed.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="gaps">
          <div className="bg-white dark:bg-[#2B2B2B] border border-[#DEE0E2] dark:border-[#3A3A3A]">
            <div className="bg-[#D4351C] text-white px-4 py-3">
              <h3 className="font-semibold flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                Known Data Limitations & Gaps
              </h3>
            </div>
            <div className="divide-y divide-[#DEE0E2] dark:divide-[#3A3A3A]">
              {dataGaps.map((gap, i) => (
                <div key={i} className="p-4">
                  <h4 className="font-semibold text-[#003087] dark:text-white">{gap.gap}</h4>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">{gap.note}</p>
                  <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] mt-2 italic">
                    Reason: {gap.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-[#F5F0E8] dark:bg-[#2B2B2B] p-4 border-l-4 border-[#6B6B6B]">
            <h4 className="font-semibold text-[#003087] dark:text-white mb-2">Important Notes</h4>
            <ul className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] space-y-2">
              <li>• Crime Survey data excludes commercial crimes and crimes against children under 16</li>
              <li>• Police recorded crime excludes offences not reported to police</li>
              <li>• Ethnicity data may have "not stated" categories with varying response rates</li>
              <li>• Different nations use different crime classification systems</li>
              <li>• Prison population figures are snapshots and fluctuate daily</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="methodology">
          <div className="bg-white dark:bg-[#2B2B2B] border border-[#DEE0E2] dark:border-[#3A3A3A] p-6">
            <h3 className="text-xl font-bold text-[#003087] dark:text-white mb-4">Methodology</h3>
            
            <div className="prose prose-sm max-w-none">
              <h4 className="font-semibold text-[#003087] dark:text-white mt-6 mb-2">Data Collection</h4>
              <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                All data presented on this site is sourced from official UK government sources 
                and independent public bodies. Data is fetched automatically using scheduled 
                GitHub Actions workflows that download and parse CSV, Excel, and JSON files 
                from official open data portals.
              </p>

              <h4 className="font-semibold text-[#003087] dark:text-white mt-6 mb-2">Data Processing</h4>
              <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                Raw data is cleaned, normalised, and converted to JSON format for display. 
                Percentage calculations are performed on the raw numbers where rates are not 
                provided by the source. Year-on-year changes are calculated from the most 
                recent comparable period.
              </p>

              <h4 className="font-semibold text-[#003087] dark:text-white mt-6 mb-2">Source Selection</h4>
              <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                Priority is given to official government statistics (National Statistics designated) 
                where available. For devolved nations, the respective national statistical bodies 
                are used. Think tank and independent research is clearly labelled and used only 
                for supplementary context.
              </p>

              <h4 className="font-semibold text-[#003087] dark:text-white mt-6 mb-2">Neutrality Statement</h4>
              <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                This site presents official statistics without political interpretation or 
                commentary. All findings presented are sourced directly from official reports. 
                Where disparities or trends are noted, these reflect the findings of the 
                respective official bodies (e.g., HMICFRS, MoJ) rather than editorial analysis.
              </p>

              <h4 className="font-semibold text-[#003087] dark:text-white mt-6 mb-2">Technical Implementation</h4>
              <ul className="text-[#6B6B6B] dark:text-[#A0A0A0] list-disc pl-5 space-y-1">
                <li>Built with Next.js 16 and TypeScript</li>
                <li>Static site generation with no server-side runtime</li>
                <li>Charts rendered using Recharts library</li>
                <li>Styling follows GOV.UK Design System principles</li>
                <li>WCAG 2.1 AA accessibility compliance</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-[#003087] text-white p-6">
            <h4 className="font-semibold mb-3">Contact & Corrections</h4>
            <p className="text-white/80 text-sm">
              If you identify an error in the data presentation or have suggestions for 
              additional sources, please open an issue on the GitHub repository. All 
              corrections will be verified against official sources before implementation.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
