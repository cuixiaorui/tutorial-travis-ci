const addFn = require("../src/add.js");

describe("addFn", () => {
  test("1 add 1 should equal 2", () => {
    expect(addFn(1, 1)).toBe(2);
  });

  test("1 add 1 should equal 2", () => {
    expect(addFn(1, 1)).not.toBe(3);
  });

  test("1 add 1 should equal 4", () => {
    expect(addFn(1, 1)).toBe(3);
  });
  test("1 add 1 should equal 5", () => {
    expect(addFn(1, 1)).toBe(5);
  });
  test("1 add 1 should equal 6", () => {
    expect(addFn(1, 1)).toBe(6);
  });
});
