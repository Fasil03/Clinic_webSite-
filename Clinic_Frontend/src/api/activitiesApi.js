import apiClient from './apiClient';

export const activitiesApi = {
  getActivities: async () => {
    try {
      const response = await apiClient.get('/activities');
      return response.data;
    } catch (error) {
      console.error('Error fetching activities:', error);
      throw error;
    }
  }
};