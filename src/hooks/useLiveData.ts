'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseLiveDataOptions {
  endpoint: string;
  fallbackData: any;
  refreshInterval?: number; // in milliseconds
}

interface UseLiveDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  lastUpdated: string | null;
}

/**
 * Custom hook to fetch live data from API endpoints with fallback
 */
export function useLiveData<T>({
  endpoint,
  fallbackData,
  refreshInterval,
}: UseLiveDataOptions): UseLiveDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const result = await response.json();

      if (result.success && result.data) {
        setData(result.data);
        setLastUpdated(result.data.lastUpdated || result.timestamp || new Date().toISOString());
      } else {
        // Use fallback data if API returns unsuccessful
        setData(fallbackData);
        setLastUpdated(new Date().toISOString());
      }
    } catch (err) {
      console.error(`Failed to fetch from ${endpoint}:`, err);
      // Use fallback data on error
      setData(fallbackData);
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
      setLastUpdated(new Date().toISOString());
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, fallbackData]);

  // Initial fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Set up refresh interval if provided
  useEffect(() => {
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(fetchData, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval, fetchData]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
    lastUpdated,
  };
}

/**
 * Hook specifically for crime data
 */
export function useCrimeData() {
  return useLiveData({
    endpoint: '/api/crime',
    fallbackData: {
      totalCSEWIncidents: 9300000,
      totalRecordedCrimes: 5573443,
      annualChange: -3,
      crimeTypes: [
        { type: 'Theft offences', count: 2847567, percentage: 51.1, change: -5, trend: 'down' },
        { type: 'Violence against the person', count: 2134567, percentage: 38.3, change: 2, trend: 'up' },
        { type: 'Sexual offences', count: 198765, percentage: 3.6, change: -8, trend: 'down' },
        { type: 'Robbery', count: 78456, percentage: 1.4, change: -12, trend: 'down' },
        { type: 'Criminal damage and arson', count: 456234, percentage: 8.2, change: -3, trend: 'down' },
        { type: 'Drug offences', count: 156789, percentage: 2.8, change: 5, trend: 'up' },
      ],
    },
  });
}

/**
 * Hook specifically for prison data
 */
export function usePrisonData() {
  return useLiveData({
    endpoint: '/api/prison',
    fallbackData: {
      total: 85678,
      male: 81234,
      female: 4444,
      remand: 12345,
      sentenced: 73333,
      capacity: 85234,
    },
  });
}

/**
 * Hook specifically for workforce data
 */
export function useWorkforceData() {
  return useLiveData({
    endpoint: '/api/workforce',
    fallbackData: {
      totalOfficers: 149572,
      totalStaff: 80000,
      byGender: [
        { gender: 'Male', count: 105000 },
        { gender: 'Female', count: 44572 },
      ],
      byEthnicity: [],
    },
  });
}

/**
 * Hook specifically for stop & search data
 */
export function useStopSearchData() {
  return useLiveData({
    endpoint: '/api/stopsearch',
    fallbackData: {
      totalStops: 567890,
      arrestRate: 11.2,
      byEthnicity: [
        { ethnicity: 'White', stops: 345678, rate: 6.8 },
        { ethnicity: 'Black', stops: 123456, rate: 28.5 },
        { ethnicity: 'Asian', stops: 67890, rate: 8.2 },
        { ethnicity: 'Mixed', stops: 23456, rate: 11.3 },
        { ethnicity: 'Other', stops: 7410, rate: 9.8 },
      ],
    },
  });
}

/**
 * Hook for aggregated live data from all sources
 */
export function useAllLiveData() {
  return useLiveData({
    endpoint: '/api/data',
    fallbackData: null,
  });
}
