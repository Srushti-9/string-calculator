// __tests__/StringCalculator.test.ts

import { StringCalculator } from '../src/StringCalculator';

test('should return 0 for an empty string', () => {
  const calculator = new StringCalculator();
  expect(calculator.add('')).toBe(0);
});
