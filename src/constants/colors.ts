export const COLORS = {
  primary: {
    DEFAULT: '#001F3F',
    dark: '#000B1A',
    light: '#003366',
  },
  secondary: {
    DEFAULT: '#FFFFFF',
    dark: '#F5F5F5',
    light: '#FAFAFA',
  },
  navy: {
    DEFAULT: '#001F3F',
    900: '#000B1A',
    800: '#001428',
    700: '#001F3F',
    600: '#002952',
    500: '#003366',
    400: '#1a4d7a',
  },
  gray: {
    50: '#F5F7FA',
    100: '#F0F2F5',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
} as const;

export type ColorKey = keyof typeof COLORS;
