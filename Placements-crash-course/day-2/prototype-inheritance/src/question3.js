// Problem no. 10
// Problem no. 9

// Base Character class
class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }

  // Method to attack another character
  attack(target) {
    if (target instanceof Character) {
      target.health -= this.attackPower;
    }
  }

  // Method to check if the character is alive
  isAlive() {
    return this.health > 0;
  }
}

// Warrior class extending Character
class Warrior extends Character {
  constructor(name, health, attackPower, weapon, armor) {
    super(name, health, attackPower);
    this.weapon = weapon;
    this.armor = armor;
  }

  // Method to attack another character
  attack(target) {
    if (this.weapon === "sword") {
      // Increase attack power if using a sword
      super.attack(target);
      target.health -= 10; // Additional damage for sword
    } else {
      super.attack(target);
    }
  }

  // Method to defend and increase health
  defend() {
    this.health += 10;
  }
}

// Example Invocation
const character1 = new Character("Enemy", 50, 15);
const warrior1 = new Warrior("Hero", 100, 20, "sword", "plate armor");

console.log(character1); // Character { name: 'Enemy', health: 50, attackPower: 15 }
console.log(warrior1); // Warrior {name: 'Hero',health: 100,attackPower: 20,weapon: 'sword',armor: 'plate armor }

// Warrior attacks character
warrior1.attack(character1);
console.log("Character after warrior's attack:");
console.log(character1); // Character { name: 'Enemy', health: 20, attackPower: 15 }

// Warrior defends
warrior1.defend();
console.log(warrior1); // Warrior {name: 'Hero',health: 110,attackPower: 20,weapon: 'sword',armor: 'plate armor'}

// Check if character and warrior are alive
console.log("Is character alive?", character1.isAlive()); // true
console.log("Is warrior alive?", warrior1.isAlive()); // true


// // Example Invocation
// const character1 = new Character("Enemy", 50, 15);
// const warrior1 = new Warrior("Hero", 100, 20, "sword", "plate armor");

// console.log(character1); //Character { name: 'Enemy', health: 50, attackPower: 15 }
// console.log(warrior1); // Warrior {name: 'Hero',health: 100,attackPower: 20,weapon: 'sword',armor: 'plate armor }

// // Warrior attacks character
// warrior1.attack(character1);
// console.log("Character after warrior's attack:");
// console.log(character1); //Character { name: 'Enemy', health: 20, attackPower: 15 }

// // Warrior defends
// warrior1.defend();
// console.log(warrior1); // Warrior {name: 'Hero',health: 110,attackPower: 30,weapon: 'sword',armor: 'plate armor'}

// // Check if character and warrior are alive
// console.log("Is character alive?", character1.isAlive()); // true
// console.log("Is warrior alive?", warrior1.isAlive()); // true

// Problem no. 11

// Generic Media class
// Problem no. 10

// Generic Media class
class Media {
  #mediaType;

  constructor(mediaType) {
    this.mediaType = mediaType;
  }

  // Getter for mediaType
  get mediaType() {
    return this.#mediaType;
  }

  // Setter for mediaType
  set mediaType(value) {
    if (typeof value === "string" && value.trim().length > 0) {
      this.#mediaType = value.trim();
    } else {
      throw new Error("Media type must be a non-empty string.");
    }
  }
}

// Book class inheriting from Media
class Book extends Media {
  #title;
  #author;
  #publicationYear;
  #availableCopies;

  constructor(title, author, publicationYear, availableCopies) {
    super("Book");
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.availableCopies = availableCopies;
  }

  // Getters and setters for Book properties
  get title() {
    return this.#title;
  }

  set title(value) {
    if (typeof value === "string" && value.trim().length > 0) {
      this.#title = value.trim();
    } else {
      throw new Error("Title must be a non-empty string.");
    }
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    if (typeof value === "string" && value.trim().length > 0) {
      this.#author = value.trim();
    } else {
      throw new Error("Author must be a non-empty string.");
    }
  }

  get publicationYear() {
    return this.#publicationYear;
  }

  set publicationYear(value) {
    if (Number.isInteger(value) && value > 0) {
      this.#publicationYear = value;
    } else {
      throw new Error("Publication year must be a positive integer.");
    }
  }

  get availableCopies() {
    return this.#availableCopies;
  }

  set availableCopies(value) {
    if (Number.isInteger(value) && value >= 0) {
      this.#availableCopies = value;
    } else {
      throw new Error("Available copies must be a non-negative integer.");
    }
  }

  // Static method to compare publication years of two books
  static comparePublicationYears(book1, book2) {
    if (book1.publicationYear < book2.publicationYear) {
      return -1;
    } else if (book1.publicationYear > book2.publicationYear) {
      return 1;
    } else {
      return 0;
    }
  }
}

// User class
class User {
  #firstName;
  #lastName;
  #borrowedBooks;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#borrowedBooks = [];
  }

  // Getters and setters for User properties
  get firstName() {
    return this.#firstName;
  }

  set firstName(value) {
    if (typeof value === "string" && value.trim().length > 0) {
      this.#firstName = value.trim();
    } else {
      throw new Error("First name must be a non-empty string.");
    }
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(value) {
    if (typeof value === "string" && value.trim().length > 0) {
      this.#lastName = value.trim();
    } else {
      throw new Error("Last name must be a non-empty string.");
    }
  }

  // Method to borrow a book
  borrowBook(book) {
    if (book instanceof Book && book.availableCopies > 0) {
      this.#borrowedBooks.push(book);
      book.availableCopies--;
    } else {
      throw new Error("Book is not available for borrowing.");
    }
  }

  // Method to return a book
  returnBook(book) {
    const index = this.#borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.#borrowedBooks.splice(index, 1);
      book.availableCopies++;
    }
  }

  // Static method to get the full name of a user
  static fullName(user) {
    return `${user.firstName} ${user.lastName}`;
  }
}
//don't remove below export statement part
export { Character, Warrior, Media, Book, User };
