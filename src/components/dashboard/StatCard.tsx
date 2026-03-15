'use client';

import { TrendingUp, TrendingDown, Minus, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useDataFilter } from '@/contexts/DataFilterContext';

// Simple source type for inline usage
interface SimpleSource {
  name: string;
  url: string;
  description?: string;
  publicationDate?: string;
}

interface StatCardProps {
  title: string;
  value?: string | number;
  unit?: string;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
  description?: string;
  source?: SimpleSource;
  icon?: React.ReactNode;
  className?: string;
  highlight?: boolean;
  /** Raw numeric value for per capita transformation */
  rawValue?: number;
  /** Population to use for per capita calculation (defaults to England & Wales) */
  population?: number;
}

export function StatCard({
  title,
  value,
  unit,
  change,
  trend,
  description,
  source,
  icon,
  className = '',
  highlight = false,
  rawValue,
  population,
}: StatCardProps) {
  const { filterMode, transformStatValue } = useDataFilter();

  // Transform value if rawValue is provided
  const displayData = rawValue !== undefined 
    ? transformStatValue(rawValue, population)
    : null;

  const displayValue = displayData 
    ? displayData.displayValue 
    : (typeof value === 'number' ? value.toLocaleString() : value || '-');
  
  const displayUnit = displayData 
    ? displayData.unit 
    : (unit || '');

  const getTrendIcon = () => {
    if (!trend) return null;
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-[#D4351C]" aria-hidden="true" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-[#00703C]" aria-hidden="true" />;
      case 'stable':
        return <Minus className="h-4 w-4 text-[#6B6B6B] dark:text-[#A0A0A0]" aria-hidden="true" />;
    }
  };

  const getTrendColor = () => {
    if (!trend || change === undefined) return 'text-[#6B6B6B] dark:text-[#A0A0A0]';
    if (trend === 'up') return 'text-[#D4351C]';
    if (trend === 'down') return 'text-[#00703C]';
    return 'text-[#6B6B6B] dark:text-[#A0A0A0]';
  };

  const formatChange = (val: number) => {
    const prefix = val > 0 ? '+' : '';
    return `${prefix}${val.toFixed(1)}%`;
  };

  return (
    <Card
      className={`
        ${highlight ? 'border-2 border-[#00703C] bg-[#00703C]/5 dark:bg-[#00703C]/10' : ''}
        ${className}
        transition-shadow hover:shadow-md
      `}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-[#6B6B6B] dark:text-[#A0A0A0] flex items-center justify-between">
          <span>{title}</span>
          {icon && <span className="text-[#003087] dark:text-[#6B9BD1]">{icon}</span>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className={`text-3xl font-bold ${highlight ? 'text-[#00703C]' : 'text-[#003087] dark:text-white'}`}>
            {displayValue}
          </span>
          {displayUnit && (
            <span className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">{displayUnit}</span>
          )}
        </div>
        
        {(change !== undefined || trend) && (
          <div className={`flex items-center gap-1 mt-2 ${getTrendColor()}`}>
            {getTrendIcon()}
            {change !== undefined && (
              <span className="text-sm font-medium">
                {formatChange(change)} YoY
              </span>
            )}
          </div>
        )}
        
        {description && (
          <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] mt-2">{description}</p>
        )}
        
        {source && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#1D70B8] dark:text-[#64B5F6] hover:underline mt-3 focus:underline"
                  aria-label={`Source: ${source.name}`}
                >
                  <span className="truncate max-w-[150px]">{source.name}</span>
                  <ExternalLink className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-xs">
                <p className="font-semibold">{source.name}</p>
                {source.description && (
                  <p className="text-xs text-white/80 mt-1">{source.description}</p>
                )}
                {source.publicationDate && (
                  <p className="text-xs text-white/60 mt-1">
                    Published: {new Date(source.publicationDate).toLocaleDateString('en-GB')}
                  </p>
                )}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </CardContent>
    </Card>
  );
}

// Mini stat card for compact displays
interface MiniStatProps {
  label: string;
  value: string | number;
  change?: number;
  source?: SimpleSource;
}

export function MiniStat({ label, value, change, source }: MiniStatProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[#DEE0E2] dark:border-[#3A3A3A] last:border-0">
      <span className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-[#003087] dark:text-white">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </span>
        {change !== undefined && (
          <span className={`text-xs ${change >= 0 ? 'text-[#D4351C]' : 'text-[#00703C]'}`}>
            {change >= 0 ? '+' : ''}{change.toFixed(1)}%
          </span>
        )}
      </div>
    </div>
  );
}
