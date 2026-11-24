# CodeVault Specification

**Status:** approved initial specification  
**Repository:** `JEEM244/Ejercicios`

## 1. Purpose

CodeVault is a personal technical library for learning, practicing, looking up information, and maintaining programming skills. It should support both learning from scratch and quickly recalling syntax or resolving focused questions.

It is not a linear course, a web application, or a platform that forces users to complete lessons in order.

## 2. Principles

- Open navigation: every topic is independently accessible.
- Practical learning: runnable examples where applicable.
- Progression: fundamentals, intermediate, and advanced levels.
- Clarity: explain terms with examples and context.
- Maintainability: avoid duplication and link to primary explanations.
- Offline-first: essential material lives in the repository.
- Portability: no database or special installation required for reading.
- Git from the beginning.
- Bilingual documentation: Spanish first; English files use the `.en` suffix.

## 3. Initial languages

HTML, CSS, JavaScript, TypeScript, PHP, Python, Shell, C#, Kotlin, Lua, and SQL.

Shell distinguishes Bash and PowerShell. SQL covers common fundamentals and SQL Server/MySQL differences.

## 4. Shared areas

Fundamentals (logic, algorithms, data structures, OOP, paradigms, complexity); tools (Git, terminal, Linux, regex); technologies (databases, REST, JSON, XML); networking; practice; projects; reference; local progress; and an optional Python CLI.

## 5. Format

- Markdown for guides, indexes, and documentation.
- Native source files for code.
- Separate exercise statements, starter files, and solutions.
- No mandatory database.

## 6. Topic standard

When relevant: definition, purpose, use cases, prerequisites, syntax, commented examples, variants, common mistakes, good practices, compatibility, and practice links.

## 7. Exercise standard

Every exercise receives a unique, never-reused ID (for example `JS-001`, `PY-014`, `SQL-003`). Include language, topic, difficulty, goal, statement, requirements, constraints, inputs, expected outputs, test cases, and optional hints.

Where applicable, include an executable starter file. Store the solution separately with an explanation and useful alternatives.

Practice types: syntax recall, code completion, solving from scratch, code reading, debugging, algorithm design, language comparison, refactoring, and small projects.

## 8. Levels

- Beginner: essential concepts and small programs.
- Intermediate: combining concepts, modularity, and error handling.
- Advanced: design, performance, architecture, and interoperability.

Difficulty is indicative; advanced topics may include introductory practice.

## 9. Bilingual convention

Spanish uses the normal filename, e.g. `GUIA.md`. English uses the `.en` suffix, e.g. `GUIA.en.md`. Keep versions aligned and explicitly mark pending translations.

## 10. Execution and CLI

Run examples manually with each language's own tools. The optional Python CLI will not implement interpreters or compilers.

## 11. Safety

Networking and terminal examples are limited to owned or authorized systems. Exclude instructions for unauthorized access, credential theft, bypassing controls, malware, or harm.

## 12. Initial non-goals

Web interface, user accounts, mandatory database, universal execution, mandatory cloud sync, and automatic publishing without review.

## 13. Quality

Never claim an example was tested unless it was executed. State relevant versions and dependencies. Distinguish general concepts from platform-specific behavior. Prefer small, reproducible, commented examples. Update this specification when architecture changes.