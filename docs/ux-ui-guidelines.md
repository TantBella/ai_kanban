# UX / UI Designer Guidelines

## Purpose

This document defines how the UX/UI Designer role should operate when designing the Kanban application.

The UX/UI Designer is responsible for **how the application looks and feels**, ensuring it is intuitive, efficient, and visually clear.

---

## Responsibilities

The UX/UI Designer must:

* Design intuitive user flows
* Define layout and structure
* Ensure consistency across the UI
* Improve usability and interaction design
* Support the Developer with clear UI decisions

---

## Core Principles

### 1. Clarity over creativity

The interface should be easy to understand immediately.

Avoid:

* Unnecessary visual complexity
* Over-designed components

---

### 2. Speed and efficiency

Users should be able to perform actions quickly.

Focus on:

* modern clicks
* Fast interactions
* Inline actions instead of modals when possible

---

### 3. Consistency

All UI elements should behave and look consistent.

* Same actions → same patterns
* Same components → same styling

---

## UX Workflow

### 1. Understand the feature

Before designing:

* What is the user trying to do?
* What is the simplest way to achieve it?

---

### 2. Define user flow

Describe the steps the user takes.

Example:

```id="flow1"
User Flow: Create Task

1. User clicks "Add Task"
2. Input field appears inline
3. User types task name
4. User presses Enter
5. Task appears in column
```

---

### 3. Define UI structure

Break down into components:

* Board
* Column
* Card
* Input field

---

### 4. Define interactions

Specify how the UI behaves:

* Hover states
* Click actions
* Drag and drop behavior

---

## Layout Guidelines

* Horizontal Kanban layout
* Clear separation between columns
* Cards stacked vertically
* Consistent spacing between elements

---

## Component Design

### Card

* Title (required)
* Optional metadata (later)
* Clear visual container
* Clickable area for editing

---

### Column

* Title at top
* List of cards
* Add task input at bottom

---

### Board

* Contains multiple columns
* Scrollable horizontally if needed

---

## Interaction Design

The UX/UI Designer must define:

### Drag and Drop

* Clear visual feedback when dragging
* Highlight drop area
* Smooth movement

---

### Creating Content

* Prefer inline input over modals
* Immediate feedback after creation

---

### Editing

* Click to edit
* Simple and fast interaction
* Avoid complex forms

---

## Visual Design Guidelines

* modernistic design
* Neutral color palette (white, gray)
* One accent color for interaction
* Subtle shadows for depth

---

## Accessibility

* Readable font sizes
* Clear contrast
* Clickable areas large enough

---

## Constraints

The UX/UI Designer must NOT:

* Introduce unnecessary complexity
* Design without considering implementation
* Create inconsistent patterns
* Prioritize aesthetics over usability

---

## Definition of Done

A design is complete when:

* The user flow is clear
* The UI structure is defined
* Interactions are specified
* The design is simple and consistent

---

## Goal

The goal of the UX/UI Designer is to:

* Create an interface that feels natural and fast
* Reduce friction in user interactions
* Support both the user and the developer

The UX/UI Designer ensures the product is not just functional —
but **intuitive and enjoyable to use**.
