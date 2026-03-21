# QA Test Plan: Drag-Drop Features

## Test Scope
Test both drag-drop features:
1. Move Card Between Columns (cross-column drag)
2. Reorder Cards Within Column (same-column drag)

## Test Scenarios

### Scenario 1: Create Test Cards
**Setup:** Start with empty board
1. Add "Task A" to "To Do" column
2. Add "Task B" to "To Do" column
3. Add "Task C" to "In Progress" column

Expected: All tasks visible in their respective columns

### Scenario 2: Cross-Column Move
**Test:** Drag "Task A" from "To Do" → "In Progress"
- Mouse down on "Task A"
- Drag to "In Progress" column
- Mouse up over column

Expected:
- [ ] "Task A" disappears from "To Do" column
- [ ] "Task A" appears in "In Progress" column (should be at bottom after "Task C")
- [ ] "Task B" remains in "To Do" column
- [ ] Visual feedback: Column highlights blue while dragging over it
- [ ] Visual feedback: Dragged card opacity reduces to 50%

### Scenario 3: Same-Column Reorder
**Test:** Drag "Task A" within "In Progress" column (after it was moved there)
- Mouse down on "Task A"
- Drag within same column
- Mouse up

Expected:
- [ ] "Task A" stays in "In Progress" column
- [ ] Card position may change (current implementation appends to end)
- [ ] "Task C" order remains consistent

### Scenario 4: Rapid Moves
**Test:** Quickly drag multiple cards between columns
1. Drag "Task B" from "To Do" → "In Progress"
2. Immediately drag "Task A" from "In Progress" → "Done"
3. Drag "Task C" from "In Progress" → "To Do"

Expected:
- [ ] All moves complete successfully
- [ ] Final state: To Do has "Task C", In Progress has "Task B", Done has "Task A"
- [ ] No visual glitches or state inconsistencies

### Scenario 5: Drag with Edit
**Test:** Edit a card, then drag it
1. Add "Task X" to "To Do"
2. Click title to edit, change to "Task Y"
3. Press Enter to save
4. Drag "Task Y" to "In Progress"

Expected:
- [ ] Edit saves correctly
- [ ] Updated title visible after drag
- [ ] Task appears in target column with new title

## Visual/UX Checks
- [ ] Cursor changes to grab/grabbing appropriately
- [ ] Drop zone highlights blue when card hovers over column
- [ ] Dragged card becomes semi-transparent (50% opacity)
- [ ] No UI crashes or errors in browser console
- [ ] Transitions are smooth (no jarring visual changes)

## Edge Cases
- [ ] Drag card to same column and drop (should work without errors)
- [ ] Drag non-existent card (shouldn't happen, but verify no console errors)
- [ ] Very rapid back-and-forth drags
- [ ] Drag while input field is focused (should not create card)

## Acceptance Criteria
✅ PASS if:
- All basic scenarios (1-5) work without errors
- Visual feedback functions correctly
- No console errors or warnings
- Card data remains intact (title preserved)

❌ FAIL if:
- Card data corrupts during drag
- Card disappears without appearing in target column
- Visual feedback broken (no highlight or cursor change)
- Console shows TypeScript or runtime errors
