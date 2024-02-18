import { includes2d } from '../includes2d';
import { describe, expect, test } from "vitest";

describe("includes2d", () => {
    test("should return true if the array includes the value", () => {
        const array = [
            {position: [1, 3], parent: null},
            {position: [1, 1], parent: null},
            {position: [0, 2], parent: null},
            {position: [2, 2], parent: null},
        ];
        const value1 = {position: [1, 3], parent: null};
        const value2 = {position: [2, 3], parent: null};
        const value3 = {position: [1, 1], parent: null};

        expect(includes2d(array, value1)).toEqual(true);
        expect(includes2d(array, value2)).toEqual(false);
        expect(includes2d(array, value3)).toEqual(true);
    })
});