import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { THEMES } from '../../styles/themes';

export function WelcomeBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();
  const themeColors = THEMES[theme];

  if (!isVisible) return null;

  return (
    <div
      className="border-l-4 p-4 mb-6 rounded flex justify-between items-center"
      style={{
        backgroundColor: `${themeColors.accent}`,
        borderColor: themeColors.primary,
        color: themeColors.text
      }}
    >
      <p className="text-sm">
        Welcome to TaskTopia. Create, edit and drag cards between columns to organize your workflow.
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="font-semibold text-sm hover:opacity-70 transition-opacity"
        style={{ color: themeColors.text }}
        aria-label="Dismiss welcome banner"
      >
        ✕
      </button>
    </div>
  );
}
