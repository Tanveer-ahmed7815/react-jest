import sum from "./sum";

test("test for sum function",()=>{
    let a = 10;
    let b = 20;
    let output = 30;
    expect(sum(a,b)).toBe(output);
})