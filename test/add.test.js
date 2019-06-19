const addFn = require("../src/add.js");

describe("addFn", () => {
  test("1 add 1 should equal 2", () => {
    expect(addFn(1, 1)).toBe(2);
  });
});


describe("test env", ()=>{
    test("env val = 123456",()=>{
        const testEnv = process.env.TEST;
        console.log(testEnv)
        expect(testEnv).toBe('123456');
    })

    test("env val != nihao",()=>{
        const testEnv = process.env.TEST;
        console.log(testEnv)
        expect(testEnv).not.toBe('nihao');
    })
    test("env val = heiheihei",()=>{
        const testEnv = process.env.TEST;
        console.log(testEnv)
        expect(testEnv).toBe('heiheihei');
    })
})
