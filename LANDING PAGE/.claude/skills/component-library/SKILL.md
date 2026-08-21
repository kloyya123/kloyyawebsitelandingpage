---
name: component-library
description: Use when looking for UI components, exploring component inspiration, or adding new libraries to the registry. Invoke with /components.
---

# Component Library Registry

Search, browse, and maintain the catalog of external UI component libraries stored in `.claude/references/component-libraries.md`.

## Modes

### search [keyword]

Find components matching a keyword or tag across all libraries.

1. Read `.claude/references/component-libraries.md`
2. Search component names, descriptions, and tags for matches
3. Present results grouped by library with links

**Output:** List matching components with their description and tags, grouped by library.

### browse [library|category]

List components by library name or category.

1. Read `.claude/references/component-libraries.md`
2. If argument matches a **library name** (e.g., `spell-ui`): show library metadata + full component table
3. If argument matches a **category** from the Category Index (e.g., `button`, `text-animation`): show all components in that category across libraries
4. If **no argument**: show summary of all libraries with component counts and list all categories

### add [url]

Fetch a new repository and catalog its components.

1. Visit the GitHub URL and any docs site
2. Identify: library name, stack, license, description, install method
3. Catalog each component with: name, one-line description, category tags
4. **Reuse existing tags and categories** from the registry before creating new ones
5. Append a new library section using the template at the bottom of the registry file
6. Update the Category Index table at the top with new entries
7. Report what was added

### info [component]

Show details about a specific component.

1. Read `.claude/references/component-libraries.md`
2. Find by name (supports bare `blur-reveal` or namespaced `spell-ui:blur-reveal`)
3. Show: library, description, tags, docs URL, and any implementation notes
4. Offer to open docs for more detail

## When to Use

- Building a new feature and need UI inspiration
- Looking for a specific type of component (animation, input, effect)
- Adding a newly discovered component library to the catalog
- Checking if a component has implementation notes for this project
