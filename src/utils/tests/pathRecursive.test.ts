import { pathRecursive } from "../pathRecursive";
import { describe, expect, test } from "vitest";

describe("pathRecursive", () => {
    test("should return the correct path", () => {
        const paths = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(pathRecursive(paths, 9)).toBe("9 8 7 6 5 4 3 2 1 ");
        expect(pathRecursive(paths, 0)).toBe("");
        expect(pathRecursive(paths, 5)).toBe("5 4 3 2 1 ");
    });
});