import { apiClient } from '../../../services/api-client';

export const fetchInstruments = async () => {
  const response = await apiClient.get('/instruments');
  return response.data;
};
