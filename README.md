# UK Police & Crime Data Tracker

A centralised, neutral dashboard aggregating UK police and crime statistics from official public sources. Updated daily via automated data pipelines.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🎯 Features

- **Comprehensive Coverage**: Crime levels, police workforce, offender demographics, efficiency metrics, and devolved nations data
- **Official Sources Only**: All data sourced from UK government and independent public bodies
- **Daily Updates**: Automated data fetching via GitHub Actions
- **GOV.UK Style**: Professional, accessible design following government design standards
- **Fully Responsive**: Works on desktop, tablet, and mobile devices
- **WCAG AA Accessible**: High contrast, keyboard navigation, screen reader support

## 📊 Data Sources

### England & Wales
- [ONS Crime Statistics](https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice)
- [Home Office Police Workforce](https://www.gov.uk/government/collections/police-workforce-england-and-wales)
- [Home Office Recorded Crime](https://www.gov.uk/government/statistical-data-sets/police-recorded-crime-and-outcomes-open-data-tables)
- [MoJ Criminal Justice Statistics](https://www.gov.uk/government/collections/criminal-justice-statistics)
- [HMICFRS PEEL Reports](https://hmicfrs.justiceinspectorates.gov.uk)

### Devolved Nations
- [Scottish Government Crime Statistics](https://www.gov.scot/collections/recorded-crime-in-scotland)
- [PSNI Statistics](https://www.psni.police.uk/about-us/our-publications-and-reports/official-statistics)
- [StatsWales](https://statswales.gov.wales)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/uk-police-crime-tracker.git
cd uk-police-crime-tracker

# Install dependencies
bun install

# Run development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build for Production

```bash
# Build the static site
bun run build

# Export as static HTML (if configured)
bun run export
```

## 📁 Project Structure

```
uk-police-crime-tracker/
├── .github/
│   └── workflows/
│       └── daily-update.yml    # GitHub Actions workflow
├── scripts/
│   └── fetch-data.ts           # Data fetching script
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles (GOV.UK palette)
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main dashboard page
│   ├── components/
│   │   ├── dashboard/          # Dashboard components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── ChartCard.tsx
│   │   │   ├── Charts.tsx
│   │   │   ├── CrimeSection.tsx
│   │   │   ├── WorkforceSection.tsx
│   │   │   ├── OffendersSection.tsx
│   │   │   ├── EfficiencySection.tsx
│   │   │   ├── PolicySection.tsx
│   │   │   ├── DevolvedSection.tsx
│   │   │   └── SourcesSection.tsx
│   │   └── ui/                 # shadcn/ui components
│   ├── data/
│   │   ├── crimeData.ts        # Crime statistics
│   │   ├── workforceData.ts    # Police workforce data
│   │   ├── offenderData.ts     # Offender demographics
│   │   ├── efficiencyData.ts   # PEEL & efficiency data
│   │   ├── policyData.ts       # DEI & policy data
│   │   ├── devolvedData.ts     # Scotland, NI, Wales data
│   │   └── sourcesData.ts      # Source metadata
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
└── package.json
```

## 🎨 Design System

### Color Palette (GOV.UK Style)

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#003087` | Headers, links |
| Government Green | `#00703C` | Accents, positive indicators |
| Light Blue | `#1D70B8` | Links, charts |
| Ivory | `#F5F0E8` | Background |
| Red | `#D4351C` | Warnings, negative indicators |
| Black | `#2B2B2B` | Text |
| Grey | `#6B6B6B` | Secondary text |

### Typography
- Sans-serif: Arial, Helvetica, system fonts
- Monospace: System monospace for data tables

## 🔄 Data Pipeline

### Automated Updates

The site updates automatically via GitHub Actions:

1. **Schedule**: Runs daily at 02:00 UTC
2. **Fetch**: Downloads latest data from official sources
3. **Process**: Parses and validates data
4. **Build**: Regenerates static pages
5. **Deploy**: Pushes to GitHub Pages

### Adding New Data Sources

1. Add source configuration to `scripts/fetch-data.ts`:

```typescript
{
  name: 'New Data Source',
  url: 'https://example.gov.uk/data.csv',
  type: 'csv', // or 'json', 'html'
  parser: (data) => transformData(data),
}
```

2. Create a data file in `src/data/`:

```typescript
// src/data/newData.ts
import { DataSource } from '@/types';

export const newSource: DataSource = {
  name: 'New Data Source',
  url: 'https://example.gov.uk',
  publicationDate: '2025-01-01',
  description: 'Description of the data',
  updateFrequency: 'quarterly',
};

export const newData = {
  // Your data structure
  source: newSource,
};
```

3. Create a section component in `src/components/dashboard/`

4. Add the section to `src/app/page.tsx`

## 🧪 Testing

```bash
# Run linting
bun run lint

# Type check
bun run type-check
```

## 📝 Adding New Statistics

1. **Identify the source**: Find the official data source URL
2. **Create data types**: Add TypeScript interfaces to `src/types/index.ts`
3. **Add data file**: Create `src/data/yourData.ts` with the statistics
4. **Create component**: Build a section component for the dashboard
5. **Update navigation**: Add to Header and quick links
6. **Document source**: Add to `src/data/sourcesData.ts`

## 🔒 Data Quality & Disclaimers

- All statistics link directly to their original sources
- Data gaps and limitations are clearly documented
- No political interpretation or commentary is provided
- Sources are prioritized: Official statistics > Independent bodies > Think tanks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-statistic`
3. Commit changes: `git commit -m 'Add new crime statistic'`
4. Push to branch: `git push origin feature/new-statistic`
5. Open a Pull Request

Please ensure:
- All data is from official sources
- Sources are properly cited
- No political commentary is added
- Accessibility standards are maintained

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgements

- [Office for National Statistics](https://www.ons.gov.uk)
- [Home Office](https://www.gov.uk/government/organisations/home-office)
- [Ministry of Justice](https://www.gov.uk/government/organisations/ministry-of-justice)
- [HMICFRS](https://hmicfrs.justiceinspectorates.gov.uk)
- [Scottish Government](https://www.gov.scot)
- [Police Service of Northern Ireland](https://www.psni.police.uk)
- [GOV.UK Design System](https://design-system.service.gov.uk)

---

**Disclaimer**: This site presents official statistics without interpretation. All data is sourced from government and independent bodies. No political commentary is provided.
