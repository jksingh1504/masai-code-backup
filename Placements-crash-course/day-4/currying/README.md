# JS-Currying-&-Flattening-array-Evaluation

## Submission Instructions [Please note]

## Installation

```
npm install --engine-strict
```

## Test

```
npm test
```

## Test (Watch mode)

```
npm test -- --watchAll
```

## Maximum marks - 28

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example /js-201 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## file structure

most of your work would happen in the 
 - `src/question1.js`

<span style="color: green"> Read the test results carefully, they may provide you with some extra information.</span>

You have provided a set of well-structured test cases for the assignments, including Currying, Infinite Currying, and Flattening an Array. Each test case is appropriately described and covers various scenarios to ensure the correctness of the implementations. You've also included scoring for each test case.

Here's the consolidated set of test cases based on your provided template:

### Test Cases
```
✅ able to submit the app - 1 mark (minimum score)
```


**Currying Assignment - `evaluate` function:**
```javascript
✅ should perform multiplication - 1 mark
✅ should perform addition - 1 mark
✅ should perform division - 1 mark
✅ should perform subtraction - 1 mark
✅ should return 'Invalid Operation' for unknown operation - 1 mark
✅ should handle multiplying by zero - 1 mark
✅ should handle division by zero - 1 mark
✅ should handle subtracting zero - 1 mark
✅ should handle adding zero - 1 mark
```

**Infinite Currying Assignment - `multiply` function:**
```javascript
✅ should multiply numbers - 2 marks
✅ should handle multiplication by zero - 2 marks
✅ should handle multiplying by one - 2 marks
```

**Currying Assignment - `sumOfTwoNumbers` function:**
```javascript
✅ should calculate the sum of two numbers - 1 mark
✅ should handle negative numbers - 1 mark
✅ should handle zero sum - 1 mark
✅ should handle adding zero - 1 mark
✅ should handle adding zero to a negative number - 1 mark
```

**Flattening an Array Assignment - `flattenArray` function:**
```javascript
✅ should flatten a nested array - 1 mark
✅ should handle an empty array - 1 mark
✅ should handle a single level array - 1 mark
✅ should handle arrays with only nested arrays - 1 mark
✅ should handle arrays with nested empty arrays - 1 mark
✅ should not use the built-in Array.prototype.flat - 2 marks
```

You can use this consolidated list of test cases in your assignment documentation or testing framework. The scoring has been assigned according to the provided template.


### Problem 1: Currying

**Problem Statement:**

Implement a currying function called `evaluate` that allows you to perform various operations, such as addition, multiplication, division, and subtraction. The `evaluate` function should be used as follows:

```javascript
evaluate("mul")(3)(4); // Should return 12
```

**Function Signature:**(Provided in the boiler plate you just need to code the reamaining part)

```javascript
function evaluate(operation) {
  // Your code here
}
```

**Input:**

- `operation` (string): The type of operation to be performed. Valid values are "sum" for addition, "mul" for multiplication, "div" for division, and "sub" for subtraction. For all other strings, return "Invalid Operation."

**Output:**

- The `evaluate` function should return a chain of functions that takes two numeric arguments, `a` and `b`, and returns the result of the specified operation. If the `operation` is invalid, return "Invalid Operation"

**Hint:**

- The `evaluate` function initially takes an operation type as an argument (e.g., "sub"). It should return a function that takes the first value (e.g., `a`) and returns a function that takes the argument `b`. This last function should, in turn, return the result of the operation (e.g., `a - b`).


**Example:**

```javascript
const mul = evaluate("mul");--> This function takes operation argument "mul"  which in turn returns a function that takes the first value.
mul(3)--> After calling the function it should return one more function which takes the second argument.
console.log(mul(3)(4)); // Output: 12-->Now it should return the value a*b which is nothing but 3*4
const invalidOperation = evaluate("unknown");
console.log(invalidOperation(3)(4)); // Output: "Invalid Operation"
```

### Problem 2: Infinite Currying - Evaluation

**Problem Statement:**

Implement a function called `multiply` using infinite currying. The function should be able to multiply an arbitrary number of arguments.

**Function Signature:**

```javascript
function multiply(a) {
  // Your code here
}
```

**Input:**

- The `multiply` function should accept a numeric argument `a`.

**Output:**

- The `multiply` function should return a chain of functions that accept additional numeric arguments and return the product of all the arguments.

**Example:**

```javascript
const result = multiply(2)(3)(4)(5)();
console.log(result); // Output: 120
```

### Problem 3: Currying

**Problem Statement:**

Implement a currying function called `sumOfTwoNumbers` that calculates the sum of two numbers.

**Function Signature:**

```javascript
function sumOfTwoNumbers(a) {
  // Your code here
}
```

**Input:**

- The `sumOfTwoNumbers` function should accept a numeric argument `a`.

**Output:**

- The `sumOfTwoNumbers` function should return a function that accepts another numeric argument `b` and returns the sum of `a` and `b`.

**Example:**

```javascript
const result = sumOfTwoNumbers(2)(3);
console.log(result); // Output: 5
```

### Problem 4: Flattening an Array (Don't use inbuilt flat method)

**Problem Statement:**

Implement a function called `flattenArray` that flattens a nested array. The function should take a nested array as input and return a flattened array.

**Function Signature:**

```javascript
function flattenArray(arr) {
  // Your code here
}
```

**Input:**

- `arr` (array): A nested array of integers. The nesting can be arbitrary, containing both arrays and individual integers.

**Output:**

- Return a flattened array containing all the integers from the input array.

**Example:**

```javascript
const input = [1, [2, [3, 4], [5, 11, 13, 500]], 6];
const result = flattenArray(input);
console.log(result); // Output: [1, 2, 3, 4, 5, 11, 13, 500, 6]
```


#### The Problem is tested on CP

<img src="" height="500px" />

### General guidelines

- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
