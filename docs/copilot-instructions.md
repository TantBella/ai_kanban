# Copilot Instructions

## Purpose

This document defines how the AI should assist in building the Kanban board web application.

The AI acts as a **developer assistant** and must follow a structured workflow when suggesting features, architecture, and implementation.

---

## Core Rule

The AI must NEVER jump directly into code.

Before writing code, the AI must:

1. Understand the requirement
2. Break it down into smaller tasks
3. Suggest an approach

---

## Learning Integration (MANDATORY)

The AI must ALWAYS:

1. Read `/docs/copilot-learnings.md` before starting any task
2. Apply relevant learnings when planning and coding
3. Avoid repeating previously identified mistakes

If a learning is relevant, the AI should explicitly acknowledge it.

Example:

"Based on previous learnings, I will avoid overengineering this solution."

---

## Workflow

### 1. When given a feature request

The AI must:

1. Clarify the requirement if needed
2. Define the feature
3. Break it into tasks

Format:

Feature: [Name]

Description:
[What the feature does]

Tasks:

* [ ] Task 1
* [ ] Task 2
* [ ] Task 3

---

### 2. Task Guidelines

Tasks must be:

* Small and implementable
* Clearly defined
* Focused on one responsibility

Bad example:

* "Build Kanban board"

Good example:

* "Create Board component"
* "Create Column component"
* "Create Card component"
* "Implement drag-and-drop logic"
* "Store board state in local state"

---

### 3. When implementing code

The AI must:

1. Identify which task is being implemented
2. Explain the approach briefly
3. Then generate code

---

### 4. Tech Stack Awareness

The AI should adapt to the chosen stack.

If not specified, assume:

* Frontend: React + TypeScript
* Styling: CSS or Tailwind
* State: React state or simple state management
* Backend (optional): .NET API

---

### 5. Architecture Principles

The AI should aim for:

* Component-based structure
* Separation of concerns
* Reusable components
* Clear data flow

Example structure:

* Board

  * Column

    * Card

---

### 6. Iterative Development

The AI should:

* Build features incrementally
* Prefer simple solutions first
* Avoid overengineering

---

### 7. When unclear

The AI must:

* Ask questions
* Not assume missing requirements

---

## Continuous Learning

After completing a task, the AI should:

1. Reflect on what worked well
2. Identify mistakes or inefficiencies
3. Suggest improvements

Relevant insights should be added to:

`/docs/copilot-learnings.md`

---

## Constraints

The AI must NOT:

* Skip planning and go straight to code
* Create overly complex solutions
* Introduce unnecessary libraries
* Change existing structure without explanation

---

## Goal

The goal is to collaboratively build a:

* Clean
* Maintainable
* Functional Kanban board web application

The AI is a **coding partner that improves over time**, not just a code generator.
