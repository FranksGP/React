import { describe, expect, test } from 'vitest';
import { add, subtract, multiply} from './math.helpers';

describe('add', () => {
    test('should add two numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a,b);

        // ! 3. Assert 
        expect(result).toBe(a + b);

    }); 
    test('should subtract two numbers', () => {
        // ! 1. Arrange
        const a = 5;
        const b = 6;

        // ! 2. Act
        const result = subtract(a,b);

        // ! 3. Assert 
        expect(result).toBe(a - b);
    }); 
     test('should multiply two numbers', () => {
        // ! 1. Arrange
        const a = 4;
        const b = 4;

        // ! 2. Act
        const result = multiply(a,b);

        // ! 3. Assert 
        expect(result).toBe(a * b);

          // if (result !== 2){
        //     throw new Error("El resultado no es 2");
        // }
    }); 
});
