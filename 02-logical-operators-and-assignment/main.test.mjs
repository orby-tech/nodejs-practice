import assert from "assert";

describe("logical and assignment", () => {
  describe("&&=", () => {
    it("should assign the right value", () => {
      let a = 1;
      a &&= 2;
      assert.strictEqual(a, 2); // changed because both sides are truthy
    });

    it("should not assign the right value", () => {
      let a = 0;
      a &&= 2;
      assert.strictEqual(a, 0); // not changed because the left side is falsy
    });
  });

  describe("||=", () => {
    it("should assign the right value", () => {
      let a = 1;
      a ||= 2;
      assert.strictEqual(a, 1); // not changed because the left side is truthy
    });

    it("should not assign the right value", () => {
      let a = 0;
      a ||= 2;
      assert.strictEqual(a, 2); // changed because the left side is falsy
    });
  });

  describe("??=", () => {
    it("should assign the right value", () => {
      let a = 1;
      a ??= 2;
      assert.strictEqual(a, 1); // not changed because the left side is not nullish
    });

    it("should assign the right value", () => {
      let a = 0;
      a ??= 2;
      assert.strictEqual(a, 0); // not changed because the left side is not nullish
    });

    it("should not assign the right value", () => {
      let a = null;
      a ??= 2;
      assert.strictEqual(a, 2); // changed because the left side is nullish
    });

    it("should not assign the right value", () => {
      let a = undefined;
      a ??= 2;
      assert.strictEqual(a, 2); // changed because the left side is nullish
    });
  });
});
