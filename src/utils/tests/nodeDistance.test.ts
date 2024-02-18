import { nodeDistance } from "../nodeDistance";
import { describe, expect, test } from "vitest";

describe("getCircleDistance", () => {
    test("should return the correct distance", () => {
        expect(nodeDistance([0, 0], [3, 4])).toBe(5);
        expect(nodeDistance([8, 6], [0, 0])).toBe(10);
        expect(nodeDistance([0, 0], [0, 0])).toBe(0);
    });
});
