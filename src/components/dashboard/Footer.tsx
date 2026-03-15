import { ExternalLink, Github, Mail } from 'lucide-react';
import { siteMetadata, allSources } from '@/data/sourcesData';

export function Footer() {
  const quickLinks = [
    { name: 'ONS Crime Statistics', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice' },
    { name: 'Home Office Police Data', url: 'https://www.gov.uk/government/collections/police-workforce-england-and-wales' },
    { name: 'HMICFRS Reports', url: 'https://hmicfrs.justiceinspectorates.gov.uk' },
    { name: 'MoJ Statistics', url: 'https://www.gov.uk/government/collections/criminal-justice-statistics' },
  ];

  const devolvedLinks = [
    { name: 'Scottish Government Crime', url: 'https://www.gov.scot/collections/recorded-crime-in-scotland' },
    { name: 'PSNI Statistics', url: 'https://www.psni.police.uk/about-us/our-publications-and-reports/official-statistics' },
    { name: 'StatsWales', url: 'https://statswales.gov.wales' },
  ];

  return (
    <footer className="bg-[#003087] text-white mt-auto print:mt-4" role="contentinfo">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">About This Site</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              A neutral, transparent dashboard aggregating UK police and crime statistics 
              from official public sources. Updated daily via automated data pipelines.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>Version:</span>
              <span className="font-mono">{siteMetadata.dataVersion}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60 mt-1">
              <span>Sources tracked:</span>
              <span className="font-semibold">{siteMetadata.totalSources}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Official Sources</h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white text-sm flex items-center gap-1 hover:underline focus:underline"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Devolved Nations */}
          <div>
            <h2 className="text-lg font-bold mb-4">Devolved Nations</h2>
            <ul className="space-y-2">
              {devolvedLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white text-sm flex items-center gap-1 hover:underline focus:underline"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Data & Methodology */}
          <div>
            <h2 className="text-lg font-bold mb-4">Data & Methodology</h2>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#sources" className="hover:text-white hover:underline focus:underline">
                  Full Source List
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white hover:underline focus:underline">
                  Methodology & Limitations
                </a>
              </li>
              <li>
                <a href="#updates" className="hover:text-white hover:underline focus:underline">
                  Update Schedule
                </a>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-white/5 rounded">
              <h3 className="font-semibold text-sm mb-2">Disclaimer</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                This site presents official statistics without interpretation. 
                All data is sourced from government and independent bodies. 
                No political commentary is provided.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div className="flex items-center gap-4">
              <span>© {new Date().getFullYear()} UK Police & Crime Data Tracker</span>
              <span className="hidden md:inline">|</span>
              <span>Open Source Project</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/UKStatsHub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white focus:text-white"
                aria-label="View source on GitHub"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Crown Logo */}
      <div className="bg-[#001D54] py-4">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <svg
            aria-hidden="true"
            focusable="false"
            className="h-6 w-6 text-white/60"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M16 4L4 12v16h24V12L16 4zm0 2.5L26 13v13H6V13l10-6.5z" />
            <circle cx="16" cy="18" r="4" />
          </svg>
          <span className="text-white/60 text-sm">
            Data sourced from UK Government and official public bodies
          </span>
        </div>
      </div>
    </footer>
  );
}
