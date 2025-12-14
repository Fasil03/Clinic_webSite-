import apiClient from './apiClient';

export const servicesApi = {
  getAllServices: async () => {
    try {
      const response = await apiClient.get('/services');
      return response.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      return getDefaultServices();
    }
  },
};

const getDefaultServices = () => [
  {
    id: "1",
    name: "General Consultation",
    description: "Routine health checkups and consultations with our experienced doctors",
    shortDescription: "Routine health checkups and consultations",
    category: "General",
    price: 50.0,
    benefits: ["Expert medical staff", "Modern equipment", "Personalized care"]
  },
  {
    id: "2",
    name: "Cardiology",
    description: "Heart health assessments, ECG, and specialized treatments",
    shortDescription: "Heart health assessments and treatments",
    category: "Specialist",
    price: 150.0,
    benefits: ["Expert medical staff", "Modern equipment", "Personalized care"]
  },
  {
    id: "3",
    name: "Dental Care",
    description: "Complete dental examinations, cleaning, and treatments",
    shortDescription: "Complete dental examinations and treatments",
    category: "Dental",
    price: 120.0,
    benefits: ["Expert dental staff", "Modern equipment", "Personalized care"]
  }
];