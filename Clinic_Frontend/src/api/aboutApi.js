import apiClient from './apiClient';

export const aboutApi = {
  getAboutContent: async () => {
    try {
      const response = await apiClient.get('/about');
      return response.data;
    } catch (error) {
      console.error('Error fetching about content:', error);
      throw error;
    }
  }
};