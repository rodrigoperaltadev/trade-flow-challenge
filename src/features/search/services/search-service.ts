import { apiClient } from '../../../services/api-client';

export const fetchSearchResults = async (query: string) => {
  if (!query) return [];
  const response = await apiClient.get(`/search?query=${query}`);
  return response.data;
};
