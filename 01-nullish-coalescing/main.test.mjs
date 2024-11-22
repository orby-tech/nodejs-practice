import assert from "assert";

const falsyValues = [false, 0, "", null, undefined, NaN];

describe("nullish coalescing operator", () => {
  describe("|| falsy replace", () => {
    falsyValues.forEach((value) => {
      it(`should return default value for ${value}`, () => {
        assert.strictEqual(value || "default", "default");
      });
    });
  });

  const nullishValues = [null, undefined];

  describe("?? nullish replace", () => {
    nullishValues.forEach((value) => {
      it(`should return default value for ${value}`, () => {
        assert.strictEqual(value ?? "default", "default");
      });
    });
  });

  describe("?? do not replace", () => {
    falsyValues
      .filter((x) => !nullishValues.includes(x))
      .forEach((value) => {
        it(`should return ${value} for ${value}`, () => {
          assert.strictEqual(value ?? "default", value);
        });
      });
  });
});
