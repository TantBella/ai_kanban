import type { ThemeType } from '../../styles/themes';
import { THEMES, THEME_DESCRIPTIONS } from '../../styles/themes';

interface ThemeSelectorProps {
  currentTheme: ThemeType;
  onThemeSelect: (theme: ThemeType) => void;
  onClose: () => void;
}

export function ThemeSelector({ currentTheme, onThemeSelect, onClose }: ThemeSelectorProps) {
  const themes: ThemeType[] = ['playful', 'minimal', 'modern'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          borderColor: THEMES[currentTheme].primary,
          borderWidth: '2px'
        }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Choose Your Theme</h2>
        <p className="text-gray-600 text-center mb-8">Select how you want TaskTopia to look</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => {
                onThemeSelect(theme);
                onClose();
              }}
              className={`p-6 rounded-lg transition-all border-2 ${
                currentTheme === theme
                  ? 'ring-2'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
              style={{
                backgroundColor: THEMES[theme].bg,
                borderColor: currentTheme === theme ? THEMES[theme].primary : THEMES[theme].primary,
                boxShadow: currentTheme === theme ? `0 0 0 3px ${THEMES[theme].primary}40` : 'none'
              }}
            >
              <div className="flex flex-col gap-4">
                {/* Color preview */}
                <div className="flex gap-2">
                  <div
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: THEMES[theme].primary }}
                  />
                  <div
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: THEMES[theme].secondary }}
                  />
                  <div
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: THEMES[theme].accent }}
                  />
                </div>

                {/* Theme name */}
                <div
                  className="font-bold text-lg"
                  style={{ color: THEMES[theme].text }}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </div>

                {/* Description */}
                <div
                  className="text-sm"
                  style={{ color: THEMES[theme].textLight }}
                >
                  {THEME_DESCRIPTIONS[theme]}
                </div>

                {/* Selection indicator */}
                {currentTheme === theme && (
                  <div className="mt-2 text-sm font-semibold" style={{ color: THEMES[theme].primary }}>
                    ✓ Active
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
