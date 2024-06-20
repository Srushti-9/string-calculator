// src/StringCalculator.ts

export class StringCalculator {
    add(numbers: string): number {
      if (numbers === '') {
        return 0;
      }

      //handle to support different delimiters
      let delimiter = /[\n,]/;
      if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.substring(2, delimiterEnd));
        numbers = numbers.substring(delimiterEnd + 1);
      }

      const numberArray = numbers.split(delimiter).map(Number);
      return numberArray.reduce((sum, num) => sum + num, 0);
    }

  }
  