export type ThemeType = 'playful' | 'minimal' | 'modern';

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
    bg: '#8b898925', // White
    surface: '#FFF5F7', // Light Pink
    text: '#1a1a1a',
    textLight: '#666666',
    border: '#FFB6D9',
    hover: '#FF85C0',
    shadow: 'rgba(255, 105, 180, 0.3)',

  },
  minimal: {
    primary: '#000000', // Black
    secondary: '#F5F5DC', // Beige
    accent: '#CCCCCC', // Light Gray
    bg: '#FFFFFF', // White
    surface: '#F9F9F9', // Off White
    text: '#1a1a1a',
    textLight: '#666666',
    border: '#E0E0E0',
    hover: '#F0F0F0',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  modern: {
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
  minimal: 'Inter, Roboto, Lato, sans-serif',
  modern: 'Outfit, "Space Grotesk", sans-serif',
};

export const THEME_DESCRIPTIONS: Record<ThemeType, string> = {
  playful: 'Fun & Playful - Colorful, vibrant, and energetic',
  minimal: 'Clean & Minimal - Professional, elegant, and focused',
  modern: 'Dark & Modern - Sleek, futuristic, and sophisticated',
};
