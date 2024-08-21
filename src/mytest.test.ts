import assert from "node:assert/strict";
import { describe, it } from "node:test";

describe("A", () => {
  describe("A.1", () => {
    it("works", async () => {
      assert.equal(1, 1);
    });

    it("breaks the tree", async () => {
      const plop = `Hello ${{ type: "extra" } as const} World`;
      assert.equal(1, 1);
    });
  });

  describe("A.2", () => {
    it("doesn't match the result in tree", async () => {
      assert.equal(1, 1);
    });
  });
});
