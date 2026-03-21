# Development Plan: Drag & Drop Organization

## Features Overview
1. **Move Card Between Columns** - Drag card from one column to another
2. **Reorder Cards Within Column** - Drag card up/down within same column

Both features use drag-and-drop. Shared infrastructure, slightly different logic.

---

## User Value
- Users can organize workflow intuitively
- Visual status updates (To Do → In Progress → Done)
- Prioritize tasks within columns
- Natural, fast interaction (no modals or buttons)

---

## Implementation Approach

**Shared Architecture:**
1. Card component: Add drag handlers (onDragStart, onDragEnd)
2. Column component: Add drop handlers (onDragOver, onDrop, onDragLeave)
3. Board state: Track card position, handle moves
4. Visual feedback: Highlight drop zones, show drag state

**Drag Data:**
- Store: { sourceColumnId, taskId, sourceIndex }
- Transfer via dataTransfer during drag

**Logic Separation:**
- Move Between: Different column ID → move to new column
- Reorder Within: Same column ID → reorder array

---

## Feature 1: Move Card Between Columns

### Tasks
- [ ] Add drag attributes to Card
- [ ] Add onDragStart handler (store source info)
- [ ] Add onDragEnd handler (cleanup)
- [ ] Add onDragOver to Column (allow drop)
- [ ] Add onDrop to Column (handle move)
- [ ] Add onDragLeave to Column (cleanup styles)
- [ ] Update Board state (remove from source, add to target)
- [ ] Add visual feedback (highlight column on drag over)
- [ ] Prevent drop to same column with same index

---

## Feature 2: Reorder Cards Within Column

### Tasks
- [ ] Extend drop logic to handle same-column reordering
- [ ] Calculate target index based on drop position
- [ ] Reorder array in state
- [ ] Update Board state with new order
- [ ] Highlight insert position during drag
- [ ] Prevent drop to same position (no-op)

---

## Shared Implementation

### Card Component Updates
- Add draggable="true"
- Add onDragStart to set drag data
- Add onDragEnd for cleanup
- Add visual indicators (cursor, opacity during drag)

### Column Component Updates
- Add onDragOver (prevent default to allow drop)
- Add onDrop (handle both move and reorder)
- Add onDragLeave (remove visual feedback)
- Track draggedOver state for styling

### Board Component Updates
- Create handleMoveCard function
- Handle cross-column and same-column logic
- Update state immutably
- Preserve task order

---

## Progress
- Created: 2026-03-21
- Status: Ready for implementation
- Plan: Both features together, then QA, then persistence
