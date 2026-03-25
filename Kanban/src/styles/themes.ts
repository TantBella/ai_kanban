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
    bg: '#ff85c034', // Transparent grey
    surface: '#FFF5F7', // Light Pink
    text: '#FF8C00',
    textLight: '#5900ff',
    border: '#FFB6D9',
    hover: '#FF85C0',
    shadow: 'rgba(255, 105, 180, 0.3)',

  },
  modern: {
    primary: '#c8b072', // Gold Beige
    secondary: '#0A2809', // Dark Green
    accent: '#0a28097a', // Transparent Dark Green
    bg: '#e3d7b82a', // Transparent
    surface: '#e3d7b888', // Transparent Beige
    text: '#c8b072',
    textLight: '#5E875D', 
    // e3d7b8
    border: '#c8b072',
    hover: '#F0F0F0',
    shadow: 'rgba(0, 0, 0, 0.85)',
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
  modern: 'Clean & modern - Professional and focused',
  dark: 'Dark & dark - Sleek, futuristic, and sophisticated',
};
