'use client';

import { useDataFilter } from '@/contexts/DataFilterContext';
import { Button } from '@/components/ui/button';
import { Users, Hash } from 'lucide-react';

export function DataFilterToggle() {
  const { filterMode, setFilterMode } = useDataFilter();
  
  return (
    <div className="flex items-center gap-2 bg-white dark:bg-[#2B2B2B] border border-[#DEE0E2] dark:border-[#3A3A3A] p-2 rounded">
      <span className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mr-2">Data view:</span>
      <Button
        variant={filterMode === 'raw' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setFilterMode('raw')}
        className={`flex items-center gap-1.5 transition-all ${
          filterMode === 'raw' 
            ? 'bg-[#003087] text-white hover:bg-[#002159]' 
            : 'text-[#003087] border-[#003087] hover:bg-[#003087]/10'
        }`}
      >
        <Hash className="h-4 w-4" />
        Raw Numbers
      </Button>
      <Button
        variant={filterMode === 'perCapita' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setFilterMode('perCapita')}
        className={`flex items-center gap-1.5 transition-all ${
          filterMode === 'perCapita' 
            ? 'bg-[#00703C] text-white hover:bg-[#005a30]' 
            : 'text-[#00703C] border-[#00703C] hover:bg-[#00703C]/10'
        }`}
      >
        <Users className="h-4 w-4" />
        Per 10,000
      </Button>
    </div>
  );
}
