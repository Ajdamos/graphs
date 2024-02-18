import { NodeM } from "../../types/Maze";
import { lowestFCost } from "../lowestFCost";
import { describe, expect, test } from "vitest";

describe("lowestFCost", () => {
    test("should return the node with the lowest f cost", () => {
        const array1: NodeM[] = [
            {position: [1, 3], parent: null},
            {position: [1, 1], parent: null},
            {position: [0, 2], parent: null},
            {position: [2, 2], parent: null},
        ];
        const array2: NodeM[] =[
            {position: [0, 0], parent: null},
            {position: [0, 1], parent: null},
            {position: [1, 0], parent: null},
            {position: [1, 1], parent: null},
        ];
        const array3: NodeM[] = [
            {position: [2, 3], parent: null},
            {position: [5, 6], parent: null},
            {position: [8, 9], parent: null},
            {position: [1, 1], parent: null},
        ];
        const start = [0, 0];
        const end = [4, 4];
        expect(lowestFCost(array1, start, end)).toEqual({position: [2, 2], parent: null});
        expect(lowestFCost(array2, start, end)).toEqual({position: [1, 1], parent: null});
        expect(lowestFCost(array3, start, end)).toEqual({position: [2, 3], parent: null});
    });
});