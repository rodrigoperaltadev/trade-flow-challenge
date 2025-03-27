import { apiClient } from '../../../services/api-client';

export const fetchPortfolio = async () => {
  const response = await apiClient.get('/portfolio');
  return response.data;
};
