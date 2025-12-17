import apiClient from './apiClient';

export const footerApi = {
  getFooterContent: async () => {
    try {
      const response = await apiClient.get('/footer');
      return response.data;
    } catch (error) {
      console.error('Error fetching footer content:', error);
      throw error;
    }
  }
};