# artie documentation site: reviewer guide

## What this is

A documentation site for artie-cli, an open-source command-line tool I built and published to PyPI. The tool measures how well API documentation supports AI code generation. All content, configuration, and pipeline work is mine, drafted with AI assistance. There are no other contributors.

## Where to look

**Live site:** https://grzetich.github.io/artie-docs/

**Pull requests:** https://github.com/grzetich/artie-docs/pulls?q=is%3Apr+is%3Aclosed. Each PR adds one unit of work and explains the decisions behind it.

- **Scaffold Docusaurus site and GitHub pages and deploy:** the pipeline, and four problems I encountered setting up the site.
- **Get started:** Adding the _Get started_ page.
- **readme:** Adding this file.

## How the pipeline works

Every pull request runs three checks. The Docusaurus build fails on any broken link. Vale checks the prose against a house style that includes rules for common AI-generated phrasing. artie checks every page listed in the sitemap within the GitHub actions runner and the report appears in the job summary on each run. Merging to main rebuilds and deploys the site automatically.

## What I'm working on

- API reference pages for the hosted Artie API, generated from its OpenAPI spec and checked by artie in the same pipeline. 
- An `llms.txt` file and Markdown copies of each page for AI agents. artie currently scores the HTML pages 1 out of 10 on Format Efficiency because most of each page is markup, and Markdown copies address that directly.
- Page about the report, showing an example of the report in Markdown and JSON and detailed information about how the tool produces it.
- Page about the generate code functionality. 
