const addFn = require("../src/add.js");

describe("addFn", () => {
  test("1 add 1 should equal 2", () => {
    expect(addFn(1, 1)).toBe(2);
  });
});
