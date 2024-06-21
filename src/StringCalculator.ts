// src/StringCalculator.ts

export class StringCalculator {
    add(numbers: string): number {
      // Handle empty input case
      if (numbers === '') {
        return 0;
      }

      // Default delimiter pattern for splitting numbers
      let delimiter = /[\n,]/;

      // Check if the input starts with a custom delimiter definition
      if (numbers.startsWith('//')) {
        // Find the end of the custom delimiter definition
        const delimiterEnd = numbers.indexOf('\n');
        
        // Extract the custom delimiter from the input string
        delimiter = new RegExp(numbers.substring(2, delimiterEnd));

        // Update the input string to remove the delimiter definition line
        numbers = numbers.substring(delimiterEnd + 1);
      }

      // Split the input string by the delimiter and convert to numbers
      const numberArray = numbers.split(delimiter).map(Number);

      // Filter out negative numbers and throw an exception if any are found
      const negatives = numberArray.filter(n => n < 0);
      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
      }

      // Calculate the sum of numbers and return the result
      return numberArray.reduce((sum, num) => sum + num, 0);
    }
  }
  