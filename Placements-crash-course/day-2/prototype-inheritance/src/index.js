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

//problem 2
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

//problem 3
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

//problem 4
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

//problem 5
function removeKeyValuePair(user, keyToRemove) {
  const { [keyToRemove]: removedKey, ...rest } = user;
  return rest;
}

//problem 6
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
