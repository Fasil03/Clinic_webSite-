import apiClient from './apiClient';

export const homeApi = {
  getHomeContent: async () => {
    try {
      const response = await apiClient.get('/home'); // calls backend
      return response.data;
    } catch (error) {
      console.error('Error fetching home content:', error);
      throw error; // Let Home.jsx catch the error
    }
  },
};
