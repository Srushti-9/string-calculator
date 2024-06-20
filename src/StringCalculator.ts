// src/StringCalculator.ts

export class StringCalculator {
    add(numbers: string): number {
      if (numbers === '') {
        return 0;
      }
      //Handle New Lines Between Numbers
      const numberArray = numbers.split(/[\n,]/).map(Number);
      return numberArray.reduce((sum, num) => sum + num, 0); 
    }

  }
  