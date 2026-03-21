import { useState } from 'react';

export function WelcomeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded flex justify-between items-center">
      <p className="text-blue-800 text-sm">
        Welcome to TaskTopia. Drag cards between columns to organize your workflow.
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="text-blue-800 hover:text-blue-900 font-semibold text-sm"
        aria-label="Dismiss welcome banner"
      >
        ✕
      </button>
    </div>
  );
}
