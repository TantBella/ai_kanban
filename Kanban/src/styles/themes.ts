export type ThemeType = 'playful' | 'modern' | 'dark';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  surface: string;
  text: string;
  textLight: string;
  border: string;
  hover: string;
  shadow: string;
}

export const THEMES: Record<ThemeType, ThemeColors> = {
  playful: {
    primary: '#FF69B4', // Hot Pink
    secondary: '#FF8C00', // Orange
    accent: '#FFD700', // Golden Yellow
    bg: '#8b898925', // Transparent grey
    surface: '#FFF5F7', // Light Pink
    text: '#1a1a1a',
    textLight: '#666666',
    border: '#FFB6D9',
    hover: '#FF85C0',
    shadow: 'rgba(255, 105, 180, 0.3)',

  },
  modern: {
    primary: '#c8b072', // Gold Beige
    secondary: '#e3d7b8', // Beige
    accent: '#e3d7b8a9', // Transparent Beige
    bg: '#e3d7b82a', // Transparent
    surface: '#0a28094d', // Transparent Dark Green
    text: '#000000',
    textLight: '#e3d7b8',
    border: '#c8b072',
    hover: '#F0F0F0',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    primary: '#00D9FF', // Neon Cyan
    secondary: '#9D4EDD', // Purple
    accent: '#3A86FF', // Blue
    bg: '#0F0F0F', // Dark Charcoal
    surface: '#1A1A2E', // Navy
    text: '#E0E0E0',
    textLight: '#A0A0A0',
    border: '#00D9FF',
    hover: '#1F1F3D',
    shadow: 'rgba(0, 217, 255, 0.2)',
  },
};

export const THEME_FONTS: Record<ThemeType, string> = {
  playful: 'TasktopiaRetroFont, Oi, serif, Rubik Microbe, system-ui',
  modern:  'TasktopiaModernFont, Bodoni Moda SC, serif',
  dark: 'Outfit, "Space Grotesk", sans-serif',
};

export const THEME_DESCRIPTIONS: Record<ThemeType, string> = {
  playful: 'Fun & Playful - Colorful, vibrant, and energetic',
  modern: 'Clean & modern - Professional, elegant, and focused',
  dark: 'Dark & dark - Sleek, futuristic, and sophisticated',
};
