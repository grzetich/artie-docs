---
id: get-started
title: Get started
description: Install artie, run your first check, and read the report.
---

# Get started

artie reads API documentation the way an AI agent would and reports how well the documentation supports code generation. Check an OpenAPI spec or a docs page, and it returns a score from 0 to 10 for each of nine categories, with findings of what it measured and recommendations for what to change. artie measures and reports, it never modifies your documentation.

## Run using uvx without installing

artie needs Python 3.10 or later. To run it once without installing anything, use `uvx`.

```bash
uvx --from artie-clie artie check TARGET
```

Replace `TARGET` with the path to a local file or an HTTP or HTTPS URL.

For more information about `uvx` for your operating system, see https://pypi.org/project/uvx/

## Install

artie needs Python 3.10 or later. To install it as a command you can run any time, use `pipx`. 

```bash
pipx install artie-cli
```

For more information about `pipx` for your operating system, see https://pipx.pypa.io/stable/

## Check a target and generate a report

artie accepts a local file or an HTTP or HTTPS URL as the value of `check`.

```bash title="Local file target"
artie check ./openapi.yaml
```

```bash title="HTTP target"
artie check https://api.example.com/openapi.yaml
```

```bash title="HTTPS target"
artie check https://docs.example.com/getting-started
```

artie reads OpenAPI in YAML or JSON, plain YAML and JSON, Markdown, and HTML. When a Markdown page contains an OpenAPI spec in a code block, artie finds the spec and runs the API checks against it. For more on checking pages by URL, see [Checking docs sites and URLs](#checking-docs-sites-and-urls) below.

The artie repository includes three example specs you can try. `bookclub-openapi.yaml` is well documented, and `broken-openapi.yaml` is missing most of what an agent needs:

```bash
artie check examples/broken-openapi.yaml
```

## Read the report

The report opens with a summary table: one row per check, with a score and a severity label (excellent, needs work, or poor). A check that doesn't apply to your input shows N/A and the label `not evaluable`. For example, Prose Structure applies to prose pages, so it shows N/A for an OpenAPI spec, and the API checks show N/A for a page with no spec in it.

Below the table, each check has its own panel. In each panel, **Findings** list what artie counted, such as `0 of 4 endpoints have an operationId` and **Recommendations** presents what to change where it was found, so you can go straight to the part of the docs that need work. For what each check measures and why, see the static checks reference<!-- [static checks reference](static-checks.md) -->.

## Check docs sites and URLs

When artie fetches a URL, it sends an `Accept` header that asks for structured formats first. Some docs sites answer with a different format than the URL suggests, such as Markdown instead of HTML, and the report notes when that happens.

Use `--timeout` to change how long artie waits for a response. The default is 20 seconds.

## Use artie in a build pipeline

Two options make artie useful in a pipeline, such as a continuous integration (CI) environment or through GitHub Actions. The `--output json` parameter prints the full report as JSON for other tools to read. `--fail-under` sets a minimum score: artie exits with a non-zero code if any check that applies to the input scores below it, which fails the build.

```bash
artie check ./openapi.yaml --output json
artie check ./openapi.yaml --fail-under 7
```

Checks that show N/A never fail the build. The `--output json` parameter writes a JSON report to the current directory, named the value of the `check` parameter.

## Next steps

<!-- - [Static checks reference](static-checks.md): what each check measures and how to raise its score. -->
- [`artie-cli` on GitHub](https://github.com/grzetich/artie-cli): source code and example specs.
