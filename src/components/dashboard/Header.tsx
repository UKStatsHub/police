'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { Menu, X, Search, Moon, Sun, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

interface HeaderProps {
  lastUpdated: string;
  onSearch?: (query: string) => void;
}

const navigationItems = [
  { name: 'Overview', href: '#overview' },
  { name: 'Crime', href: '#crime' },
  { name: 'Motives', href: '#motives' },
  { name: 'Workforce', href: '#workforce' },
  { name: 'Offenders', href: '#offenders' },
  { name: 'Efficiency', href: '#efficiency' },
  { name: 'Devolved Nations', href: '#devolved' },
  { name: 'Sources', href: '#sources' },
];

// Search suggestions - all searchable topics
const searchSuggestions = [
  { name: 'Crime Overview', section: '#crime', keywords: ['crime', 'statistics', 'overview', 'total'] },
  { name: 'Fraud Statistics', section: '#crime', keywords: ['fraud', 'scam', 'financial', 'online'] },
  { name: 'Theft & Burglary', section: '#crime', keywords: ['theft', 'burglary', 'robbery', 'steal'] },
  { name: 'Violence Against Person', section: '#crime', keywords: ['violence', 'assault', 'attack', 'injury'] },
  { name: 'Sexual Offences', section: '#crime', keywords: ['sexual', 'rape', 'assault'] },
  { name: 'Homicide Statistics', section: '#crime', keywords: ['homicide', 'murder', 'killing', 'death'] },
  { name: 'Knife Crime', section: '#crime', keywords: ['knife', 'blade', 'weapon', 'stabbing'] },
  { name: 'Gun Crime', section: '#crime', keywords: ['gun', 'firearm', 'shooting', 'weapon'] },
  { name: 'Drug Offences', section: '#crime', keywords: ['drug', 'possession', 'trafficking', 'narcotics'] },
  { name: 'Crime Motives', section: '#motives', keywords: ['motive', 'reason', 'domestic', 'alcohol'] },
  { name: 'Domestic Abuse', section: '#motives', keywords: ['domestic', 'abuse', 'partner', 'violence'] },
  { name: 'Hate Crime', section: '#motives', keywords: ['hate', 'racist', 'discrimination', 'prejudice'] },
  { name: 'Police Workforce', section: '#workforce', keywords: ['police', 'officer', 'staff', 'workforce'] },
  { name: 'Police by Ethnicity', section: '#workforce', keywords: ['ethnicity', 'diversity', 'police', 'race'] },
  { name: 'Police by Gender', section: '#workforce', keywords: ['gender', 'male', 'female', 'women'] },
  { name: 'Police Pay', section: '#workforce', keywords: ['pay', 'salary', 'wage', 'income'] },
  { name: 'Police Misconduct', section: '#workforce', keywords: ['misconduct', 'complaint', 'disciplinary', 'sacked'] },
  { name: 'Prison Population', section: '#offenders', keywords: ['prison', 'jail', 'inmate', 'custody'] },
  { name: 'Prison by Religion', section: '#offenders', keywords: ['religion', 'muslim', 'christian', 'faith'] },
  { name: 'Prison by Nationality', section: '#offenders', keywords: ['nationality', 'foreign', 'country', 'british'] },
  { name: 'Stop and Search', section: '#offenders', keywords: ['stop', 'search', 'ethnicity', 'disproportionate'] },
  { name: 'Reoffending Rates', section: '#offenders', keywords: ['reoffend', 'reoffending', 'recidivism', 'repeat'] },
  { name: 'Youth Justice', section: '#offenders', keywords: ['youth', 'young', 'juvenile', 'under 18'] },
  { name: 'Court Outcomes', section: '#offenders', keywords: ['court', 'sentence', 'conviction', 'charged'] },
  { name: 'Police Efficiency', section: '#efficiency', keywords: ['efficiency', 'performance', 'charge', 'rate'] },
  { name: 'PEEL Ratings', section: '#efficiency', keywords: ['peel', 'rating', 'inspection', 'hmicfrs'] },
  { name: 'Scotland Crime', section: '#devolved', keywords: ['scotland', 'scottish', 'edinburgh', 'glasgow'] },
  { name: 'Northern Ireland Crime', section: '#devolved', keywords: ['northern ireland', 'psni', 'belfast', 'ni'] },
  { name: 'Wales Crime', section: '#devolved', keywords: ['wales', 'welsh', 'cardiff'] },
  { name: 'Data Sources', section: '#sources', keywords: ['source', 'data', 'api', 'download'] },
];

export function Header({ lastUpdated, onSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Use useMemo for filtered suggestions instead of useEffect
  const filteredSuggestions = useMemo(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      return searchSuggestions
        .filter(s => s.name.toLowerCase().includes(query) || s.keywords.some(k => k.includes(query)))
        .slice(0, 8);
    }
    return [];
  }, [searchQuery]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };



  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: typeof searchSuggestions[0]) => {
    setSearchQuery('');
    setShowDropdown(false);
    const element = document.querySelector(suggestion.section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Highlight the section briefly
      element.classList.add('ring-2', 'ring-[#FFDD00]', 'ring-offset-2');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-[#FFDD00]', 'ring-offset-2');
      }, 2000);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredSuggestions.length > 0) {
      handleSuggestionClick(filteredSuggestions[0]);
    } else if (searchQuery.trim()) {
      // Fall back to text search
      const searchLower = searchQuery.toLowerCase();
      const elements = document.querySelectorAll('section, h2, h3, h4, td, span, p');
      let found = false;
      
      elements.forEach((el) => {
        if (el.textContent?.toLowerCase().includes(searchLower)) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('bg-[#FFDD00]');
          setTimeout(() => {
            el.classList.remove('bg-[#FFDD00]');
          }, 3000);
          found = true;
        }
      });
      
      if (!found) {
        alert(`No results found for "${searchQuery}"`);
      }
      
      onSearch?.(searchQuery);
    }
    setShowDropdown(false);
  };

  const handleExport = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-[#003087] bg-[#003087] text-white print:static" role="banner">
      {/* Crown Logo Bar */}
      <div className="bg-[#003087]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              {/* Crown Logo SVG */}
              <svg
                aria-hidden="true"
                focusable="false"
                className="h-8 w-8 text-white"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16 4L4 12v16h24V12L16 4zm0 2.5L26 13v13H6V13l10-6.5z" />
                <circle cx="16" cy="18" r="4" />
              </svg>
              <div>
                <a href="/" className="text-xl font-bold tracking-tight hover:underline focus:underline">
                  UK Police & Crime Data Tracker
                </a>
                <p className="text-xs text-white/80">
                  Official and independent data only. No political interpretation.
                </p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              {/* Search with Dropdown */}
              <form onSubmit={handleSearchSubmit} className="relative" ref={searchRef}>
                <div className="relative">
                  <Input
                    ref={inputRef}
                    type="search"
                    placeholder="Search statistics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                    className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                    aria-label="Search statistics"
                    aria-expanded={showDropdown}
                    aria-haspopup="listbox"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    variant="ghost"
                    className="absolute right-0 top-0 text-white hover:bg-white/10"
                    aria-label="Submit search"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Search Dropdown */}
                {showDropdown && filteredSuggestions.length > 0 && (
                  <div 
                    className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-[#2B2B2B] border border-[#DEE0E2] dark:border-[#3A3A3A] shadow-lg max-h-80 overflow-y-auto z-50"
                    role="listbox"
                    aria-label="Search suggestions"
                  >
                    <div className="p-2 border-b border-[#DEE0E2] dark:border-[#3A3A3A] bg-[#F5F0E8] dark:bg-[#1A1A1A]">
                      <span className="text-xs font-semibold text-[#003087] dark:text-white">SUGGESTIONS</span>
                    </div>
                    {filteredSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-2 hover:bg-[#F5F0E8] dark:hover:bg-[#3A3A3A] transition-colors flex items-center justify-between group"
                        role="option"
                        aria-selected="false"
                      >
                        <div>
                          <span className="text-[#003087] dark:text-white font-medium">{suggestion.name}</span>
                          <span className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] ml-2">
                            {suggestion.section.replace('#', '').toUpperCase()}
                          </span>
                        </div>
                        <ChevronDown className="h-4 w-4 text-[#6B6B6B] rotate-[-90deg] group-hover:text-[#003087]" />
                      </button>
                    ))}
                  </div>
                )}
              </form>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-white hover:bg-white/10"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleExport}
                className="text-white hover:bg-white/10 no-print"
                aria-label="Print or export page"
              >
                <Download className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#003087]/95 border-t border-white/10" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className="h-10">
              <NavigationMenuList className="flex-wrap">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className={`${navigationMenuTriggerStyle()} text-white hover:bg-white/10 focus:bg-white/10 px-4 py-2 text-sm font-medium`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10" role="menu">
              <div className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:bg-white/10 px-3 py-2 rounded text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              {/* Mobile search */}
              <form onSubmit={handleSearchSubmit} className="mt-4 relative" ref={searchRef}>
                <Input
                  type="search"
                  placeholder="Search statistics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  aria-label="Search statistics"
                />
              </form>
              
              {/* Mobile controls */}
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleTheme}
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  {isDark ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleExport}
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Data Freshness Banner */}
      <div className="bg-[#00703C] text-white text-center py-2 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 flex-wrap">
          <span>Data last refreshed:</span>
          <time dateTime={lastUpdated} className="font-semibold">
            {new Date(lastUpdated).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <span className="mx-2">|</span>
          <span>Next scheduled update: Daily at 02:00 UTC</span>
        </div>
      </div>
    </header>
  );
}
