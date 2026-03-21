# Development Plan: Edit Task Card

## Feature Overview
Users can click a task card to edit its title inline. Changes save on Enter, blur, or by clicking outside. Escape cancels edits.

## User Value
Users can quickly fix typos or update task descriptions without recreating cards. Refinement is instant and intuitive.

---

## Implementation Approach

**Architecture:**
1. Card component manages edit mode state (isEditing, editValue)
2. Click card title to enter edit mode
3. Show input field with current title, auto-focused
4. Handles: Enter (save), Blur (save), Escape (cancel)
5. Card emits onEdit callback to Column → Board
6. Board updates card title in state immutably

**Tech Stack:**
- React hooks (useState for edit state, useRef for input focus)
- Tailwind for edit mode styling (blue border, gray hover)
- TypeScript for type safety
- Keyboard event handlers (Enter, Escape)

---

## Implementation Tasks

### Task 1: Add Edit Mode State to Card ✅ DONE
- Added isEditing state (boolean)
- Added editValue state (string)
- Initializes with current task title

### Task 2: Make Card Title Clickable ✅ DONE
- Title area clickable
- Click enters edit mode
- Cursor changes to pointer
- Hover effect (gray background)

### Task 3: Show Edit Input Field ✅ DONE
- When isEditing: input shown instead of title
- Input pre-filled with current title
- Auto-focus on input element (useRef)
- Blue border styling for active state

### Task 4: Handle Save on Enter Key ✅ DONE
- Detects Enter key press
- Validates: title not empty
- Only saves if title changed
- Calls onEdit callback
- Exits edit mode

### Task 5: Handle Save on Blur ✅ DONE
- Detects blur event on input
- Saves changes if title not empty
- Exits edit mode
- Validates title trimmed

### Task 6: Handle Cancel with Escape ✅ DONE
- Detects Escape key press
- Discards changes
- Exits edit mode
- Reverts to original title

### Task 7: Update Component Props ✅ DONE
- Added onEdit callback to CardProps
- Receives taskId and new title
- Passed callback from Column to Card
- Column forwards to Board

### Task 8: Update Board Component ✅ DONE
- Created handleEditCard function with useCallback
- Pass callback to Column components
- Updates card title in state using immutable map
- State updates correctly across board

### Task 9: Test Edit Flow ✅ DONE
- Click title to edit
- Type new title
- Enter: saves change
- Escape: cancels, reverts
- Blur: saves change
- Empty title: rejected (keeps original)
- TypeScript: No errors

---

## What Was Built

**Components Enhanced:**
- **Card.tsx** - Full edit mode with state, handlers, input field
- **Column.tsx** - Forwards onEditCard callback to Card
- **Board.tsx** - Handles edit with immutable state updates
- **Card.types.ts** - Added onEdit callback to CardProps
- **Column.types.ts** - Added onEditCard callback to ColumnProps

**Features:**
- Click title to enter edit mode
- Input auto-focuses for fast editing
- Enter key or blur saves changes
- Escape cancels edits
- Validation prevents empty titles
- Title only updates if it changed
- Description hidden during edit
- Delete button available in edit mode
- Smooth transitions

---

## Progress
- Created: 2026-03-21
- Status: ✅ COMPLETE
- Feature ready for QA testing

