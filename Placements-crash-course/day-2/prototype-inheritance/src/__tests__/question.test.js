import {
  CreateProduct1,
  CreateProduct2,
  CreateProduct3,
  findTotal,
  removeKeyValuePair,
  exampleInputArray,
  massageArray,
} from "../question1";
import {
  studentData,
  calculateTotalRevenue,
  findDetails,
} from "../question2";
import { Character, Warrior, Media, Book, User } from "../question3";

global.score = 1;

///*********************************************************Test cases for question2.js */
describe("Problem-1", () => {
  const product1 = CreateProduct1(
    "SMARTBEATS N5 TABLET",
    "i MAX",
    561,
    350.0,
    "4.1"
  );
  const product2 = CreateProduct1(
    "XIAOMI MI NOTE 10 PRO",
    "XIAOMI",
    677,
    225.0,
    "3.2"
  );

  test("objects created by CreateProduct1 has correct properties", () => {
    // const checkthis = CreateProduct1.toString();
    // expect(checkthis).not.toContain("this");
    expect(typeof product2).toBe("object");
    expect(product2.product_name).toBe("XIAOMI MI NOTE 10 PRO");
    expect(product2.brand).toBe("XIAOMI");
    expect(product2.reviews).toBe(677);
    expect(product2.price).toBe(225.0);
    expect(product2.rating).toBe("3.2");

    expect(typeof product1).toBe("object");
    expect(product1.product_name).toBe("SMARTBEATS N5 TABLET");
    expect(product1.brand).toBe("i MAX");
    expect(product1.reviews).toBe(561);
    expect(product1.price).toBe(350.0);
    expect(product1.rating).toBe("4.1");
    global.score += 1;
  });

  test("objects created by CreateProduct1 has correct methods", () => {
    // const checkthis = CreateProduct1.toString();
    // expect(checkthis).not.toContain("this");
    expect(product1.getPrice()).toBe(350.0);
    expect(product1.increasePrice(300)).toBe(650.0);
    expect(product1.getPrice()).toBe(650.0);
    expect(product1.decreasePrice(400)).toBe(250.0);
    expect(product1.getPrice()).toBe(250.0);
    expect(product1.isExpensive()).toBe(false);
    product1.increasePrice(1300);
    expect(product1.isExpensive()).toBe(true);

    expect(product2.getPrice()).toBe(225.0);
    expect(product2.increasePrice(50)).toBe(275.0);
    expect(product2.getPrice()).toBe(275.0);
    expect(product2.decreasePrice(100)).toBe(175.0);
    expect(product2.getPrice()).toBe(175.0);
    expect(product2.isExpensive()).toBe(false);
    product2.increasePrice(300);
    expect(product2.isExpensive()).toBe(false);
    global.score += 2;
  });

  test("getPrice , decreasePrice , increasePrice and ,isExpensive method should be a prototype method", () => {
    expect(product1.getPrice).toBe(CreateProduct1.prototype.getPrice);
    expect(product1.decreasePrice).toBe(CreateProduct1.prototype.decreasePrice);
    expect(product1.increasePrice).toBe(CreateProduct1.prototype.increasePrice);
    expect(product1.isExpensive).toBe(CreateProduct1.prototype.isExpensive);
    global.score += 1;
  });
});
describe("Problem-2", () => {
  const product = new CreateProduct2(
    "SMARTBEATS N5 TABLET",
    "i MAX",
    561,
    350.0,
    "4.1"
  );
  test("Objects created using CreateProduct2 (using constructor) are working as expected", () => {
    expect(product.product_name).toBe("SMARTBEATS N5 TABLET");
    expect(product.brand).toBe("i MAX");
    expect(product.reviews).toBe(561);
    expect(product.price).toBe(350.0);
    expect(product.rating).toBe("4.1");
    expect(product.getPrice()).toBe(350.0);
    expect(product.decreasePrice(50)).toBe(300.0);
    expect(product.isExpensive()).toBe(false);
    expect(product.increasePrice(1300)).toBe(1600.0);
    expect(product.isExpensive()).toBe(true);

    global.score += 1;
  });

  test("getPrice, decreasePrice, increasePrice, and,isExpensive methods should be prototype methods", () => {
    expect(CreateProduct2.prototype.hasOwnProperty("getPrice")).toBe(true);
    expect(CreateProduct2.prototype.hasOwnProperty("decreasePrice")).toBe(true);
    expect(CreateProduct2.prototype.hasOwnProperty("increasePrice")).toBe(true);
    expect(CreateProduct2.prototype.hasOwnProperty("isExpensive")).toBe(true);

    global.score += 1;
  });
});
describe("Problem-3", () => {
  const product = new CreateProduct3(
    "SMARTBEATS N5 TABLET",
    "i MAX",
    561,
    350.0,
    "4.1"
  );
  test("objects created using CreateProduct3 are working as expected", () => {
    expect(product.product_name).toBe("SMARTBEATS N5 TABLET");
    expect(product.brand).toBe("i MAX");
    expect(product.reviews).toBe(561);
    expect(product.price).toBe(350.0);
    expect(product.rating).toBe("4.1");
    expect(product.getPrice()).toBe(350.0);
    expect(product.decreasePrice(50)).toBe(300.0);
    expect(product.isExpensive()).toBe(false);
    expect(product.increasePrice(1300)).toBe(1600.0);
    expect(product.isExpensive()).toBe(true);

    global.score += 1;
  });

  test("getPrice, decreasePrice, increasePrice, and,isExpensive methods should be prototype methods", () => {
    expect(CreateProduct3.prototype.hasOwnProperty("getPrice")).toBe(true);
    expect(CreateProduct3.prototype.hasOwnProperty("decreasePrice")).toBe(true);
    expect(CreateProduct3.prototype.hasOwnProperty("increasePrice")).toBe(true);
    expect(CreateProduct3.prototype.hasOwnProperty("isExpensive")).toBe(true);
    global.score += 1;
  });
});
describe("Problem-4", () => {
  const arr1 = findTotal([
    {
      name: "student1",
      subjects: [
        { Maths: 60 },
        { History: 780 },
        { English: "50" },
        { Biology: "20" },
      ],
      total: "",
    },
    {
      name: "student2",
      subjects: [
        { Maths: "95" },
        { History: "26" },
        { English: "43" },
        { Biology: "50" },
      ],
      total: "",
    },
    {
      name: "student3",
      subjects: [
        { Maths: "67" },
        { History: "276" },
        { English: "453" },
        { Biology: "420" },
      ],
      total: "",
    },
  ]);
  test("Checking array total amount in array", () => {
    expect(Array.isArray(arr1)).toBe(true);
    expect(arr1[0].total).toBe(910);
    expect(arr1[1].total).toBe(214);
    expect(arr1[2].total).toBe(1216);
    global.score += 2;
  });
});

describe("Problem-5", () => {
  test("checking removeKeyValuePair in object", () => {
    const user = {
      name: "test",
      password: "test343",
      id: "dgjgg566",
      city: "GOA",
    };
    expect(removeKeyValuePair(user, "password").password).toBe(undefined);

    global.score += 2;
  }); //2
});
describe("Problem-6", () => {
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

  let eo2 = [
    {
      productId: "52768",
      productTitle: "aaa",
      Category: "MainCourse",
      Area: "Malaysian",
      Ingredients: [
        { ingredient: "a", measure: "275g/6oz" },
        { ingredient: "b", measure: "25g/3oz" },
        { ingredient: "c", measure: "220g/7oz" },
        { ingredient: "d", measure: "25g/3oz" },
      ],
    },
    {
      productId: "53049",
      productTitle: "bbb",
      Category: "MainCourse",
      Area: "British",
      Ingredients: [
        { ingredient: "Milk", measure: "100ml" },
        { ingredient: "Oil", measure: "10ml" },
      ],
    },
    {
      productId: "52767",
      productTitle: "ccc",
      Category: "Starter",
      Area: "Malaysian",
      Ingredients: [
        { ingredient: "x", measure: "275g/6oz" },
        { ingredient: "y", measure: "25g/2½oz" },
        { ingredient: "z", measure: "2-4 tbsp" },
      ],
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
  test("array returned by massageArray to have property-value as expected", function () {
    let o1 = massageArray(exampleInputArray);
    let o2 = massageArray(exampleInputArray2);

    expect(o1[0].productId).toBe("52768");
    expect(o1[0].productTitle).toBe("Apple Frangipan Tart");
    expect(o1[0].Category).toBe("Dessert");
    expect(o1[0].Area).toBe("British");

    expect(o2[1].productId).toBe("53049");
    expect(o2[1].productTitle).toBe("bbb");
    expect(o2[1].Category).toBe("MainCourse");
    expect(o2[1].Area).toBe("British");

    global.score += 2;
  });

  test("array returned by massageArray to be as expected", function () {
    let o1 = massageArray(exampleInputArray);
    expect(o1).toMatchObject(eo1);

    let o2 = massageArray(exampleInputArray2);
    expect(o2).toMatchObject(eo2);

    global.score += 2;
  });
});

///*********************************************************Test cases for question2.js */

describe("Problem-7", () => {
  const mockService = {
    serviceName: "TastyBites Delivery",
    location: "Foodville",
    restaurants: {
      italianCorner: {
        menu: {
          pizza: { available: 40, price: 12 },
          pasta: { available: 74, price: 10 },
          salad: { available: 12, price: 8 },
        },
        orders: [
          { id: 1, items: ["pizza", "pasta"], total: 22 },
          { id: 2, items: ["salad", "pasta"], total: 18 },
          { id: 3, items: ["pizza"], total: 12 },
        ],
      },
      burgerJoint: {
        menu: {
          burger: { available: 41, price: 9 },
          fries: { available: 10, price: 4 },
          drink: { available: 20, price: 7 },
        },
        orders: [
          { id: 1, items: ["burger", "fries"], total: 12 },
          { id: 2, items: ["drink", "burger", "fries"], total: 14 },
          { id: 3, items: ["drink"], total: 7 },
        ],
      },
    },
    restaurantNames: ["italianCorner", "burgerJoint"],
  };
  it("Pizza Available ,Burger Available,Pizza Price, and Burger Price", () => {
    expect(findDetails(mockService).pizzaAvailable).toBe(40);
    expect(findDetails(mockService).burgerAvailable).toBe(41);
    expect(findDetails(mockService).pizzaPrice).toBe(12);
    expect(findDetails(mockService).burgerPrice).toBe(9);
    global.score += 1;
  });

  it("should calculate the total revenue correctly", () => {
    const totalRevenue = calculateTotalRevenue(mockService);
    expect(totalRevenue).toContain("85");
    global.score += 1;
  });

});

describe("Problem-8", () => {
  let data = studentData(
    "john",
    "stark",
    38,
    [50, 60, 70],
    "Singing",
    "Coding",
    "Meditating"
  );
  let data2 = studentData("Will", "Smith", 54, [48, 49, 50], "A", "B", "C");

  test("object returned by studentData to have properties", function () {
    expect(data && typeof data === "object").toBe(true);
    expect(data).toHaveProperty("fullName");
    expect(data).toHaveProperty("age");
    expect(data).toHaveProperty("hobbies");
    expect(data).toHaveProperty("getInfo");
    expect(data).toHaveProperty("getResult");
    expect(data2 && typeof data2 === "object").toBe(true);
    expect(data2).toHaveProperty("fullName");
    expect(data2).toHaveProperty("age");
    expect(data2).toHaveProperty("hobbies");
    expect(data2).toHaveProperty("getInfo");
    expect(data2).toHaveProperty("getResult");
    global.score += 1;
  });

  test("object returned by studentData to have methods", function () {
    expect(typeof data.getInfo).toBe("function");
    expect(typeof data.getResult).toBe("function");
    expect(typeof data2.getInfo).toBe("function");
    expect(typeof data2.getResult).toBe("function");
    global.score += 1;
  });

  test("getInfo method to return proper value", function () {
    expect(data.getInfo()).toBe("john stark's age is 38.");
    expect(data2.getInfo()).toBe("Will Smith's age is 54.");
    global.score += 1;
  });

  test("getResult method to return proper value", function () {
    expect(data.getResult()).toContain("PASS");
    expect(data2.getResult()).toContain("FAIL");
    global.score += 2;
  });
});

///*********************************************************Test cases for question3.js */

describe("Problem-9", () => {
  it("should initialize with the correct values", () => {
    const character = new Character("John", 100, 20);
    expect(character.name).toBe("John");
    expect(character.health).toBe(100);
    expect(character.attackPower).toBe(20);
    global.score += 1;
  });

  it("should change the health of a character on attack", () => {
    const character = new Character("John", 100, 20);
    let enemy = new Character("Enemy", 100, 20);
    character.attack(enemy);
    expect(enemy.health).toBe(80);
    expect(character.isAlive()).toBe(true);
    character.health = 0;
    expect(character.isAlive()).toBe(false);
    global.score += 1;
  });

  it("should initialize with the correct values", () => {
    const warrior = new Warrior("John", 100, 20, "sword", 30);
    expect(warrior.name).toBe("John");
    expect(warrior.health).toBe(100);
    expect(warrior.attackPower).toBe(20);
    expect(warrior.weapon).toBe("sword");
    expect(warrior.armor).toBe(30);
    let enemy = new Character("Enemy", 100, 20);
    warrior.attack(enemy);
    expect(enemy.health).toBe(70);
    warrior.defend();
    expect(warrior.health).toBe(110);
    global.score += 1;
  });
});

describe("Problem-10", () => {
  //Test cases for Media
  test("mediaType getter and setter", () => {
    const media = new Media("Generic");
    expect(media.mediaType).toBe("Generic");

    media.mediaType = "NewType";
    expect(media.mediaType).toBe("NewType");

    expect(() => {
      media.mediaType = "";
    }).toThrow("Media type must be a non-empty string.");
    global.score += 2;
  });

  //Test cases for Book
  // ... Add tests for Book getters and setters (title, author, publicationYear, availableCopies)
  test("Book getter and setter", () => {
    const book = new Book("spiderman", "batman", 2023, 7);
    expect(book.title).toBe("spiderman");
    expect(book.author).toBe("batman");
    expect(book.publicationYear).toBe(2023);
    expect(book.availableCopies).toBe(7);

    expect(() => {
      book.title = "";
    }).toThrow("title must be a non-empty string.");
    expect(() => {
      book.author = "";
    }).toThrow("author must be a non-empty string.");
    expect(() => {
      book.publicationYear = 0;
    }).toThrow("publicationYear must be a positive integer.");
    expect(() => {
      book.availableCopies = -523;
    }).toThrow("availableCopies must be a non-negative integer.");
    global.score += 1;
  });

  test("comparePublicationYears static method", () => {
    const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
    const book2 = new Book("1984", "George Orwell", 1949, 10);

    expect(Book.comparePublicationYears(book1, book2)).toBe(1);
    expect(Book.comparePublicationYears(book1, book1)).toBe(0);
    expect(Book.comparePublicationYears(book2, book1)).toBe(-1);

    global.score += 2;
  });
  //Test cases for User
  // ... Add tests for User getters and setters (firstName, lastName)

  test("User getter and setter", () => {
    const user = new User("rohit", "sharma");
    expect(user.firstName).toBe("rohit");
    expect(user.lastName).toBe("sharma");

    expect(() => {
      user.firstName = "";
    }).toThrow("firstName must be a non-empty string.");
    expect(() => {
      user.lastName = "";
    }).toThrow("lastName must be a non-empty string.");
    global.score += 2;
  });

  test("borrowBook and returnBook methods", () => {
    const book = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
    const user = new User("Alice", "Smith");

    user.borrowBook(book);
    expect(book.availableCopies).toBe(4);

    user.returnBook(book);
    expect(book.availableCopies).toBe(5);
    global.score += 1;
  });

  test("fullName static method", () => {
    const user = new User("Alice", "Smith");
    expect(User.fullName(user)).toBe("Alice Smith");
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
