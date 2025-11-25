export * from './colors';
export * from './breakpoints';

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
export const EMAIL_SERVICE_URL = import.meta.env.VITE_EMAIL_SERVICE_URL || '';

// App Configuration
export const APP_NAME = 'MAM Center';
export const APP_DESCRIPTION = 'MAM Center Website';
