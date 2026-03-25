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
    bg: '#e3d7b859', // Transparent
    surface: '#e3d7b8cb', // Transparent Beige
    text: '#c8b072',
    textLight: '#5E875D', 
    // e3d7b8
    border: '#c8b072',
    hover: '#F0F0F0',
    shadow: 'rgba(0, 0, 0, 0.85)',
  },
  dark: {
    primary: '#14a5af',
    secondary: '#148baf',
    accent: '#37373d', 
    bg: '#22222271', 
    surface: '#396469', 
    text: '#4d73bb',
    textLight: '#9cffc2',
    border: '#148baf',
    hover: '#8383bb',
    shadow: 'rgba(0, 255, 85, 0.12)',
  },
};

export const THEME_FONTS: Record<ThemeType, string> = {
  playful: 'TasktopiaRetroFont, Oi, serif, Rubik Microbe, system-ui',
  modern:  'TasktopiaModernFont, Bodoni Moda SC, serif',
  dark: 'TasktopiaDarkFont, Space Grotesk, sans-serif',
};

export const THEME_DESCRIPTIONS: Record<ThemeType, string> = {
  playful: 'Fun & Playful -Colorful, vibrant and energetic',
  modern: 'Clean & modern -Professional and focused',
  dark: 'Dark & dark -Futuristic and dark',
};
