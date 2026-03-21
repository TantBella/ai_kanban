# Theme Styling System - UX Design Guide

**Project:** AI Kanban  
**Feature:** Multi-Theme Styling System  
**Status:** 🔄 Design Phase  

---

## Overview
Implement 3 distinct visual themes for the AI Kanban application. Users can click the "TaskTopia" logo in the header to open a theme selector and switch between themes instantly. Theme preference persists via localStorage.

---

## Theme 1: Fun & Playful 🎨

### Philosophy
Vibrant, energetic, creative - designed for teams who want their workspace to feel joyful and inspire creativity.

### Color Palette

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Background | White | #FFFFFF | Main background |
| Primary Color | Hot Pink | #FF69B4 | Buttons, highlights, CTA |
| Secondary | Orange | #FF8C00 | Board selector, headers |
| Accent | Golden Yellow | #FFD700 | Icons, hover states |
| Text Dark | Charcoal | #333333 | Body text, labels |
| Text Light | White | #FFFFFF | Text on colored backgrounds |
| Card BG - Pink | Light Pink | #FFE4E1 | Task cards (variant 1) |
| Card BG - Orange | Light Orange | #FFE5CC | Task cards (variant 2) |
| Card BG - Yellow | Light Yellow | #FFFACD | Task cards (variant 3) |
| Border | Pink Light | #FFB6D9 | Card borders, dividers |

### Typography

| Element | Font | Weight | Size | Notes |
|---------|------|--------|------|-------|
| Headers (H1, H2) | Fredoka or Poppins | 700 | 32-48px | Playful, rounded |
| Titles (H3, H4) | Fredoka or Poppins | 600 | 24-28px | Friendly feel |
| Body Text | Quicksand | 400 | 16px | Approachable |
| Labels/Small | Quicksand | 500 | 14px | Still playful |

### Component Styling

**Header:**
- Background: White
- Button (TaskTopia): Orange (#FF8C00) with rounded corners (border-radius: 12px)
- Text: Hot Pink (#FF69B4)
- Shadow: Colorful shadow (shadow-lg with pink tint)

**Board Selector Dropdown:**
- Background: White with light pink border (#FFB6D9)
- Text: Dark (#333333)
- Hover: Light pink background (#FFE4E1)
- Active: Hot pink background (#FF69B4) with white text
- "+ New Board" button: Orange (#FF8C00) with playful hover animation

**Columns:**
- Background: Off-white (#F9F9F9)
- Header: Orange (#FF8C00) with white text
- Border: Pink (#FFB6D9)
- Header styling: Rounded corners, playful font

**Cards:**
- Background: Pastel colors (rotate between Light Pink, Orange, Yellow)
- Border: Colored borders matching theme (2px rounded)
- Shadow: Playful drop shadow with color
- Hover: Scale up slightly (transform: scale(1.02)), enhance shadow
- Buttons: Colorful with rounded corners

**Buttons:**
- Default: Hot Pink (#FF69B4) with white text
- Hover: Darker pink (#E85A9F) with bounce animation
- Delete: Orange (#FF8C00) with red hover
- Border-radius: 12px

**Animations:**
- Hover: Bounce effect (keyframes with small scale)
- Drag: Smooth transitions
- Theme switch: Fade transition (200ms)

---

## Theme 2: Clean & Minimal 📋

### Philosophy
Professional, focused, distraction-free - designed for teams who value simplicity and clarity. Emphasis on readability and elegant minimalism.

### Color Palette

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Background | Beige | #F5F5DC | Main background |
| Primary Color | Black | #1a1a1a | Text, buttons, headers |
| Secondary | White | #FFFFFF | Cards, panels |
| Accent | Light Gray | #E8E8E8 | Borders, dividers |
| Text | Dark Gray | #4a4a4a | Body text |
| Border | Gray | #D1D1D1 | Card borders, dividers |
| Hover | Off-white | #F9F9F9 | Hover states |
| Button Alt | Beige | #F5F5DC | Alternative buttons |

### Typography

| Element | Font | Weight | Size | Notes |
|---------|------|--------|------|-------|
| Headers (H1, H2) | Inter or Roboto | 300 | 32-40px | Slim, elegant |
| Titles (H3, H4) | Inter or Roboto | 400 | 20-24px | Clean hierarchy |
| Body Text | Lato | 300 | 16px | Readable, slim |
| Labels/Small | Lato | 400 | 14px | Subtle but clear |

### Component Styling

**Header:**
- Background: White (#FFFFFF)
- Button (TaskTopia): Black (#1a1a1a) text on white with thin border (#D1D1D1)
- Text: Black (#1a1a1a)
- Shadow: Minimal (shadow-sm with gray)

**Board Selector Dropdown:**
- Background: White with subtle gray border (#D1D1D1)
- Text: Dark gray (#4a4a4a)
- Hover: Off-white background (#F9F9F9)
- Active: Beige background (#F5F5DC)
- "+ New Board" button: Black text on beige background

**Columns:**
- Background: White (#FFFFFF)
- Header: Black (#1a1a1a) text with subtle underline
- Border: Light gray (#E8E8E8)
- Header styling: No rounded corners (sharp edges)

**Cards:**
- Background: Off-white (#F9F9F9) or white (#FFFFFF)
- Border: Subtle gray (#E8E8E8) - 1px
- Shadow: Very subtle (shadow-sm)
- Hover: Opacity change (opacity-75 on hover)
- Buttons: Black text on transparent with border

**Buttons:**
- Default: Black (#1a1a1a) text on transparent with border
- Hover: Opacity change (opacity-80)
- Delete: Red/danger color
- Border-radius: 2px (sharp, minimal)

**Animations:**
- Hover: Opacity transition (100ms)
- Drag: Smooth transitions
- Theme switch: Fade transition (200ms)

---

## Theme 3: Dark & Modern 🌙

### Philosophy
Sleek, tech-forward, sophisticated - designed for teams who work late and love cutting-edge aesthetics. Glassmorphic design with neon accents.

### Color Palette

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Background | Dark Charcoal | #0F0F0F | Main background |
| Primary Color | Navy | #1A1A2E | Cards, panels |
| Secondary | Teal (Neon) | #00D9FF | Buttons, accents |
| Tertiary | Purple (Neon) | #9D4EDD | Secondary accents |
| Text Light | Light Gray | #E0E0E0 | Body text |
| Text Muted | Medium Gray | #A0A0A0 | Disabled, secondary |
| Borders | Teal with opacity | #00D9FF 0.3 | Card borders, glow |
| Glass BG | Navy + Alpha | #1A1A2E 0.7 | Cards with glass effect |

### Typography

| Element | Font | Weight | Size | Notes |
|---------|------|--------|------|-------|
| Headers (H1, H2) | Outfit | 600 | 32-40px | Modern, sleek |
| Titles (H3, H4) | Outfit | 500 | 20-24px | Tech-forward |
| Body Text | Space Grotesk | 400 | 16px | Geometric, modern |
| Labels/Small | Space Grotesk | 300 | 14px | Subtle |

### Component Styling

**Header:**
- Background: Dark Navy (#1A1A2E)
- Button (TaskTopia): Teal (#00D9FF) text with glow effect (text-shadow)
- Text: Light Gray (#E0E0E0)
- Shadow: Neon glow (box-shadow: 0 0 20px rgba(0, 217, 255, 0.3))

**Board Selector Dropdown:**
- Background: Navy (#1A1A2E) with teal border and glow (0.5 opacity)
- Text: Light gray (#E0E0E0)
- Hover: Glass effect (backdrop-blur, semi-transparent)
- Active: Teal glow background with semi-transparency
- "+ New Board" button: Purple (#9D4EDD) with glow

**Columns:**
- Background: Glass effect (Navy #1A1A2E with 0.5 opacity + backdrop-blur)
- Header: Teal (#00D9FF) text with glow
- Border: Teal with glow (#00D9FF 0.3 opacity)
- Header styling: No borders, just text color

**Cards:**
- Background: Glass effect (rgba(26, 26, 46, 0.7) with backdrop-blur)
- Border: Teal (#00D9FF) with glow effect (0.3-0.5 opacity)
- Shadow: Neon glow (0 0 15px rgba(0, 217, 255, 0.2))
- Hover: Enhanced glow (0 0 25px rgba(0, 217, 255, 0.4))
- Buttons: Teal or Purple with glow

**Buttons:**
- Default: Teal (#00D9FF) with neon glow
- Hover: Enhanced glow, slight color shift to brighter teal
- Delete: Purple (#9D4EDD) with glow
- Border-radius: 4px (slightly rounded, modern)

**Animations:**
- Hover: Glow enhancement (box-shadow expansion)
- Drag: Smooth transitions with glow effect
- Theme switch: Fade transition (200ms)

---

## Implementation Requirements

### 1. Theme Context/State
- Create React Context for theme management
- State: `currentTheme: "playful" | "minimal" | "modern"`
- Persist to localStorage under key `kanban-theme`
- Load preference on app startup

### 2. Theme Switcher UI
- Clickable "TaskTopia" H1 logo in header
- Opens modal/dialog with 3 theme cards
- Each theme card shows:
  - Theme name
  - Color preview/swatch
  - Font preview
  - Description (one sentence)
- Click to select and apply theme
- Close modal after selection

### 3. Google Fonts Integration
- Add fonts via index.css or index.html `<link>` tags
- Playful: `Fredoka`, `Poppins`, `Quicksand`
- Minimal: `Inter`, `Roboto`, `Lato`
- Modern: `Outfit`, `Space Grotesk`

### 4. CSS Variables
- Define theme colors as CSS variables
- Example: `--primary-color`, `--bg-color`, `--text-color`
- Switch variables based on selected theme
- Alternative: Tailwind config with theme variants

### 5. Component Updates
- Update all components to use theme-based styling
- Remove hardcoded blue (#3B82F6) colors
- Apply theme colors to:
  - Buttons
  - Headers
  - Cards
  - Backgrounds
  - Text
  - Borders
  - Hover effects

### 6. Fonts Application
- Apply theme font to entire app via CSS class on `<html>` or `<body>`
- Example: `<body className={`theme-${currentTheme}`}>`
- Define font-family in Tailwind config or CSS

---

## File Changes Needed

### New Files
- `src/contexts/ThemeContext.tsx` - Theme state management
- `src/hooks/useTheme.ts` - Custom hook to access theme
- `src/styles/themes.ts` - Theme color definitions
- `src/components/ThemeSelector/ThemeSelector.tsx` - Theme switcher modal
- `src/styles/themes.css` - Theme-specific CSS variables and styling

### Updated Files
- `src/App.tsx` - Add theme provider, make logo clickable
- `src/index.css` - Google Fonts imports, theme CSS
- `tailwind.config.js` - Theme color configuration
- All component files - Apply theme colors
- `src/components/BoardSelector/BoardSelector.tsx` - Theme colors
- `src/components/Board/Board.tsx` - Theme styling
- `src/components/Column/Column.tsx` - Theme styling
- `src/components/Card/Card.tsx` - Theme styling

---

## Testing Checklist

### Visual Testing
- [ ] All 3 themes render correctly
- [ ] Colors match specifications
- [ ] Fonts load correctly
- [ ] No visual glitches

### Functionality Testing
- [ ] Click "TaskTopia" opens theme selector
- [ ] Can switch between all 3 themes
- [ ] Theme applies immediately
- [ ] Theme persists after page refresh

### Edge Cases
- [ ] No stored theme (first load) - use default
- [ ] Corrupted theme data - fallback to default
- [ ] Multiple rapid theme switches - no visual conflicts

### Performance
- [ ] No lag when switching themes
- [ ] Fonts load without blocking
- [ ] Smooth transitions (200ms)

---

## Rollout Plan

1. **Phase 1:** Create theme system architecture (Context, hooks, state)
2. **Phase 2:** Implement theme UI (selector modal, clickable logo)
3. **Phase 3:** Apply theme colors to components (one component at a time)
4. **Phase 4:** Integrate Google Fonts for each theme
5. **Phase 5:** QA testing (visual + functionality)
6. **Phase 6:** Deploy to production

---

## Design Notes

### Playful Theme
- Use consistent rounded corners (12px+)
- Animated hover states (bounce, scale)
- Cards can have different background colors for variety
- Vibrant shadows with color tints
- Large, expressive typography

### Minimal Theme
- Sharp corners (2px) or no border-radius
- Subtle hover effects (opacity, very slight color change)
- Monochromatic or near-monochromatic color scheme
- Thin font weights (300-400)
- Generous whitespace

### Dark/Modern Theme
- Glassmorphic cards (semi-transparent + backdrop-blur)
- Neon glow effects on interactive elements
- Sci-fi inspired aesthetic
- Geometric fonts
- High contrast between elements and background

---

## Questions for Review

1. ✅ Are the 3 theme directions clear and distinct?
2. Should theme selector be a modal, dropdown, or sidebar?
3. Should theme choice affect other elements (like buttons, inputs)?
4. Any additional color preferences or font suggestions?
5. Should theme apply to **all** pages or just the main board?

---

**Status:** Ready for UX Designer Approval → Developer Implementation
