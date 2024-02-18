import { position2dArray } from '../position2dArray';
import { describe, expect, test } from "vitest";

describe('position2dArray', () => {
    test('should return position in array with expected value', () => {
        const array = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        expect(position2dArray(array, 5)).toEqual([1, 1]);
        expect(position2dArray(array, 1)).toEqual([0, 0]);
        expect(position2dArray(array, 9)).toEqual([2, 2]);
        expect(position2dArray(array, 10)).toEqual(null);
    })
})
