// Problem 1. `CreateProduct1` factory function
// you are not allowed to use the this keyword in the CreateProduct1 function.
function CreateProduct1(product_name, brand, reviews, price, rating) {
  let product = {
    product_name: product_name,
    brand: brand,
    reviews: reviews,
    price: price,
    rating: rating,
  };

  // getPrice method
  product.getPrice = function () {
    return this.price;
  };

  // increasePrice method
  product.increasePrice = function (amount) {
    this.price += amount;
    return this.price;
  };

  // decreasePrice method
  product.decreasePrice = function (amount) {
    this.price -= amount;
    return this.price;
  };

  // isExpensive method
  product.isExpensive = function () {
    return this.price >= 1000;
  };

  return product;
}

// // Example invocation
// let product1 = CreateProduct1("Black Pure Cotton Formal Shirt","Peter England Elite", 224, 1799, "4.3")
// console.log(product1)
//Output = {
//   product_name: 'Black Pure Cotton Formal Shirt',
//   brand: 'Peter England Elite',
//   reviews: 224,
//   price: 1799,
//   rating: '4.3'
// }
// console.log(product1.getPrice()) // 1799
// console.log(product1.increasePrice(301)) //2100
// console.log(product1.isExpensive()) // true
// console.log(product1.decreasePrice(1200)) // 900
// console.log(product1.isExpensive()) // false

// Problem 2. `CreateProduct2` constructor function
function CreateProduct2(product_name, brand, reviews, price, rating) {
  this.product_name = product_name;
  this.brand = brand;
  this.reviews = reviews;
  this.price = price;
  this.rating = rating;
}

// getPrice method
CreateProduct2.prototype.getPrice = function () {
  return this.price;
};

// increasePrice method
CreateProduct2.prototype.increasePrice = function (amount) {
  this.price += amount;
  return this.price;
};

// decreasePrice method
CreateProduct2.prototype.decreasePrice = function (amount) {
  this.price -= amount;
  return this.price;
};

// isExpensive method
CreateProduct2.prototype.isExpensive = function () {
  return this.price >= 1000;
};

// //Example invocation
// let product2 = new CreateProduct2("Black Pure Cotton Formal Shirt","Peter England Elite", 224, 1799, "4.3")
// console.log(product2)
// console.log(product2.getPrice()) // 1799
// console.log(product2.increasePrice(301)) //2100
// console.log(product2.isExpensive()) // true
// console.log(product2.decreasePrice(1200)) // 900
// console.log(product2.isExpensive()) // false

//Problem 3. `CreateProduct3` class
class CreateProduct3 {
  constructor(product_name, brand, reviews, price, rating) {
    this.product_name = product_name;
    this.brand = brand;
    this.reviews = reviews;
    this.price = price;
    this.rating = rating;
  }

  // getPrice method
  getPrice() {
    return this.price;
  }

  // increasePrice method
  increasePrice(amount) {
    this.price += amount;
    return this.price;
  }

  // decreasePrice method
  decreasePrice(amount) {
    this.price -= amount;
    return this.price;
  }

  // isExpensive method
  isExpensive() {
    return this.price >= 1000;
  }
}
// //Example invocation
//  let product3 = new CreateProduct3("Black Pure Cotton Formal Shirt","Peter England Elite", 224, 1799, "4.3")
//  console.log(product3)
//  console.log(product3.getPrice()) // 1799
//  console.log(product3.increasePrice(301)) //2100
//  console.log(product3.isExpensive()) // true
//  console.log(product3.decreasePrice(1200)) // 900
//  console.log(product3.isExpensive()) // false

//Problem 4
let arr = [
  {
    name: "student1",
    subjects: [
      { Maths: 60 },
      { History: 30 },
      { English: "50" },
      { Biology: "40" },
    ],
    total: "",
  },
  {
    name: "student2",
    subjects: [
      { Maths: "35" },
      { History: "66" },
      { English: "20" },
      { Biology: "30" },
    ],
    total: "",
  },
];

function findTotal(arr) {
  return arr.map((student) => {
    let total = student.subjects.reduce((acc, subject) => {
      let mark = Object.values(subject)[0];
      if (!isNaN(mark)) {
        return acc + parseInt(mark);
      } else {
        return acc;
      }
    }, 0);
    return { ...student, total };
  });
}

// //Example invocation
//console.log(findTotal(arr));
// [
//   {
//     name: 'student1',
//     subjects: [ [Object], [Object], [Object], [Object] ],
//     total: 180
//   },
//   {
//     name: 'student2',
//     subjects: [ [Object], [Object], [Object], [Object] ],
//     total: 151
//   }
// ]

//Problem 5 - Array destructuring and spread operator

const user = {
  name: "john",
  password: "john@11",
  id: "7468uwe",
  city: "New York",
};

function removeKeyValuePair(user, keyToRemove) {
  const { [keyToRemove]: removedKey, ...rest } = user;
  return rest;
}

//Example usage
//  console.log(removeKeyValuePair(user, "city"));//{ name: 'john', password: 'john@11', id: '7468uwe' }

// Problem 6

let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter",
};
let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" },
];
let areasDirectory = areas.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

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
    strMeasure20: null,
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
    strMeasure20: "",
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
    strMeasure20: null,
  },
];

let exampleInputArray2 = [
  {
    idMeal: "52768",
    strMeal: "aaa",
    Category: 1,
    Area: 2,
    strIngredient1: "a",
    strIngredient2: "b",
    strIngredient3: "c",
    strIngredient4: "d",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
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
    strMeasure1: "275g/6oz",
    strMeasure2: "25g/3oz",
    strMeasure3: "220g/7oz",
    strMeasure4: "25g/3oz",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
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
    strMeasure20: null,
  },

  {
    idMeal: "53049",
    strMeal: "bbb",
    Category: 1,
    Area: 1,
    strIngredient1: "Milk",
    strIngredient2: "Oil",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
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
    strMeasure1: "100ml",
    strMeasure2: "10ml",
    strMeasure3: "",
    strMeasure4: "",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
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
    strMeasure20: "",
  },
  {
    idMeal: "52767",
    strMeal: "ccc",
    Category: 2,
    Area: 2,
    strIngredient1: "x",
    strIngredient2: "y",
    strIngredient3: "z",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
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
    strMeasure1: "275g/6oz",
    strMeasure2: "25g/2½oz",
    strMeasure3: "2-4 tbsp",
    strMeasure4: "",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
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
    strMeasure20: null,
  },
];

//Example Invocation
let obj2 = massageArray(exampleInputArray);
console.log(JSON.stringify(obj2));

function massageArray(inputArray) {
  return inputArray.map((item) => ({
    productId: item.idMeal,
    productTitle: item.strMeal,
    Category: categoriesDirectory[item.Category],
    Area: areasDirectory[item.Area],
    Ingredients: Object.entries(item)
      .filter(([key, value]) => key.startsWith("strIngredient") && value)
      .map(([key, value]) => ({
        ingredient: value,
        measure: item[`strMeasure${key.slice(-1)}`],
      })),
  }));
}

//don't remove below export statement part
export {
  CreateProduct1,
  CreateProduct2,
  CreateProduct3,
  findTotal,
  removeKeyValuePair,
  exampleInputArray,
  massageArray,
};
