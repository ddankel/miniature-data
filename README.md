# Miniature Data

The entire miniature collection data source in markdown + frontmatter to use as a gatsby data source. This project has two main components - the miniature database itself (markdown and images) and a collection of development scripts to aid in working with the database (see below). This repository is designed to be used as a submodule within the parent gatsby project repo.

> A submodule?! Really?!

Yes, really! Much of the criticisms around submodules are mitigated in this specific use. With just a single developer and a git ui that handles submodule integration easily there's no worry about the submodule desyncing commits or mis-handling updates to the submodule repo.

A npm package would also serve this purpose but a submodule can be edited and updated from within each parent gatsby site and the output can immediately be tested and debugged without having publish a package update for each change.

## Development Scripts

This data was originally used to power a [Jekyll](https://jekyllrb.com/)-powered site. Since [Gatsby](https://www.gatsbyjs.com/)'s frontmatter requirements were more strict a few development scripts were created to aid in validation and aggregation. Further scripts were later added to check statuses and find items marked as 'todo'. See [readme/scripts.md](./readme/scripts.md) for complete documentation.

```json
"scripts": {
  "new": "node ./scripts/actions/newMini",
  "listfm": "node ./scripts/actions/listAttributes",
  "validate": "node ./scripts/actions/validateFrontmatter",
  "status": "node ./scripts/actions/status",
  "todo": "node ./scripts/actions/todo"
}
```

## Integration

The following integration steps assume the submodule is initialized at `/vendor/miniature-data`. This is the recommended practice.

### 1. Add Data Source

Exports are available for the ignore lists for both the minidb and gallery web sites. Using these instead of manually defining the exclusions means `gatsby-config.js` won't have to be changed if the data source layout changes at a later date.

```js
// gatsby-config.js
const exclusions = require("./vendor/miniature-data/exclusions");

module.exports = {
  // ...
  plugins: [
    // ...

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "minis", // Or change as needed
        path: "./vendor/miniature-data/minis",
        ignore: [...exclusions],
      },
    },

    // ...
  ],
};
```

### 2. Implement Scripts

The following definitions can be used to create scripts on the base project that reference those here in the submodule.

```json
// package.json
"scripts": {
  ...
  "mini:new": "npm run mini:new --prefix ./vendor/miniature-data",
  "mini:status": "npm run mini:status --prefix ./vendor/miniature-data",
  "mini:todo": "npm run mini:todo --prefix ./vendor/miniature-data",
  "frontmatter:list": "npm run frontmatter:list --prefix ./vendor/miniature-data",
  "frontmatter:validate": "npm run frontmatter:validate --prefix ./vendor/miniature-data"
},

// Yarn equivalent:
// yarn --cwd path/to/your/other/folder [command]
```

### 3. Add Dependencies

Add the submodule as a dev dependency so yarn/npm will pull its dependencies.

```json
// package.json
{
  ...
  "devDependencies": {
    "miniature-data": "./vendor/miniature-data"
  }
}
```
