'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type DataFilterMode = 'raw' | 'perCapita';

interface DataFilterContextType {
  filterMode: DataFilterMode;
  setFilterMode: (mode: DataFilterMode) => void;
  convertValue: (value: number, population?: number) => number;
  formatValue: (value: number, unit?: string) => string;
  getUnitLabel: (originalUnit?: string) => string;
  transformChartData: (data: { name: string; value: number }[], population?: number) => { name: string; value: number }[];
  transformStatValue: (value: number, population?: number) => { displayValue: string; unit: string };
}

const DataFilterContext = createContext<DataFilterContextType | undefined>(undefined);

// UK Population estimates (2024)
export const UK_POPULATION = {
  englandWales: 60263000,
  uk: 67791000,
  scotland: 5479000,
  northernIreland: 1911000,
};

export function DataFilterProvider({ children }: { children: ReactNode }) {
  const [filterMode, setFilterMode] = useState<DataFilterMode>('raw');

  const convertValue = (value: number, population: number = UK_POPULATION.englandWales): number => {
    if (filterMode === 'raw') return value;
    // Per capita: per 10,000 population
    return (value / population) * 10000;
  };

  const formatValue = (value: number, unit?: string): string => {
    if (filterMode === 'raw') {
      if (value >= 1000000) {
        return `${(value / 1000000).toFixed(2)} million`;
      }
      if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}k`;
      }
      return value.toLocaleString();
    }
    // Per capita mode
    return `${value.toFixed(1)} per 10k`;
  };

  const getUnitLabel = (originalUnit?: string): string => {
    if (filterMode === 'raw') {
      return originalUnit || 'count';
    }
    return 'per 10,000 population';
  };

  const transformChartData = (
    data: { name: string; value: number }[],
    population: number = UK_POPULATION.englandWales
  ): { name: string; value: number }[] => {
    if (filterMode === 'raw') return data;
    return data.map(item => ({
      ...item,
      value: (item.value / population) * 10000,
    }));
  };

  const transformStatValue = (
    value: number,
    population: number = UK_POPULATION.englandWales
  ): { displayValue: string; unit: string } => {
    if (filterMode === 'raw') {
      if (value >= 1000000) {
        return {
          displayValue: (value / 1000000).toFixed(1),
          unit: 'million',
        };
      }
      if (value >= 1000) {
        return {
          displayValue: (value / 1000).toFixed(0),
          unit: 'thousand',
        };
      }
      return {
        displayValue: value.toLocaleString(),
        unit: '',
      };
    }
    return {
      displayValue: ((value / population) * 10000).toFixed(1),
      unit: 'per 10k',
    };
  };

  return (
    <DataFilterContext.Provider value={{
      filterMode,
      setFilterMode,
      convertValue,
      formatValue,
      getUnitLabel,
      transformChartData,
      transformStatValue,
    }}>
      {children}
    </DataFilterContext.Provider>
  );
}

export function useDataFilter() {
  const context = useContext(DataFilterContext);
  if (context === undefined) {
    throw new Error('useDataFilter must be used within a DataFilterProvider');
  }
  return context;
}

export function useFilterMode() {
  const { filterMode, setFilterMode } = useDataFilter();
  return { filterMode, setFilterMode };
}

export function useConvertValue() {
  const { convertValue } = useDataFilter();
  return { convertValue };
}

export function useFormatValue() {
  const { formatValue } = useDataFilter();
  return { formatValue };
}
