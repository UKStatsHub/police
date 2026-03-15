'use client';

import { useState } from 'react';
import { ExternalLink, Download, Maximize2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// Simple source type for inline usage
interface SimpleSource {
  name: string;
  url: string;
  publicationDate?: string;
}

interface ChartCardProps {
  title: string;
  description?: string;
  source?: SimpleSource;
  children: React.ReactNode;
  className?: string;
  allowExpand?: boolean;
  allowDownload?: boolean;
  downloadData?: () => void;
}

export function ChartCard({
  title,
  description,
  source,
  children,
  className = '',
  allowExpand = true,
  allowDownload = true,
  downloadData,
}: ChartCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDownload = () => {
    if (downloadData) {
      downloadData();
    } else {
      // Default: trigger print
      window.print();
    }
  };

  return (
    <Card className={`${className}`}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-[#003087] dark:text-white">
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
                {description}
              </CardDescription>
            )}
          </div>
          
          <div className="flex items-center gap-1 no-print">
            {allowExpand && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-[#6B6B6B] dark:text-[#A0A0A0] hover:text-[#003087] dark:hover:text-white"
                    aria-label="Expand chart"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video w-full">
                    {children}
                  </div>
                  {source && (
                    <div className="mt-4 pt-4 border-t dark:border-[#3A3A3A]">
                      <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
                        Source: <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-[#1D70B8] dark:text-[#64B5F6] hover:underline">{source.name}</a>
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            )}
            
            {allowDownload && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-[#6B6B6B] dark:text-[#A0A0A0] hover:text-[#003087] dark:hover:text-white"
                onClick={handleDownload}
                aria-label="Download chart data"
              >
                <Download className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="aspect-video w-full">
          {children}
        </div>
        
        {source && (
          <div className="mt-4 pt-3 border-t border-[#DEE0E2] dark:border-[#3A3A3A] flex items-center justify-between">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#1D70B8] dark:text-[#64B5F6] hover:underline focus:underline"
            >
              <span>Source: {source.name}</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
            {source.publicationDate && (
              <span className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">
                Published: {new Date(source.publicationDate).toLocaleDateString('en-GB')}
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Data table component
interface DataTableProps {
  headers: string[];
  rows: (string | number)[][];
  source?: SimpleSource;
  caption?: string;
}

export function DataTable({ headers, rows, source, caption }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      {caption && <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mb-2">{caption}</p>}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-[#003087] dark:border-[#6B9BD1]">
            {headers.map((header, i) => (
              <th
                key={i}
                className="py-2 px-3 text-left font-semibold text-[#003087] dark:text-white"
                scope="col"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[#DEE0E2] dark:border-[#3A3A3A] hover:bg-[#F5F0E8] dark:hover:bg-[#2B2B2B]"
            >
              {row.map((cell, j) => (
                <td key={j} className="py-2 px-3 text-[#2B2B2B] dark:text-[#F5F0E8]">
                  {typeof cell === 'number' ? cell.toLocaleString() : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {source && (
        <div className="mt-3 pt-2 border-t border-[#DEE0E2] dark:border-[#3A3A3A]">
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#1D70B8] dark:text-[#64B5F6] hover:underline"
          >
            <span>Source: {source.name}</span>
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  );
}
