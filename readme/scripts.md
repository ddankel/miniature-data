# Development Scripts

## `new` - Create New Draft

```sh
yarn new

# Examples:
yarn new single-miniuature
yarn new first-mini second-mini-third-mini
```

Creates a new folder and markdown file, named correctly, in `/mini_drafts`, with the `slug` frontmatter value pre-populated.

---

## `validate` - Frontmatter Validation

```sh
yarn validate
```

This script reads the frontmatter schema from `scripts/utils/frontmatterSchema.js` and checks each mini `.md` file for missing, disallowed, or deprecated formats and values. Any errors are reported in detail for easy fixing.

---

## `listfm` - Frontmatter Aggregation

```sh
yarn listfm
```

This script parses all of the mini `.md` pages and aggregates all current values for the frontmatter keys. This allows a quick review of current listed options as well as copying those lists into the frontmatter schema to change the allowlists if desired.

---

## `status` - List Miniature Statuses

```sh
yarn status
```

List all miniature and display their status both for the minidb and gallery sites.

```sh
# Example output:
Wizards of the Coast > Dreamblade
   knight-of-autumn.....................   gallery: live     minidb: live

Wizards of the Coast > Vintage
   elf-ranger...........................   gallery: live     minidb: live
   half-orc-assassin....................   gallery: live     minidb: live
```

---

## `todo` - Display Miniature Todo list

```sh
yarn todo
```

As `yarn list` but only displays miniatures that have a status of `draft` or `todo`
