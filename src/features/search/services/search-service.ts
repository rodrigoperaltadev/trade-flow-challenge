import { apiClient } from '../../../services/api-client';
import { SearchResult } from '../../../types/search';

export const fetchSearchResults = async (
  query: string
): Promise<SearchResult[]> => {
  if (!query) return [];
  const response = await apiClient.get(`/search?query=${query}`);
  return response.data;
};
