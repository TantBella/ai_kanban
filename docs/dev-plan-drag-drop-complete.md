# Development Plan: Drag-Drop Features Complete

## Status: IN PROGRESS

### Features Being Implemented:
1. **Move Card Between Columns** - Cross-column drag-drop
2. **Reorder Cards Within Column** - Same-column drag-drop

## Implementation Progress

### Phase 1: Cross-Column Moves ✅ DONE
- [x] Card: Added `draggable` attribute, `onDragStart`, `onDragEnd` handlers
- [x] Card: Pass `columnId` and `taskIndex` props for drag data
- [x] Column: Added `onDragOver` handler to accept drops
- [x] Column: Added `onDrop` handler to extract drag data and call move handler
- [x] Column: Added `onDragLeave` handler to clear hover state
- [x] Column: Added `isDraggedOver` state for visual feedback (blue highlight + ring)
- [x] Board: Implemented `handleMoveCard` callback with immutable state logic
- [x] Board: Passes `onMoveCard` to Column components

### Phase 2: Same-Column Reordering ⏳ READY FOR TEST
The implementation supports same-column reordering:
- When source column === target column, cards are reordered in place
- `handleMoveCard` uses `sourceIndex` and `targetIndex` for positioning
- Drop appends to end of column (targetIndex = column.tasks.length)
- Can add drop position indicators in future for mid-list insertion

### Visual Feedback Features
- ✅ Card: Cursor changes to `cursor-grab` / `cursor-grabbing`
- ✅ Card: Opacity reduces to 50% during drag
- ✅ Column: Background changes to `bg-blue-100` with `ring-2 ring-blue-400` on hover
- ✅ Smooth transitions on color/opacity changes

## Known Limitations & Next Steps

### Current Behavior
- Dropping always appends to end of target column
- No mid-list insertion indicators yet
- No keyboard support for accessibility

### Testing Required
1. Cross-column move: Drag card from "To Do" → "In Progress"
2. Same-column reorder: Drag card within "To Do" column (will append to end)
3. Rapid moves: Multiple drag operations in succession
4. Visual feedback: Column highlight, card opacity during drag

### After Drag-Drop Testing Passes
1. Run full QA test suite for both features
2. Implement Board Persistence (localStorage):
   - Auto-save board state on every change
   - Load persisted board on app mount
   - Handle missing/corrupt data gracefully
