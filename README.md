# Miniature Data

The entire miniature collection data source in markdown + frontmatter to use as a gatsby data source. This project has two main components - the miniature database itself (markdown and images) and a collection of development scripts to aid in working with the database (see below). This repository is designed to be used as a submodule within the parent gatsby project repo.

> A submodule?! Really?!

Yes, really! Much of the criticisms around submodules are mitigated in this specific use. With just a single developer and a git ui that handles submodule integration easily there's no worry about the submodule desyncing commits or mis-handling updates to the submodule repo.

A npm package would also serve this purpose but a submodule can be edited and updated from within each parent gatsby site and the output can immediately be tested and debugged without having publish a package update for each change.

## Development Scripts

A collection of development scripts are available to view and display miniature data.

```json
"scripts": {
  "new": "node ./scripts/actions/newMini",
  "listfm": "node ./scripts/actions/listAttributes",
  "validate": "node ./scripts/actions/validateFrontmatter",
  "status": "node ./scripts/actions/status",
  "todo": "node ./scripts/actions/todo"
}
```

See [readme/scripts.md](./readme/scripts.md) for complete documentation.
