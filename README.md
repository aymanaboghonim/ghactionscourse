# GitHub Actions Course Repository

> **This repository and its examples are based on the YouTube course [GitHub Actions Tutorial – What is GitHub Actions?](https://youtu.be/7gJFHjXscr8) by [Ahmed ElFakharany](https://www.linkedin.com/in/aelfakharany/).**

This repository contains example workflows and a simple Node.js application used to demonstrate various GitHub Actions concepts and features.

## Project Structure

```
.
├── .github/
│   └── workflows/
│       ├── main.yml           # Basic workflow: prints message, checks out repo, lists files (push to main)
│       ├── push-pr.yaml       # CI: runs tests on push/PR to main or release/** if src/** changes
│       ├── jobs.yml           # Job dependencies: 4 jobs, prints job names, shows needs/parallelism (manual)
│       ├── steps.yml          # Step config: runs npm commands in ./temp, prints env vars with Perl (manual)
│       ├── matrix.yml         # Matrix: runs on 3 OSes x 3 Node.js versions (manual)
│       ├── hybrid-jobs.yml    # Hybrid: runs on Ubuntu, inside Alpine container, then Ubuntu again (manual)
│       ├── scheduled.yml      # Scheduled: prints message weekly via cron
│       ├── manual.yml         # Manual: deploy step with environment input (staging/production)
│       └── manual-api.yml     # API: handles repository_dispatch event (incident_report)
├── src/
│   ├── app.js                 # Simple Node.js greeter function
│   └── test.sh                # Bash test script for the app
├── package.json               # Node.js project configuration
└── README.md                  # This file
```

## Workflow Details

- **main.yml**: On push to `main`, prints a welcome message, checks out the repository, and lists files.
- **push-pr.yaml**: On push or PR to `main`/`release/**` (if `src/**` changes), checks out code and runs `npm test`.
- **jobs.yml**: Manual trigger. Four jobs with dependencies, each prints its job name. Demonstrates job orchestration.
- **steps.yml**: Manual trigger. Runs npm install/build in `./temp` and prints environment variables using Perl. Shows step config and custom shells.
- **matrix.yml**: Manual trigger. Runs a job across a matrix of OSes (Ubuntu, Windows, macOS) and Node.js versions (14, 16, 18).
- **hybrid-jobs.yml**: Manual trigger. Runs steps on Ubuntu, then inside an Alpine Docker container, then back on Ubuntu.
- **scheduled.yml**: Runs weekly (cron). Prints a message to demonstrate scheduled workflows.
- **manual.yml**: Manual trigger with environment input (staging/production). Prints which environment is being deployed to.
- **manual-api.yml**: Triggered by `repository_dispatch` event of type `incident_report`. Prints a message to handle the event.
- **expressions.yml**: Manual trigger. Demonstrates using expressions and conditional steps (e.g., checking `github.event_name` and using `if:` for step execution).

## The Sample Application

The repository includes a simple Node.js application (`src/app.js`) that exports a greeting function. The test script (`src/test.sh`) validates the function output.

## Running Tests Locally

- Prerequisites: [Node.js](https://nodejs.org/) (v12+), Bash shell
- Run tests: `npm test` or `bash src/test.sh`

## Course Reference

This repository was created following the GitHub Actions tutorial:
- **Course**: [GitHub Actions Tutorial – What is GitHub Actions?](https://youtu.be/7gJFHjXscr8)
- **Instructor**: [Ahmed ElFakharany](https://www.linkedin.com/in/aelfakharany/)

## Contributing

Contributions that add or improve workflow examples are welcome. Please open a pull request.

## License

This repository is provided as-is for educational purposes.
