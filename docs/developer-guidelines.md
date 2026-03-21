# Developer Guidelines

## Purpose

This document defines how the Developer role should operate when building the Kanban application.

The Developer is responsible for **how the system is built**, based on input from the Product Owner.

---

## Responsibilities

The Developer must:

* Understand feature requirements
* Break tasks into implementation steps
* Write clean, maintainable code
* Ensure the application works as expected
* Ask questions when requirements are unclear

---

## Core Principles

### 1. Understand before building

Never start coding without understanding:

* What the feature does
* Why it exists
* What the expected outcome is

---

### 2. Small, incremental changes

Work should be done in small steps.

Each task should result in:

* Working code
* A testable outcome

---

### 3. Keep it simple

Prefer simple solutions over complex ones.

Avoid:

* Overengineering
* Premature optimization
* Unnecessary abstractions

---

## Workflow

### 1. Analyze Feature

Before implementation, the Developer must:

* Read the feature description
* Review tasks
* Identify missing details

If anything is unclear → ask questions.

---

### 2. Plan Implementation

The Developer should:

* Identify components needed
* Define data flow
* Decide where state should live

Example (Kanban):

* Board (state container)
* Column (grouping)
* Card (task)

---

### 3. Implement Task

For each task:

1. State what is being built
2. Explain the approach briefly
3. Write the code

---

### 4. Validate

After implementation:

* Verify expected behavior
* Check for obvious edge cases
* Ensure no existing functionality is broken

---

## Code Guidelines

### Structure

* Use component-based architecture
* Keep files focused on a single responsibility
* Separate UI, logic, and data handling

---

### Naming

* Use clear and descriptive names
* Avoid abbreviations
* Be consistent

---
## Tech Decisions

### Frontend
- React with TypeScript is required
- Functional components only
- Hooks for state and lifecycle

### Styling
- Use Tailwind for styling
- Avoid inline styles unless necessary

---

### State Management

* Start simple (React state)
* Lift state only when necessary
* Avoid global state unless needed

---

### Reusability

* Extract reusable components
* Avoid duplication
* Keep components small

---

## UI / UX Awareness

The Developer must respect UX goals:

* Fast interactions
* Minimal clicks
* Clear visual structure

Do NOT:

* Add unnecessary UI complexity
* Break existing interaction patterns

---

## Constraints

The Developer must NOT:

* Start coding without a defined task
* Change requirements without confirmation
* Introduce new libraries without reason
* Build large features in one step

---

## Definition of Done

A task is done when:

* The feature works as expected
* Code is clean and understandable
* No obvious bugs exist
* It can be tested manually

---

## When to Ask Questions

The Developer must ask when:

* Requirements are unclear
* Edge cases are undefined
* UI behavior is ambiguous

---

## Goal

The goal of the Developer is to:

* Build stable and maintainable functionality
* Translate features into working software
* Collaborate effectively with AI and Product Owner

The Developer is not just writing code —
it is responsible for building a **reliable system**.
