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
    surface: '#e3d7b888', // Transparent Beige
    text: '#c8b072',
    textLight: '#5E875D', 
    // e3d7b8
    border: '#c8b072',
    hover: '#F0F0F0',
    shadow: 'rgba(0, 0, 0, 0.85)',
  },
  dark: {
    primary: '#14af50', // Neon Cyan
    secondary: '#14af50', // Purple
    accent: '#577c64', // Blue
    bg: '#222222', // Dark Charcoal
    surface: '#37373d', 
    text: '#9cdf30',
    textLight: '#9cffc2',
    border: '#00D9FF',
    hover: '#8383bb',
    shadow: 'rgba(0, 217, 255, 0.35)',
  },
};

export const THEME_FONTS: Record<ThemeType, string> = {
  playful: 'TasktopiaRetroFont, Oi, serif, Rubik Microbe, system-ui',
  modern:  'TasktopiaModernFont, Bodoni Moda SC, serif',
  dark: 'Outfit, "Space Grotesk", sans-serif',
};

export const THEME_DESCRIPTIONS: Record<ThemeType, string> = {
  playful: 'Fun & Playful - Colorful, vibrant and energetic',
  modern: 'Clean & modern - Professional and focused',
  dark: 'Dark & dark - Sleek, futuristic and dark',
};
