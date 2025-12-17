import apiClient from './apiClient';

export const locationApi = {
  getLocationInfo: async () => {
    try {
      const response = await apiClient.get('/location');
      return response.data;
    } catch (error) {
      console.error('Error fetching location info:', error);
      throw error;
    }
  }
};