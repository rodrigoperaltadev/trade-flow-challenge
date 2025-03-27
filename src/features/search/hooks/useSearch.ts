import { useQuery } from '@tanstack/react-query';
import { fetchSearchResults } from '../services/search-service';
import { useEffect, useState } from 'react';

export const useSearch = (query: string) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  return useQuery({
    queryKey: ['search', debouncedQuery],
    queryFn: () => fetchSearchResults(debouncedQuery),
    enabled: !!debouncedQuery
  });
};
