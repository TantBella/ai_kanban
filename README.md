# Kanban Project

A web-based Kanban board for managing tasks and workflows.

---

## Overview
This application is built to provide a simple and intuitive way to:

* Organize work into columns
* Track progress visually
* Manage tasks efficiently

The project is developed iteratively with the help of AI-assisted tooling.

---
### Example workflow:
1. In another project, interact with an AI role (e.g. "Product Owner")
2. The AI generates:
- Epics
- Features
- Tasks

3. These are then:
- Structured according to /docs
- Added to this Kanban board

4. Development is tracked visually in this app

The Kanban board acts as the source of truth for execution, while AI acts as a planning and reasoning partner.

### Core Concepts
Epic → Large area of functionality
Feature → Deliverable functionality
Task → Concrete implementation step

---

## Features (Planned)
* Create and manage boards
* Add, edit, and delete columns
* Add, edit, and delete cards
* Drag and drop cards between columns
* Persist board state

---

## Getting Started

```bash
# install dependencies
npm install

# run development server
npm run dev
```

---

## Project Structure

```id="h5b2x1"
src/
  components/
    Board/
    Column/
    Card/
  pages/
  hooks/
  services/
```
---

## Documentation
Detailed planning and AI collaboration rules can be found in:

* `/docs/copilot-instructions.md`
* `/docs/copilot-learnings.md`
* `/docs/product-owner-guidelines.md`
* `/docs/developer-guidelines.md`
* `/docs/qa-guidelines.md`
* `/docs/ux-ui-guidelines.md`
* `/docs/epics.md`
* `/docs/features.md`

---

## Development Approach
This project is built using:

* Iterative development
* Small, well-defined tasks
* AI-assisted implementation

---

## Tech Stack
* Frontend: React + TypeScript
* Styling: (TBD – CSS / Tailwind)
* State Management: React state (initially)
* Backend: .NET (optional, future)

---

## UX / UI Goals
The application should be:

* Simple and intuitive
* Fast to interact with
* Visually clean and structured

Key interactions:

* Drag and drop for moving cards
* Inline creation of tasks
* modern clicks to perform actions

---

## Goal
Build a Kanban system that:
Is simple enough for fast iteration
Is structured enough for AI to understand and use
Can be reused across multiple projects
To build a clean, maintainable, and user-friendly Kanban board application.

---

## Future Ideas
AI integration (auto-create tasks from prompts)
Sync with Git (PRs ↔ tasks)
Role-based AI workflows (PO, Dev, QA)
Import/export planning data between projects
Other way to switch between and organize boards