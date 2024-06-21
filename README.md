# string-calculator

# String Calculator TDD

This project implements a String Calculator using Test-Driven Development (TDD) principles. The String Calculator can handle various input formats and supports additional functionalities such as handling new lines between numbers and supporting different delimiters.

## Getting Started

To get started with the String Calculator, follow these steps:

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Srushti-9/string-calculator.git
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Running Tests
   ```bash
   npm run test
   ```

### Functionality

The String Calculator supports the following functionalities:

- Addition of numbers provided as a string of comma-separated values.
- Handling new lines between numbers ("1\n2,3" should return 6).
- Supporting different delimiters using a custom delimiter definition at the beginning of the string ("//[delimiter]\n[numbers…]").
