function evaluate(operation) {
  return (a) => {
    return (b) => {
      switch (operation) {
        case "mul":
          return a * b;
        case "div":
          return a / b;
        case "sum":
          return a + b;
        case "sub":
          return a - b;
        default:
          return "Invalid Operation";
      }
    };
  };
}
// console.log(evaluate("div")(1)(2))

function multiply(a) {
  function multiplyNext(b) {
    if (b !== undefined) {
      return multiply(a * b);
    }
    return a;
  }
  return multiplyNext;
}
// const result = multiply(2)(3)(4)(5);
// console.log(result);

function sumOfTwoNumbers(a) {
  // Your code here
  return (b) => {
    return a + b;
  };
}
// const result = sumOfTwoNumbers(2)(3);
// console.log(result);

function flattenArray(arr) {
  let flattened = [];
  function flattenHelper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenHelper(arr[i]);
      } else {
        flattened.push(arr[i]);
      }
    }
  }
  flattenHelper(arr);
  return flattened;
}
// const input = [[1], [2, [], [5, 11, 13, 500]], [6]];
// const result = flattenArray(input);
// console.log(result); 
module.exports = {evaluate, multiply, sumOfTwoNumbers, flattenArray }