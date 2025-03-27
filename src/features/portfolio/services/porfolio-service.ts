import { apiClient } from '../../../services/api-client';
import { PortfolioItem } from '../../../types/portfolio';

export const fetchPortfolio = async (): Promise<PortfolioItem[]> => {
  const response = await apiClient.get('/portfolio');
  return response.data;
};
