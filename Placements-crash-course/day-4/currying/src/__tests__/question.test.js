import { evaluate, multiply, sumOfTwoNumbers, flattenArray } from "../question1";


global.score = 1;

describe("evaluate function", () => {
  it("should perform multiplication", () => {
    const mul = evaluate("mul");
    expect(mul(3)(4)).toBe(12);
    global.score += 1;
  });

  it("should perform addition", () => {
    const sum = evaluate("sum");
    expect(sum(3)(4)).toBe(7);
    global.score += 1;
  });

  it("should perform division", () => {
    const div = evaluate("div");
    expect(div(10)(2)).toBe(5);
    global.score += 1;
  });

  it("should perform subtraction", () => {
    const sub = evaluate("sub");
    expect(sub(7)(4)).toBe(3);
    global.score += 1;
  });

  it("should return 'Invalid Operation' for unknown operation", () => {
    const unknown = evaluate("unknown");
    expect(unknown(3)(4)).toBe("Invalid Operation");
    global.score += 1;
  });

  it("should handle multiplying by zero", () => {
    const mul = evaluate("mul");
    expect(mul(0)(4)).toBe(0);
    global.score += 1;
  });

  it("should handle division by zero", () => {
    const div = evaluate("div");
    expect(div(10)(0)).toBe(Infinity);
    global.score += 1;
  });

  it("should handle subtracting zero", () => {
    const sub = evaluate("sub");
    expect(sub(7)(0)).toBe(7);
    global.score += 1;
  });

  it("should handle adding zero", () => {
    const sum = evaluate("sum");
    expect(sum(3)(0)).toBe(3);
    global.score += 1;
  });
});

describe("multiply function", () => {
  it("should multiply numbers", () => {
    const result3 = multiply(2)(3)(4)(5)();
    expect(result3).toBe(120);
    global.score += 2;
  });

  it("should handle multiplication by zero", () => {
    const result = multiply(2)(0)(4)();
    expect(result).toBe(0);
    global.score += 2;
  });

  it("should handle multiplying by one", () => {
    const result = multiply(2)(1)(4)(5)();
    expect(result).toBe(40);
    global.score += 2;
  });
});

describe("sumOfTwoNumbers function", () => {
  it("should calculate the sum of two numbers", () => {
    const result4 = sumOfTwoNumbers(2)(3);
    expect(result4).toBe(5);
    global.score += 1;
  });

  it("should handle negative numbers", () => {
    const result = sumOfTwoNumbers(-5)(2);
    expect(result).toBe(-3);
    global.score += 1;
  });

  it("should handle zero sum", () => {
    const result = sumOfTwoNumbers(0)(0);
    expect(result).toBe(0);
    global.score += 1;
  });

  it("should handle adding zero", () => {
    const result4 = sumOfTwoNumbers(2)(0);
    expect(result4).toBe(2);
    global.score += 1;
  });

  it("should handle adding zero to a negative number", () => {
    const result = sumOfTwoNumbers(-5)(0);
    expect(result).toBe(-5);
    global.score += 1;
  });
});

describe("flattenArray function", () => {
  it("should flatten a nested array", () => {
    const input = [1, [2, [3, 4], [5, 11, 13, 500]], 6];
    const result1 = flattenArray(input);
    expect(result1).toEqual([1, 2, 3, 4, 5, 11, 13, 500,6]);
    global.score += 1;
  });

  it("should handle an empty array", () => {
    const input = [];
    const result2 = flattenArray(input);
    expect(result2).toEqual([]);
    global.score += 1;
  });

  it("should handle a single level array", () => {
    const input = [1, 2, 3, 4, 5];
    const result3 = flattenArray(input);
    expect(result3).toEqual([1, 2, 3, 4, 5]);
    global.score += 1;
  });

  it("should handle arrays with only nested arrays", () => {
    const input = [[1], [2], [3], [4]];
    const result4 = flattenArray(input);
    expect(result4).toEqual([1, 2, 3, 4]);
    global.score += 1;
  });

  it("should handle arrays with nested empty arrays", () => {
    const input = [1, [], [2, []], [], 3];
    const result5 = flattenArray(input);
    expect(result5).toEqual([1, 2, 3]);
    global.score += 1;
  });
   it('should not use the built-in Array.prototype.flat', () => {    
    const flatSpy = jest.spyOn(Array.prototype, 'flat');
    const inputArray = [[1, 2], [3, 4]];  
    flattenArray(inputArray);    
    expect(flatSpy).not.toHaveBeenCalled();
    flatSpy.mockRestore();
    const input = [1, [], [298675, []], [], 3012];
    const result5 = flattenArray(input);
    expect(result5).toEqual([1, 298675, 3012]);
    global.score += 2;
  });
});



afterAll(() => {
  console.log("Final Score is", global.score);
});
