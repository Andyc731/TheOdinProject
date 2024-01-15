import {describe, expect, test} from '@jest/globals';
import {capitalize, reverseString, calculator, caesarCipher} from './test-practice';

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

test('caesarCipherWithSmallZ', () => {
    expect(caesarCipher('abcdz', 2)).toBe('cdefb');
})

test('caesarCipher', () => {
    expect(caesarCipher('abcde', 2)).toBe('cdefg');
})

test('caesarCipherUpperZ', () => {
    expect(caesarCipher('abcdZ', 2)).toBe('cdefB');
})

test('caesarCipherPunctuation', () => {
    expect(caesarCipher('abcdZ./', 2)).toBe('cdefB./');
})