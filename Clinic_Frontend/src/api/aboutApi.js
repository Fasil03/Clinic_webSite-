import apiClient from './apiClient';

export const aboutApi = {
  getAboutContent: async () => {
    try {
      const response = await apiClient.get('/about');
      return response.data;
    } catch (error) {
      console.error('Error fetching about content:', error);
      return getDefaultAboutData();
    }
  },
};

const getDefaultAboutData = () => ({
  pageTitle: "About Adebabay Clinic",
  mainDescription: `Adebabay Clinic is dedicated to providing affordable, high-quality 
  healthcare services to the local community. Our goal is to improve lives through 
  compassionate and professional medical care.`,
  mission: "To deliver accessible and reliable healthcare with compassion.",
  vision: "To become a trusted healthcare provider in the region.",
  values: [
    "Patient-centered care",
    "Professional integrity",
    "Community commitment",
    "Continuous improvement",
  ],
  team: [],
  statistics: {}
});