# PT WEB-16 C1 

## Submission Instructions [Please note]

## Maximum Marks - 36

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Installation
```
npm install --engine-strict
```
## Test
```
npm t
```
## Test (Watch mode)
```
npm t -- --watchAll
```
## file structure

most of your work would happen in the `src/index.js` file.
```
✅ Submit the problem [1 mark]

### Test cases for question1.js
----------------------------------------------
### Test cases for Problem 1
✅ Objects created by CreateProduct1 have correct properties [1 mark]
✅ Objects created by CreateProduct1 have correct methods [2 marks]
✅ getPrice, decreasePrice, increasePrice, and,isExpensive methods should be prototype methods [1 mark]

### Test cases for Problem 2
✅ Objects created using CreateProduct2 (using constructor) are working as expected [1 mark]
✅ getPrice, decreasePrice, increasePrice, and,isExpensive methods should be prototype methods [1 mark]

### Test cases for Problem 3
✅ Objects created using CreateProduct3are working as expected [1 mark]
✅ getPrice, decreasePrice, increasePrice, and,isExpensive methods should be prototype methods [1 mark]

### Test cases for Problem 4
✅ Checking total amount in array [2 marks]

### Test cases for Problem 5
✅ checking removeKeyValuePair in object[2 marks]

### Test cases for Problem 6
✅ array returned by massageArray to have property-value as expected [2 marks]
✅ array returned by massageArray to be as expected [2 marks]

### Test cases for question2.js
----------------------------------------------

### Test cases for Problem 7
✅ Pizza Available, Burger Available, Pizza Price, and Burger Price [1 mark]
✅ should calculate the total revenue correctly [1 mark]

### Test cases for Problem 8
✅ object returned by studentData to have properties [1 mark]
✅ object returned by studentData to have methods [1 mark]
✅ getInfo method to return proper value [1 mark]
✅ getResult method to return proper value [2 marks]

### Test cases for question3.js
----------------------------------------------

### Test cases for Problem 9
✅ should initialize with the correct values [mark 1]
✅ should change the health of a character on attack [mark 1]
✅ should initialize with the correct values [mark 1]

### Test cases for Problem 10
### Test cases for Media
  ✅ mediaType getter and setter [2 marks]
### Test cases for Book
  ✅ Book getter and setter  [1 mark]
  ✅ comparePublicationYears static method - [2 marks]
### Test cases for User
  ✅ User getter and setter  [2 marks]
  ✅ borrowBook and returnBook methods  [1 mark]
  ✅ fullName static method  [1 mark]

```

# question1.js 
<h2 style="color:#215dc8">
 Problem statement.1
</h2> 

Define a **factory function** called `CreateProduct1` which takes in the following parameters:

1. `product_name` (string): the name of the product.
2. `brand` (string): the brand of the product.
3. `reviews` (number): the review for the product.
4. `price` (number): the price of the product.
5. `rating` (string): rating for a product.

The function returns an object containing the product's details as properties, along with four methods `getPrice`, `increasePrice`, `decreasePrice`, and `isExpensive`.

The `getPrice` method *returns* the current `price` of the product.
- The `increasePrice` method increases the product's `price` by a given amount (number) *returns* **increased Price of product**.
- The `decreasePrice` method decreases the product's `price` by a given amount (number) *returns* **decreased Price of product**.
- The `isExpensive` method *returns* a Boolean value based on whether the product's `price` is `greater than or equal to` 1000 or not.

- You are required to complete the method implementations within the existing structure, utilizing **`the prototype-based approach`**.

The purpose of this code is to provide a reusable function that creates product objects with specific properties and methods that can be used to manipulate and get information about the product. This function can be used to create multiple product objects with different details based on the given parameters.

Example invocation with expected outputs:
```
// Example invocation
let product1 = CreateProduct1("Black Pure Cotton Formal Shirt"," Peter England Elite", 224, 1799, "4.3")
console.log(product1)
console.log(product1.getPrice()) // 1799
console.log(product1.increasePrice(301)) //2100
console.log(product1.isExpensive()) // true
console.log(product1.decreasePrice(1200)) // 900
console.log(product1.isExpensive()) // false
```
<h2 style="color:#215dc8">
 Problem statement.2
</h2> 

Implement the functionality same as Problem 1. using `CreateProduct2` ***constructor functions***.

- You are required to complete the method implementations within the existing structure, utilizing **`the prototype-based approach`**.

Example invocation with expected outputs:
```
//Example invocation
let product2 = new CreateProduct2("Black Pure Cotton Formal Shirt"," Peter England Elite", 224, 1799, "4.3")
console.log(product2)
console.log(product2.getPrice()) // 1799
console.log(product2.increasePrice(301)) //2100
console.log(product2.isExpensive()) // true
console.log(product2.decreasePrice(1200)) // 900
console.log(product2.isExpensive()) // false
```
<h2 style="color:#215dc8">
 Problem statement.3
</h2> 
Implement the functionality same as Problem 1. using `CreateProduct3` ***ES6 Classes*** and ***constructor***.

- You are required to complete the method implementations within the existing structure, utilizing **`the prototype-based approach`**.

Example invocation with expected outputs:
```
//Example invocation
 let product3 = new CreateProduct3("Black Pure Cotton Formal Shirt","Peter England Elite", 224, 1799, "4.3")
 console.log(product3)
 console.log(product3.getPrice()) // 1799
 console.log(product3.increasePrice(301)) //2100
 console.log(product3.isExpensive()) // true
 console.log(product3.decreasePrice(1200)) // 900
 console.log(product3.isExpensive()) // false
```
<h2 style="color:#215dc8">
 Problem statement.4
</h2> 
For an array with an object of student mark, you have to modify that array and change the total with all subject aggregate. pass an array as an argument in the function `findTotal` and return a modified array with the total amount, from the function. You can refer below as an example.

- The data type for the "marks" of the subject is either a `number` or a `string`.

- **`Hint`** : use Object.values() [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

- **input**
```
let arr =[
    {
    name: "student1",
    subjects:[{Maths:60},{History:30},{English:"50"},{Biology:"40"}],
    total:""
    },
    {
    name: "student2",
    subjects:[{Maths:"35"},{History:"66"},{English:"20"},{Biology:"30"}],
    total:""
    }
    ]
    console.log(findTotal(arr));
```
- **Output**
```
arr =[
    {
    name: "student1",
    subjects:[{Maths:60},{History:30},{English:"50"},{Biology:"40"}],
    total:180
    },
    {
    name: "student2",
    subjects:[{Maths:"35"},{History:"66"},{English:"20"},{Biology:"30"}],
    total:151
    }
    ]
```

<h2 style="color:#215dc8">
 Problem statement.5
</h2>  

For an object with user details, you have to create a function removeKeyValuePair that takes input as 
  - user object
  - key to remove (string)

the function *removeKeyValuePair* will `return` the object without the key-value pair you have given for example we are passing `city` should get the object of a user without `city` as follows 

- You can use any method to implement but the recommended one is using the *spread operator*.[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

**Input**
```
const user = {
  name: "john",
  password: "john@11",
  id: "7468uwe",
  city: "New York",
}
```
**Output**
```
// console.log(removeKeyValuePair(user, "city"));//{ name: 'john', password: 'john@11', id: '7468uwe' }
```
<h2 style="color:#215dc8">
 Problem statement.6
</h2> 

The function `massageArray()` is expected to return an array of objects. 

Parameter of `massageArray()`: `inputArray` of type array

### Provided `areas`:
```
let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];
```
### Provided `categories`
```
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};
```
### Example Input Array: 
```
let exampleInputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
    strIngredient1: "digestive biscuits",
    strIngredient2: "butter",
    strIngredient3: "Bramley apples",
    strIngredient4: "butter, softened",
    strIngredient5: "caster sugar",
    strIngredient6: "free-range eggs, beaten",
    strIngredient7: "ground almonds",
    strIngredient8: "almond extract",
    strIngredient9: "flaked almonds",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/3oz",
    strMeasure3: "200g/7oz",
    strMeasure4: "75g/3oz",
    strMeasure5: "75g/3oz",
    strMeasure6: "2",
    strMeasure7: "75g/3oz",
    strMeasure8: "1 tsp",
    strMeasure9: "50g/1¾oz",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
    strIngredient1: "Milk",
    strIngredient2: "Oil",
    strIngredient3: "Eggs",
    strIngredient4: "Flour",
    strIngredient5: "Baking Powder",
    strIngredient6: "Salt",
    strIngredient7: "Unsalted Butter",
    strIngredient8: "Sugar",
    strIngredient9: "Peanut Butter",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "200ml",
    strMeasure2: "60ml",
    strMeasure3: "2",
    strMeasure4: "1600g",
    strMeasure5: "3 tsp",
    strMeasure6: "1/2 tsp",
    strMeasure7: "25g",
    strMeasure8: "45g",
    strMeasure9: "3 tbs",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: ""
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
    strIngredient1: "plain flour",
    strIngredient2: "chilled butter",
    strIngredient3: "cold water",
    strIngredient4: "raspberry jam",
    strIngredient5: "butter",
    strIngredient6: "caster sugar",
    strIngredient7: "ground almonds",
    strIngredient8: "free-range egg, beaten",
    strIngredient9: "almond extract",
    strIngredient10: "flaked almonds",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/2½oz",
    strMeasure3: "2-3 tbsp",
    strMeasure4: "1 tbsp",
    strMeasure5: "125g/4½oz",
    strMeasure6: "125g/4½oz",
    strMeasure7: "125g/4½oz",
    strMeasure8: "1",
    strMeasure9: "½ tsp",
    strMeasure10: "50g/1¾oz",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  }
];
```
### Expected output with the above input: 
```
  let eo1 = [
    {
      productId: "52768",
      productTitle: "Apple Frangipan Tart",
      Category: "Dessert",
      Area: "British",
      Ingredients: [
        { ingredient: "digestive biscuits", measure: "175g/6oz" },
        { ingredient: "butter", measure: "75g/3oz" },
        { ingredient: "Bramley apples", measure: "200g/7oz" },
        { ingredient: "butter, softened", measure: "75g/3oz" },
        { ingredient: "caster sugar", measure: "75g/3oz" },
        { ingredient: "free-range eggs, beaten", measure: "2" },
        { ingredient: "ground almonds", measure: "75g/3oz" },
        { ingredient: "almond extract", measure: "1 tsp" },
        { ingredient: "flaked almonds", measure: "50g/1¾oz" },
      ],
    },
    {
      productId: "53049",
      productTitle: "Apam balik",
      Category: "Dessert",
      Area: "Malaysian",
      Ingredients: [
        { ingredient: "Milk", measure: "200ml" },
        { ingredient: "Oil", measure: "60ml" },
        { ingredient: "Eggs", measure: "2" },
        { ingredient: "Flour", measure: "1600g" },
        { ingredient: "Baking Powder", measure: "3 tsp" },
        { ingredient: "Salt", measure: "1/2 tsp" },
        { ingredient: "Unsalted Butter", measure: "25g" },
        { ingredient: "Sugar", measure: "45g" },
        { ingredient: "Peanut Butter", measure: "3 tbs" },
      ],
    },
    {
      productId: "52767",
      productTitle: "Bakewell tart",
      Category: "Dessert",
      Area: "British",
      Ingredients: [
        { ingredient: "plain flour", measure: "175g/6oz" },
        { ingredient: "chilled butter", measure: "75g/2½oz" },
        { ingredient: "cold water", measure: "2-3 tbsp" },
        { ingredient: "raspberry jam", measure: "1 tbsp" },
        { ingredient: "butter", measure: "125g/4½oz" },
        { ingredient: "caster sugar", measure: "125g/4½oz" },
        { ingredient: "ground almonds", measure: "125g/4½oz" },
        { ingredient: "free-range egg, beaten", measure: "1" },
        { ingredient: "almond extract", measure: "½ tsp" },
        { ingredient: "flaked almonds", measure: "50g/1¾oz" },
      ],
    },
  ];
```
### Mapping of properties from input to expected output
- idMeal maps to productId
- strMeal maps to productTitle
- Category maps to Category, but the id turns into the name
- Area maps to Area, but the id turns into the name
- finally, 20 strIngredients & 20 strMeasures turns into a single entry of Ingredients which is an array of object. Each object of Ingredients contains a key called ingredient and another key called measure.

# question2.js
<h2 style="color:#215dc8">
 Problem statement.7
</h2> 

- object `foodDeliveryService` is already provided in the template use this for problem 7 as follows 

```
  const foodDeliveryService = {
  serviceName: "TastyBites Delivery",
  location: "Foodville",
  restaurants: {
    italianCorner: {
      menu: {
        pizza: { available: 20, price: 12 },
        pasta: { available: 30, price: 10 },
        salad: { available: 15, price: 8 },
      },
      orders: [
        { id: 1, items: ["pizza", "pasta"], total: 22 },
        { id: 2, items: ["salad", "pasta"], total: 18 },
        { id: 3, items: ["pizza", "pasta"], total: 12 },
      ],
    },
    burgerJoint: {
      menu: {
        burger: { available: 25, price: 8 },
        fries: { available: 40, price: 4 },
        drink: { available: 30, price: 2 },
      },
      orders: [
        { id: 1, items: ["burger", "fries"], total: 12 },
        { id: 2, items: ["drink", "burger", "fries"], total: 14 },
        { id: 3, items: ["drink"], total: 2 },
      ],
    },
  },
  restaurantNames: ["italianCorner", "burgerJoint"],
};

```

<h3 style="color:#215dc8">
 Problem statement.7-1
</h3> 

- Extract the `pizzaAvailable`, `burgerAvailable`, `pizzaPrice`, and `burgerPrice` using multilevel destructuring

- Create function `findDetails` which takes `foodDeliveryService` as input and *return* object as 
    
```
    {
    pizzaAvailable: no of pizza available,
    burgerAvailable: no of burger available,
    pizzaPrice: the price of pizza,
    burgerPrice: the price of  burger,
  }
```

- Hint: use destructuring 

```
//Example Invocation
console.log(findDetails(foodDeliveryService).pizzaAvailable); // 20
console.log(findDetails(foodDeliveryService).burgerAvailable); // 25
console.log(findDetails(foodDeliveryService).pizzaPrice); // 12
console.log(findDetails(foodDeliveryService).burgerPrice); // 8
```

<h3 style="color:#215dc8">
 Problem statement.7-2
</h3>

- Create function `calculateTotalRevenue` which take `foodDeliveryService` as input and *return*  a String as
`Total Revenue: {totalRevenue}` from all completed orders across all restaurants.

```
//Example Invocation
 console.log(calculateTotalRevenue(foodDeliveryService)); //80 = (22+18+12+12+14+2)
```

<h2 style="color:#215dc8">
 Problem statement.8
</h2> 

The function `studentData() {}` should return an **object**.

Parameters of studentData:
```
firstName: takes in a string value
lastName: takes in a string value
age: takes in a number value
marksArray: takes in an array of marks
After `marksArray` all the arguments passed to the students data will be considered as the students hobbies.
```

Example function invocation: 
```
let obj1 = studentData('John', 'stark', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');

console.log(JSON.stringify(obj1));// {"fullName":"john stark","age":38,"hobbies":["Singing","Coding","Meditating"]}
console.log(obj1.getInfo()); //john stark's age is 38.
console.log(obj1.getResult()) // Result: PASS
```

In the above invocation, [50,60,70] is the students marks and 
the students hobbies are Singing, Coding & Meditating.

The **object** that the function returns must have the following three properties: 

```
- `fullName`: in the example invocation above, the fullName's value should be 'John stark'
- `age`: age is equal to the third argument of age
- `hobbies`: it is an array of hobbies. in the above invocation, it would be ['Singing', 'Coding', 'Meditating']
```

The **object** that the function returns must have the following two *methods*:

`getInfo`: In the invocation example above, it method would return the string value "John stark's age is 38."

`getResult`: 
If the average mark of the student is less than 50, it is expected to return 'Result: FAIL'
If the average mark of the student is more than or equal to 50, it is expected to return 'Result: PASS'
in the invocation example above, it would return 'Result: PASS'

# question3.js
<h2 style="color:#215dc8">
 Problem statement.9
</h2> 

Design a 2-level hierarchy for a game that has different types of characters with different attributes and abilities. You are expected to implement it using ES6 Classes.

<h3 style="color:#215dc8">
 Problem statement.9-1
</h3>

Create a class named `Character` with the following inputs:

`name` (string)
`health` (integer)
`attackPower` (integer)

for example : 
```
let character = new Character("John", 100, 20);
```

And the following **methods**:

1. `attack` method :
 -  takes a Character object as an input 
 -  decreases the health of Character by the attackPower.

2. `isAlive` method :
 -  which **`returns`** a boolean indicating whether the character's health is greater than 0.

<h3 style="color:#215dc8">
 Problem statement.9-2
</h3>

Create a class named `Warrior` which extends the `Character` class and has the following additional inputs:

`weapon` (string)
`armor` (integer)

And the following methods:

`attack` takes `Character` as input
  - should override the `Character` class's `attack` method and increase the `attackPower` by 10 when the weapon is a `sword`.

`defend` which takes no input and increases the `Warrior` object's `health` by 10.

- please study the below example for a better understanding

### Example Invocation: 
```
let character = new Character("John", 100, 20);
let enemy = new Character("Enemy", 100, 20);
let warrior = new Warrior("John", 100, 20, "sword", 30);

console.log(enemy.health); // 100
character.attack(enemy);
character.attack(enemy);
console.log(enemy.health); // 60
warrior.attack(enemy);
console.log(enemy.health); // 30

console.log(warrior.health); // 100
warrior.defend();
console.log(warrior.health); // 110

console.log(enemy.isAlive()); // true
enemy.health = 0;
console.log(enemy.isAlive()); // false
```

<h2 style="color:#215dc8">
 Problem statement.10
</h2> 
Library Management System
## Tree representation of the hierarchy:

```
Media
│
├── #mediaType
│   ├── get mediaType()
│   └── set mediaType(value)
│
└── Book (inherits from Media)
    ├── #title
    │   ├── get title()
    │   └── set title(value)
    ├── #author
    │   ├── get author()
    │   └── set author(value)
    ├── #publicationYear
    │   ├── get publicationYear()
    │   └── set publicationYear(value)
    ├── #availableCopies
    │   ├── get availableCopies()
    │   └── set availableCopies(value)
    └── static comparePublicationYears(book1, book2)

User
│
├── #firstName
│   ├── get firstName()
│   └── set firstName(value)
├── #lastName
│   ├── get lastName()
│   └── set lastName(value)
├── #borrowedBooks (private array)
├── borrowBook(book)
├── returnBook(book)
└── static fullName(user)
```
## Objective:
Create a JavaScript inheritance model to manage a library system that consists of `Books` and `Users`. Implement static methods, private properties, and getter/setters in the classes. The library system should satisfy the following requirements:
### 1. _Media class_:
- The Media class should have a private property, `mediaType`, which can be accessed and modified *only through getters and setters*.
- The Media class should have a `constructor` that takes a mediaType as an argument and sets it as the value of the mediaType property.
- The Media class should have a getter for the mediaType property that **returns** its value.
  - The Media class should have a setter for the mediaType property that validates the input value as  
      - if
        - non-empty
        - string then **sets it** as the value of the mediaType.
      - else  
        - empty `or`
        - not string then it will **throw an error** as `Media type must be a non-empty string.` Refer [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

### Example usage for Media
```
const media = new Media("Broadcasting");
console.log(media.mediaType) // Broadcasting 
console.log(media.mediaType = "") // throw Error: Media type must be a non-empty string.
```

- `Hint 1`: refer below example for an understanding of - Throw Error 

```
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Example 1: Valid division
let result1 = divide(10, 2);
console.log("Result 1:", result1);//Result 1: 5


let result2 = divide(10, 0);
console.log("Result 2:", result2);//Error: Division by zero is not allowed.
```


- `Hint 2` : how to check the value is a non-empty string please study the below example for a better understanding

```
function validateLastName(lastName) {
    if (typeof lastName !== "string" || lastName.length === 0) {
      throw new Error("lastName must be a non-empty string.");
    }
  }
  
  validateLastName("Smith");
  console.log("Last name is valid.");//Last name is valid.
  
  validateLastName("");
  console.log("This won't be reached.");//Error: lastName must be a non-empty string.

  validateLastName(12);
  console.log("This won't be reached.");//Error: lastName must be a non-empty string.
```
### 2. _Book class_:
- The Book class should inherit from a generic `Media class` using the `extends` keyword. with an additional private property called mediaType (string) and corresponding getter/setter.

- The Book class should have a `constructor` that takes 
  1. title 
  2. author 
  3. publication year 
  4. available copies 
     as arguments and sets them as the values of the corresponding properties.

Hint: `no need to pass mediaType while creating book class`

 **Books should receive the following private properties as an argument:**

1. title (string)
2. author (string)
3. publicationYear (number)
4. availableCopies (number) 

- The Book class should have getters and setters for the title, author, publication year, and available copies properties that validate the input values set them as the values of the corresponding properties, and can be *accessed and modified only through getters/setters*.
 
1. For the title
  - `Getters for title property`
    - The Book class should have a getter for the property that **returns** its title.
  - `Setters for title property`
    - The Book class should have a setter for the title property that validates the input value as
      - if  
        1. non-empty
        2. string then **sets it** as the value of the title.
      - else
        1. empty `or`
        2. If not string then it will **throw an error** as `Title must be a non-empty string.` Refer [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

### Example usage for Book title property
```
const book = new Book("spiderman") 
console.log(book.title) //spiderman
console.log(book.title="") // throw Error :title must be a non-empty string.
```
- ... Repeat for other properties (author, publicationYear, availableCopies) 

- The setters should enforce the following constraints:
1. Book *title* should be non-empty strings if not then throw an error as `title must be a non-empty string.`.
2. Book *author* should be non-empty strings if not then throw an error as `author must be a non-empty string.`. 
3. Book *publicationYear* should be a `positive` integer if not then throw the error as `publicationYear must be a positive integer.`. 
4. Book *availableCopies* should be a `non-negative` integer if not then throw the error as `availableCopies must be a non-negative integer.`. 

- Implement a static method in the `Book class` called **`comparePublicationYears`**(book1: Book, book2: Book) that takes *two Book objects* as arguments and compares two Book instances based on their *publication years*.
- It should return 
  - -1 if the publication year of the first book is earlier than the second book, 
  - 0 if they have the same publication year, and
  - 1 if the publication year of the first book is later than the second book.

 The mediaType should be set to "Book" during the instantiation of the Book class.

### Example usage for static method: comparePublicationYears
```
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
const book2 = new Book("1984", "George Orwell", 1949, 10);
console.log(
  "Comparing publication years:",
  Book.comparePublicationYears(book1, book2)
); // 1
```
### 3. _User class_:
## Users should receive the following private properties as an argument :

1. firstName (string)
2. lastName (string)
3. borrowedBooks (`array of Book instances`)
which can be accessed and modified only through getters and setters.

- The User class should have a `constructor` that takes a first name and last name as arguments and sets them as the values of the corresponding properties. It should also initialize an empty array for the borrowed books property.

- The User class should have getters and setters for first name and last name properties that validate the input values and set them as the values of the corresponding properties.

1. For firstName
  - `Getters for firstName property`
    - The User class should have a getter for the property that **returns** its firstName.
  - `Setters for firstName property`
    - The User class should have a setter for the firstName property that validates the input value as
      - if  
        1. non-empty
        2. string then **sets it** as the value of the firstName.
      - else
        1. empty `or`
        2. If not string then it will **throw an error** as `firstName must be a non-empty string.` Refer [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

### Example usage for User firstName property
```
const user = new User("Alice", "Smith");
console.log(user.firstName); // Alice
console.log(user.firstName="") // throw Error :firstName must be a non-empty string.
```

### Example usage for User lastName property
```
const user = new User("Alice", "Smith");
console.log(user.lastName); // Alice
console.log(user.lastName="") // throw Error :lastName must be a non-empty string.
```

The setters should enforce the following constraints:
- User's firstName should be non-empty strings if not then throw an error 
   - setters for User properties -> ``
1. User *lastName* should be non-empty strings if not then throw an error as `firstName must be a non-empty string.`
2. User *firstName* should be non-empty strings if not then throw an error as `lastName must be a non-empty string.`

### Users should have the following methods:
1. `borrowBook(book: Book)` - The User class should have a method, borrowBook, that takes a `Book object` as an argument and adds it to the borrowed books property of the user. It should also **decrement** the availableCopies property of the book by 1.

2. `returnBook(book: Book)` - The User class should have a method, returnBook, that takes a `Book object` as an argument and removes it from the borrowed books property of the user. It should also **increment** the availableCopies property of the book by 1.

### Example usage: borrowBook and returnBook methods

```
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
const book2 = new Book("1984", "George Orwell", 1949, 10);

const user1 = new User("Alice", "Smith");
user1.borrowBook(book1);
console.log("Book1 availableCopies:", book1.availableCopies); // 4

user1.borrowBook(book2);
console.log("Book 2 availableCopies:", book2.availableCopies); // 9

user1.returnBook(book1);
console.log("Book 1 availableCopies after return:", book1.availableCopies); // 5
```

- The User class should have a `static` method, *fullName*, that takes a `User object `as an argument and **returns** the full name of the user by concatenating the first name and last name properties.
### Example usage for static method: fullName
```
  const user = new User("Alice", "Smith");
  console.log(User.fullName(user)); // Alice Smith
```

- You should create a program that demonstrates the functionality of the classes and methods outlined above. The implementation should allow the creation of Books and Users, the borrowing and returning of books, and the usage of static methods and getters/setters.


### General guidelines
- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time