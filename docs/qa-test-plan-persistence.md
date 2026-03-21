# QA Test Plan: Board Persistence (localStorage)

## Test Objective
Verify that board state is automatically saved to and loaded from browser localStorage, allowing users to continue their work after closing/refreshing the page.

## Test Scenarios

### Scenario 1: Create Cards and Persist
**Steps:**
1. Open application (empty board)
2. Add 3 cards to "To Do" column (Task A, Task B, Task C)
3. Add 2 cards to "In Progress" column (Task D, Task E)
4. Refresh the page (F5 or Ctrl+R)

**Expected Results:**
- [ ] After refresh, all 5 cards appear in their original positions
- [ ] Card titles unchanged
- [ ] Column structure preserved
- [ ] No cards lost

### Scenario 2: Card Modifications Persist
**Steps:**
1. Start with empty board (or clear localStorage if needed)
2. Add "Old Title" to "To Do"
3. Click to edit, change to "New Title", save
4. Refresh page
5. Check card title

**Expected Results:**
- [ ] Card displays "New Title" after refresh
- [ ] Edit was saved to localStorage
- [ ] Card title persists correctly

### Scenario 3: Drag-Drop Moves Persist
**Steps:**
1. Start with empty board
2. Add "Task 1" to "To Do"
3. Add "Task 2" to "To Do"
4. Drag "Task 1" to "In Progress"
5. Refresh page

**Expected Results:**
- [ ] "Task 1" is in "In Progress" column after refresh
- [ ] "Task 2" remains in "To Do"
- [ ] Move was persisted to localStorage
- [ ] Column order maintained

### Scenario 4: Delete and Persist
**Steps:**
1. Add "Temporary Task" to "To Do"
2. Click delete and confirm
3. Refresh page

**Expected Results:**
- [ ] "Temporary Task" does not appear after refresh
- [ ] Delete was persisted
- [ ] Column is empty (or contains other cards)

### Scenario 5: Reorder Within Column Persists
**Steps:**
1. Add "Card A", "Card B", "Card C" to "To Do" (in order)
2. Drag "Card A" within "To Do" (reorder)
3. Refresh page

**Expected Results:**
- [ ] New order is preserved after refresh
- [ ] Reorder was persisted to localStorage
- [ ] All cards remain in "To Do"

### Scenario 6: Clear localStorage Resets Board
**Steps:**
1. Add several cards to board
2. Open browser DevTools (F12)
3. Go to Application → Storage → Local Storage
4. Find entry "kanban-board-state" and delete it
5. Close DevTools
6. Refresh page

**Expected Results:**
- [ ] Board resets to default empty state
- [ ] 3 empty columns (To Do, In Progress, Done) appear
- [ ] No cards visible
- [ ] Graceful fallback to default board

### Scenario 7: Corrupted localStorage Data
**Steps:**
1. Open browser DevTools (F12)
2. Go to Application → Storage → Local Storage
3. Find "kanban-board-state" entry
4. Edit value to invalid JSON: `{invalid json`
5. Close DevTools
6. Refresh page

**Expected Results:**
- [ ] Application loads without errors
- [ ] Console shows error: "Failed to load board from storage"
- [ ] Default empty board displayed
- [ ] Graceful error handling, no UI crash

### Scenario 8: Complex State Persistence
**Steps:**
1. Create board state with:
   - Multiple cards in each column
   - Some cards edited with new titles
   - Cards moved between columns
   - Reordered within columns
2. Refresh page multiple times

**Expected Results:**
- [ ] Complex state preserved through all refreshes
- [ ] No data loss
- [ ] No state corruption
- [ ] All modifications intact

---

## Browser DevTools Verification

**Storage Tab Checks:**
- [ ] "kanban-board-state" entry visible in localStorage
- [ ] Value is valid JSON format
- [ ] Updates when cards are added/edited/moved/deleted
- [ ] Value size is reasonable (not excessively large)

**Console Checks:**
- [ ] No errors when loading board
- [ ] No errors when saving board
- [ ] Successful persistence logged (if console logs enabled)

---

## Edge Cases

- [ ] **Empty board:** Default empty board persisted correctly
- [ ] **Large board:** Many cards (50+) persist without performance issues
- [ ] **Rapid changes:** Multiple card operations in quick succession all persist
- [ ] **Long titles:** Card titles with many characters persist correctly
- [ ] **Special characters:** Titles with emojis, symbols, quotes persist correctly

---

## Acceptance Criteria

✅ **PASS if:**
- Basic persistence works (add, edit, delete, move, reorder)
- Data survives page refresh
- Corrupted localStorage handled gracefully
- Default board loads if no persisted state
- No data loss observed

❌ **FAIL if:**
- Cards disappear after refresh
- Board resets unexpectedly
- Application crashes on corrupted data
- Console errors for persistence operations
- State inconsistencies after refresh

---

## Sign-Off Template

**QA Tester:** ________________  
**Date Tested:** ________________  
**Status:** ☐ PASS ☐ FAIL  
**Notes:** ________________________________________________
