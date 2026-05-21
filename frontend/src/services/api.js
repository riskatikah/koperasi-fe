// Base API service to connect frontend with Django backend
const API_URL = 'http://localhost:8000/api';

export const fetchHello = async () => {
  try {
    const response = await fetch(`${API_URL}/hello/`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('API Connection Error:', error);
    throw error;
  }
};
