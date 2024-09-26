# Athlete Data Processor

The **Athlete Data Processor** is a TypeScript-based library designed to process activity data from professional athletes' sports computers. The library consolidates data from multiple sources, including activity summaries, laps, and heart rate samples, and outputs a unified JSON file for analysis by a science team.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Running Tests](#running-tests)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Key Sections](#key-sections)

## Overview

This library is used to process three types of input data:
1. **Activity Summary**: Basic activity details, such as type, average values, etc.
2. **Laps**: Detailed descriptions of each lap, including time, distance, and duration.
3. **Samples**: Heart rate and other sensor data recorded during the activity.

The library outputs a unified JSON structure that includes:
- Activity Overview (e.g., userId, activity type, max heart rate)
- Lap Data (start time, distance, duration)
- Heart Rate Samples (indexed by sample, per lap)

### Bonus Features
- Pre-processing of heart rate data, including outlier detection and cleaning.
- Reverse aggregation and modeling for heart rate prediction.

## Project Structure

```
athlete-data-processor/ 
├── src/ 
│ ├── models/ 
│ │ ├── activitySummary.ts 
│ │ ├── lap.ts 
│ │ └── sample.ts 
│ ├── processors/ 
│ │ ├── athleteDataProcessor.ts 
│ │ ├── heartRateProcessor.ts 
│ │ └── heartRatePredictor.ts 
├── tests/ 
│ ├── unit/ 
│ │ ├── athleteDataProcessor.test.ts 
│ │ ├── heartRateProcessor.test.ts 
│ │ └── heartRatePredictor.test.ts 
│ ├── integration/ 
│ │ └── integration.test.ts 
├── package.json 
├── tsconfig.json 
├── jest.config.js 
└── README.md
```

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/athlete-data-processor.git
    cd athlete-data-processor
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Build the project:
    ```bash
    npm run build
    ```

## Running the Project

To use the **Athlete Data Processor**, follow these steps:

1. Import the relevant processors and pass the activity data to the library:
    ```ts
    import { AthleteDataProcessor } from './src/processors/athleteDataProcessor';

    const summary = { /* your activity summary data */ };
    const laps = [ /* your laps data */ ];
    const samples = [ /* your samples data */ ];

    const processor = new AthleteDataProcessor(summary, laps, samples);
    const output = processor.process();

    console.log(JSON.stringify(output, null, 2));
    ```

2. Run the above TypeScript code using `ts-node` or after compiling to JavaScript.

## Running Tests

To ensure that everything is functioning correctly, you can run the test suite, which includes both unit and integration tests:

1. **Run all tests**:
    ```bash
    npm run test
    ```

2. **Check test coverage**:
    ```bash
    npm run test:coverage
    ```

### Linting

To run the linter, use:

```bash
npm run lint
```

## Features

Consolidates athlete data (activity summaries, laps, samples) into a unified JSON structure.
Pre-processes heart rate data, including outlier detection and interpolation.
Predicts future heart rate values using a custom model.
## Bonus Features
Reverse aggregation of heart rate data.
Heart rate prediction using median aggregation over time.

## Contributing
We welcome contributions! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.
Please make sure to add tests for any new features or changes!

## License
This project is licensed under the MIT License - see the [MIT License](./LICENSE). file for details.

### Key Sections:

- **Overview**: High-level information about the project and what it does.
- **Project Structure**: The folder and file structure, so users can easily navigate the project.
- **Installation**: Steps to set up the project locally.
- **Running the Project**: How to use the library.
- **Running Tests**: Instructions for testing and linting.
- **Features**: A list of features and bonus functionality.
- **Contributing**: Guidelines for contributing to the project.
- **License**: The license for the project.
