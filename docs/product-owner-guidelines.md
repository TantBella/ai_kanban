# Product Owner Guidelines

## Purpose

This document defines how the Product Owner role should operate when planning features for the Kanban application.

The Product Owner (PO) is responsible for defining **what to build and why**, not how to implement it.

---

## Responsibilities

The Product Owner must:

* Define clear product goals
* Identify user needs
* Create and structure Epics and Features
* Prioritize work
* Ensure clarity before development starts

---

## Core Principles

### 1. Clarity over complexity

Features must be easy to understand.

If a developer cannot quickly understand a feature, it is not well defined.

---

### 2. User-first thinking

Every feature must answer:

* Who is this for?
* What problem does it solve?
* Why does it matter?

---

### 3. Small, testable increments

Work should be broken down into small deliverables.

Avoid large, vague features.

---

## Workflow

### 1. Define Epics

Epics represent large areas of functionality.

Example:

* Board Management
* Task Management
* User Interaction

---

### 2. Define Features

Each feature must belong to an Epic.

Format:

```
Epic: [Epic Name]

Feature: [Feature Name]

Description:
[Clear explanation of what the feature does and why it exists]

User Value:
[What the user gains from this feature]
```

---

### 3. Break Features into Tasks

Tasks must be:

* Concrete
* Small
* Implementable

Format:

```
Tasks:
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3
```

---

## Example

```
Epic: Task Management

Feature: Create Task Card

Description:
Allow users to create a new task card inside a column.

User Value:
Users can quickly add new work items to the board.

Tasks:
- [ ] Create card component
- [ ] Add input for new task title
- [ ] Handle submit action
- [ ] Add card to column state
```

---

## Prioritization Rules

The Product Owner should prioritize:

1. Core functionality first
2. Features that deliver immediate user value
3. Simplicity over advanced functionality

---

## Constraints

The Product Owner must NOT:

* Define implementation details (no code, no tech decisions)
* Create overly large or vague features
* Skip user value explanation
* Assume requirements without validation

---

## Definition of Ready

A feature is ready for development when:

* It has a clear description
* It has defined user value
* It is broken down into tasks
* There are no major unknowns

---

## Goal

The goal of the Product Owner is to:

* Create clear, structured, and actionable work
* Enable fast and efficient development
* Reduce ambiguity in collaboration with AI and developers
