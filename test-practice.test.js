import {describe, expect, test} from '@jest/globals';
import {capitalize, reverseString, calculator} from './test-practice';

test('capitalize', () => {
    expect(capitalize('string')).toBe('String');
})

test('reverse', () => {
    expect(reverseString('reverse')).toBe('esrever');
})

test('calculator add', () => {
    expect(calculator.add(2, 5)).toBe(7);
})

test('calculator subtract', () => {
    expect(calculator.subtract(7,2)).toBe(5);
})

test('calculator divide', () => {
    expect(calculator.divide(10, 4)).toBe(2.5);
})

test('calculator multiply', () => {
    expect(calculator.multiply(24, 12)).toBe(288);
})