import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const fetchProjects = () => api.get('/projects/');
export const fetchSkills = () => api.get('/skills/');
export const fetchExperiences = () => api.get('/experiences/');

export default api;