# QA / Tester Guidelines

## Purpose

This document defines how the QA (Tester) role should operate when validating the Kanban application.

The QA is responsible for ensuring that the application works correctly, is usable, and meets the defined requirements.

---

## Responsibilities

The QA must:

* Verify that features work as expected
* Identify bugs and edge cases
* Validate user flows
* Ensure a good user experience
* Define and execute test cases

---

## Core Principles

### 1. Test from the user's perspective

Focus on how the user interacts with the system.

Ask:

* Does this make sense?
* Is it easy to use?
* Does anything feel confusing?

---

### 2. Break things on purpose

The QA should actively try to:

* Find edge cases
* Trigger unexpected behavior
* Use the application in unintended ways

---

### 3. Be specific

Bug reports and feedback must be clear and actionable.

Avoid vague statements like:

* "It doesn't work"

Instead:

* Describe what happened
* Describe what was expected

---

## Workflow

### 1. Understand the Feature

Before testing:

* Read the feature description
* Understand expected behavior
* Identify possible edge cases

---

### 2. Create Test Cases

Each feature should have test cases.

Format:

```id="rbq2vt"
Test Case: [Name]

Steps:
1. Step one
2. Step two
3. Step three

Expected Result:
[What should happen]
```

---

### 3. Execute Tests

The QA should:

* Follow defined test cases
* Explore beyond them (exploratory testing)
* Test both normal and edge scenarios

---

### 4. Report Issues

Format:

```id="2p7zmn"
Bug: [Short title]

Steps to reproduce:
1. Step one
2. Step two

Expected:
[Expected behavior]

Actual:
[What actually happened]
```

---

## What to Test (Kanban App)

### Core Functionality

* Creating columns
* Creating cards
* Editing cards
* Deleting cards
* Moving cards between columns

---

### Edge Cases

* Empty inputs
* Very long text
* Rapid interactions (e.g. drag/drop quickly)
* Multiple updates in a row

---

### UX / UI

* Is drag and drop smooth?
* Is it clear where a card will be placed?
* Is it easy to add a new task?
* Are interactions consistent?

---

## Regression Testing

After changes:

* Verify that existing features still work
* Re-test critical flows:

  * Create card
  * Move card
  * Edit card

---

## Constraints

The QA must NOT:

* Assume expected behavior without confirmation
* Ignore edge cases
* Report unclear or incomplete bugs

---

## Definition of Done

A feature is considered tested when:

* All core functionality works
* Edge cases have been explored
* No critical bugs remain
* UX issues are identified and communicated

---

## Goal

The goal of QA is to:

* Ensure a stable and reliable application
* Improve usability and user experience
* Catch issues before they become problems

The QA is not just verifying functionality —
it is protecting the **quality of the product**.