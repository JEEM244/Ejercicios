# Development roadmap

CodeVault is developed in stages. Each phase should become useful before the scope expands.

| Phase | Scope | Status |
|---|---|---|
| 0. Specification | Goal, scope, and conventions | Complete |
| 1. Repository foundation | Structure, master documents, and bilingual templates | Complete |
| 2. Fundamentals | Logic, algorithms, data structures, and problem solving | Preparing |
| 3. Technical libraries | Guides and references for the 11 languages | In progress: HTML, CSS, and beginner-intermediate JavaScript |
| 4. Practice | Exercises, challenges, debugging, and assessments | In progress: HTML-001 through HTML-010, CSS-001 through CSS-012, and JS-001 through JS-024 |
| 5. Projects | Integrated projects by difficulty | In progress: CSS-012 capstone project |
| 6. CLI | Optional Python utility | Planned |
| 7. Validation | Review links, examples, versions, and language consistency | Planned |

## HTML status

The first HTML path covers fundamentals and intermediate topics. It includes a guide, quick reference, ten exercises, and a capstone project. Structure and path checks are complete; browser testing and automated validation remain pending.

## CSS status

The initial CSS path covers beginner and intermediate topics: selectors, cascade, specificity, inheritance, box model, units, typography, positioning, Flexbox, Grid, responsive design, variables, transitions, and animations.

It contains two guides, two quick references, eleven guided practices, and the CSS-012 capstone project, with starter files and separate solutions. Practical browser and validator review remains before this unit can be considered closed.

## JavaScript status

JavaScript now has four study paths:

1. **Fundamentals:** execution, statements, variables, types, conversions, operators, conditionals, loops, and functions. Includes a guide, quick reference, and exercises JS-001 to JS-006.
2. **Data structures and debugging:** arrays, methods, strings, objects, destructuring, scope, and debugging. Includes a guide, quick reference, and exercises JS-007 to JS-012.
3. **DOM and events:** selectors, content updates, classes, attributes, node creation, events, forms, FormData, and browser validation. Includes a guide, quick reference, and exercises JS-013 to JS-018.
4. **Modules and asynchronous programming:** import/export, JSON, promises, async/await, Promise.all, and the Fetch API. Includes a guide, quick reference, and exercises JS-019 to JS-024.

All twenty-four exercises have bilingual prompts, starter files, and separate solutions. JS-001 to JS-012 and JS-021 to JS-023 can run with Node.js. Exercises using the DOM, browser modules, or Fetch require a browser; JS-019, JS-020, and JS-024 must be opened through a local HTTP server. No frameworks or external packages are required. Practical browser review of the module and Fetch pages, plus tests with different inputs, remains pending.

## Work order

1. Stabilize the specification and structure.
2. Build shared fundamentals.
3. Develop languages in small, connected units.
4. Create exercises with test cases.
5. Combine skills in projects.
6. Design the CLI around actual needs.
7. Review and maintain the content.

## Completion criteria

A phase is not complete merely because folders exist. It must contain useful material, working links, and a review appropriate to its scope.

## Scope rule

Do not add modules just to make the repository larger. Every folder or tool must solve a concrete need.
