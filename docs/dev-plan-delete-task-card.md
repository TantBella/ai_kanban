# Development Plan: Delete Task Card

## Feature Overview
Users can remove a task card by clicking a delete button on the card. A simple confirmation prevents accidental deletion.

## User Value
Users can remove completed or obsolete tasks, keeping the board clean and focused.

---

## Implementation Approach

**Architecture:**
1. Card component displays delete button (trash icon)
2. Card emits delete handler callback when button clicked
3. Confirmation dialog (window.confirm) to prevent accidental deletion
4. Column passes delete callback up to Board
5. Board removes card from column state

**Tech Stack:**
- React hooks (useCallback for handlers)
- Tailwind for button styling (red accent)
- window.confirm() for simple confirmation
- TypeScript for type safety
- SVG trash icon

---

## Implementation Tasks

### Task 1: Add Delete Button to Card Component ✅ DONE
- Delete button with trash icon SVG
- Styled with Tailwind (red text, hidden by default)
- Appears on card hover (opacity transition)
- Top-right positioning with proper spacing

### Task 2: Add Delete Callback to Card Props ✅ DONE
- Updated CardProps interface
- Accept `onDelete(taskId: string)` callback function
- Receives card ID as parameter

### Task 3: Handle Delete Button Click ✅ DONE
- Click handler shows confirmation dialog
- Dialog text includes task title for clarity
- Call `onDelete` only if user confirms
- Card removed from DOM on confirmation

### Task 4: Update Column Component ✅ DONE
- Added `onDeleteCard(columnId, taskId)` callback prop
- Pass callback to Card component
- Forward delete events to Board parent

### Task 5: Update Board Component ✅ DONE
- Created `handleDeleteCard` function with useCallback
- Pass callback to all Column components
- Remove card from column state using immutable filter
- State updates correctly across board

### Task 6: Test Delete Flow ✅ DONE
- Click delete button on card
- Confirmation appears with task title
- Cancel: card remains unchanged
- Confirm: card removes from column
- Multiple deletions work correctly
- TypeScript: No errors

---

## What Was Built

**Components Enhanced:**
- **Card.tsx** - Added delete button with icon, confirmation handler
- **Column.tsx** - Added onDeleteCard callback, forwarding to Card
- **Board.tsx** - Added handleDeleteCard with immutable state updates
- **Card.types.ts** - Added onDelete callback to CardProps
- **Column.types.ts** - Added onDeleteCard callback to ColumnProps

**Features:**
- Delete button appears on hover (UX improvement)
- Red trash icon for clear affordance
- Confirmation dialog prevents accidental deletion
- Task title shown in confirmation for clarity
- Smooth removal from UI
- No layout shifts after deletion

---

## Progress
- Created: 2026-03-21
- Status: ✅ COMPLETE
- Feature ready for QA testing

