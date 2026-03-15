#!/usr/bin/env bun
/**
 * Live Data Fetch Script for UK Police & Crime Data Tracker
 * 
 * Fetches actual data from official UK government APIs and open data endpoints.
 * Run with: bun run scripts/fetch-data.ts
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join(process.cwd(), 'src', 'data');
const OUTPUT_FILE = join(DATA_DIR, 'live-data.json');

interface FetchResult {
  source: string;
  success: boolean;
  timestamp: string;
  data?: any;
  error?: string;
  url: string;
}

// Official API endpoints
const ENDPOINTS = {
  // MoJ Prison Population API (returns JSON)
  mojPrison: {
    url: 'https://data.justice.gov.uk/api/prisonpopulation',
    name: 'MoJ Prison Population',
    type: 'json',
  },
  
  // Police UK API endpoints (return JSON)
  policeUkForces: {
    url: 'https://data.police.uk/api/forces',
    name: 'Police UK Forces',
    type: 'json',
  },
  policeUkDates: {
    url: 'https://data.police.uk/api/crimes-street-dates',
    name: 'Police UK Available Dates',
    type: 'json',
  },
  policeUkCategories: {
    url: 'https://data.police.uk/api/crime-categories',
    name: 'Police UK Crime Categories',
    type: 'json',
  },
  
  // ONS (HTML pages, need to check for updates)
  onsCrime: {
    url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice/bulletins/crimeinenglandandwales',
    name: 'ONS Crime Statistics',
    type: 'html',
  },
  
  // Home Office (HTML pages)
  hoWorkforce: {
    url: 'https://www.gov.uk/government/collections/police-workforce-england-and-wales',
    name: 'Home Office Workforce',
    type: 'html',
  },
  
  // Scottish Government
  scotlandCrime: {
    url: 'https://www.gov.scot/collections/recorded-crime-in-scotland',
    name: 'Scottish Crime Statistics',
    type: 'html',
  },
  
  // PSNI
  psniCrime: {
    url: 'https://www.psni.police.uk/about-us/our-publications-and-reports/official-statistics/police-recorded-crime-statistics',
    name: 'PSNI Crime Statistics',
    type: 'html',
  },
};

async function fetchJSON(url: string): Promise<any> {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'UK-Police-Crime-Tracker/1.0 (Official Statistics Dashboard)',
      'Accept': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  return response.json();
}

async function fetchHTML(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'UK-Police-Crime-Tracker/1.0 (Official Statistics Dashboard)',
      'Accept': 'text/html',
    },
  });
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  return response.text();
}

async function fetchSource(key: string, endpoint: typeof ENDPOINTS[keyof typeof ENDPOINTS]): Promise<FetchResult> {
  const result: FetchResult = {
    source: endpoint.name,
    success: false,
    timestamp: new Date().toISOString(),
    url: endpoint.url,
  };

  try {
    console.log(`Fetching ${endpoint.name}...`);
    
    if (endpoint.type === 'json') {
      result.data = await fetchJSON(endpoint.url);
    } else {
      const html = await fetchHTML(endpoint.url);
      // For HTML, extract basic info
      result.data = {
        accessible: true,
        length: html.length,
        lastChecked: new Date().toISOString(),
      };
    }
    
    result.success = true;
    console.log(`✓ ${endpoint.name} fetched successfully`);
  } catch (error) {
    result.error = error instanceof Error ? error.message : 'Unknown error';
    console.error(`✗ ${endpoint.name} failed: ${result.error}`);
  }

  return result;
}

async function main() {
  console.log('='.repeat(60));
  console.log('UK Police & Crime Data Tracker - Live Data Fetch');
  console.log('Started:', new Date().toISOString());
  console.log('='.repeat(60));

  // Ensure data directory exists
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }

  const results: FetchResult[] = [];

  // Fetch all sources
  for (const [key, endpoint] of Object.entries(ENDPOINTS)) {
    const result = await fetchSource(key, endpoint);
    results.push(result);
    
    // Be respectful - add delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Build summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  // Create output data
  const output = {
    lastFetch: new Date().toISOString(),
    summary: {
      total: results.length,
      successful,
      failed,
    },
    sources: results.reduce((acc, r) => {
      acc[r.source] = {
        success: r.success,
        timestamp: r.timestamp,
        url: r.url,
        error: r.error,
        data: r.success ? r.data : undefined,
      };
      return acc;
    }, {} as Record<string, any>),
  };

  // Write to file
  writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`\nData written to ${OUTPUT_FILE}`);

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log(`Fetch Complete: ${successful}/${results.length} sources successful`);
  if (failed > 0) {
    console.log(`Failed sources:`);
    results.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.source}: ${r.error}`);
    });
  }
  console.log('='.repeat(60));

  return output;
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
