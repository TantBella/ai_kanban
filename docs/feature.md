# Features
## Purpose

This document defines the features of the Kanban application and breaks them down into tasks.

Each feature must belong to an Epic and include clear, implementable tasks.

---

## Epic 1: Board Management

### Feature: View Empty Board

**Description:**
Users can open the application and see an empty Kanban board with a clean, ready-to-use interface.

**User Value:**
Users immediately see a functional board and understand the application's purpose.

**Tasks:**
- [X] Create Board component
- [X] Render empty board layout
- [X] Display welcome state for empty board

---

### Feature: Create New Board

**Description:**
Users can create a new board with a custom name to organize different projects or workflows.

**User Value:**
Users can manage multiple boards for different initiatives without confusion.

**Tasks:**
- [X] Create input for board name
- [X] Handle board creation action
- [X] Store new board in state
- [X] Navigate to newly created board

---

## Epic 2: Column Organization

### Feature: Create Columns

**Description:**
Users can add columns to their board (e.g., "To Do", "In Progress", "Done") to organize work stages.

**User Value:**
Users can visualize workflow stages and categorize work logically.

**Tasks:**
- [X] Create Column component
- [X] Add button to create new column
- [X] Handle column creation with name input
- [X] Add column to board state

---

### Feature: Rename Column

**Description:**
Users can edit a column's name to match their specific workflow needs.

**User Value:**
Users can customize the board to reflect their project's stages without recreating columns.

**Tasks:**
- [X] Add edit mode to Column component
- [X] Handle inline edit on column header
- [X] Update column name in state
- [X] Close edit mode on save

---

### Feature: Delete Column

**Description:**
Users can remove a column they no longer need.

**User Value:**
Users keep their board clean and focused on active workflow stages.

**Tasks:**
- [X] Add delete button to column header
- [X] Handle column deletion
- [X] Remove column from board state
- [X] Handle cascade (decide: delete cards or move them)

---

## Epic 3: Task Management

### Feature: Create Task Card

**Description:**
Users can quickly add a new task card to any column by typing a title and confirming.

**User Value:**
Users can rapidly capture work items without complex forms or dialogs.

**Tasks:**
- [X] Create Card component
- [X] Add input field for card title
- [X] Handle create card action
- [X] Add card to column state

---

### Feature: Edit Task Card

**Description:**
Users can click a card to update its title or description.

**User Value:**
Users can refine task details as requirements become clearer.

**Tasks:**
- [X] Add edit mode to Card component
- [X] Handle inline edit on card
- [X] Update card content in state
- [X] Close edit mode on save

---

### Feature: Delete Task Card

**Description:**
Users can remove completed or obsolete cards from the board.

**User Value:**
Users keep the board current and focused on active work.

**Tasks:**
- [X] Add delete button to card
- [X] Handle card deletion
- [X] Remove card from column state

---

## Epic 4: Card Organization

### Feature: Move Card Between Columns

**Description:**
Users can drag a card from one column to another (e.g., "To Do" → "In Progress") using drag-and-drop.

**User Value:**
Users can update task status intuitively with minimal friction.

**Tasks:**
- [X] Implement drag-and-drop logic
- [X] Handle card drop between columns
- [X] Update card location in state
- [X] Provide visual feedback during drag

---

### Feature: Reorder Cards Within Column

**Description:**
Users can drag a card up or down within the same column to prioritize tasks.

**User Value:**
Users can communicate task priority visually without additional tooling.

**Tasks:**
- [X] Extend drag-and-drop to support reordering
- [X] Handle card reorder within column
- [X] Update card order in state
- [X] Preserve visual order on re-render

---

## Epic 5: Board Persistence

### Feature: Auto-Save Board State

**Description:**
The board state is automatically saved as users make changes (initially to browser local storage).

**User Value:**
Users don't lose work when they refresh or close the browser.

**Tasks:**
- [X] Create persistence service
- [X] Hook state to save on every change
- [X] Implement local storage integration
- [X] Add debouncing to avoid excessive saves

---

### Feature: Load Saved Board

**Description:**
When users return to the application, their previously saved board loads automatically.

**User Value:**
Users experience continuity and can resume work without re-creating the board structure.

**Tasks:**
- [X] Fetch board state on app mount
- [X] Restore board from local storage
- [X] Handle missing or corrupt state gracefully
- [X] Display loading state while restoring