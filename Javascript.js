{// ================== Session 1 ==================

// Changing the text content of an HTML element using its ID
document.getElementById('myh1').textContent = "hello";  

// Displaying an alert box
window.alert("alok");         

// Declaring a variable and checking its data type
let name = "alok";
console.log(typeof name); // Output: string

// Using template literals to modify text content dynamically
document.getElementById("myh1").textContent = `My name is ${name}.`;
}

{// ================== Session 2 ==================

// Prompting user input and logging it
let input;
input = window.prompt("What is your name?");  
console.log(input);

// Handling user input on button click
let username;
document.getElementById("mySubmit").onclick = function() {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`;
};

// Converting user input to different data types
let age = window.prompt("How old are you?");
age = Number(age);   // Convert string to number
age = String(age);   // Convert number to string
age = Boolean(age);  // Convert number to boolean

// Incrementing age and logging the new value
age += 1;
console.log(age);
}

{// ================== Math Operations ==================


// Math.random() generates a random decimal number between 0 and 1
let randomNum = Math.random();
console.log(randomNum);

// Math.PI provides the mathematical constant π (3.14159...)
console.log(Math.PI);

// Math.E provides Euler's number (2.718), the base of the natural logarithm
console.log(Math.E);

let z = Math.round(4.5);    // Rounds to nearest integer
z = Math.floor(4.9);        // Rounds down
z = Math.ceil(4.1);         // Rounds up
z = Math.trunc(4.98766);    // Removes decimal part
z = Math.pow(2, 3);         // Exponentiation (2^3)
z = Math.sqrt(16);          // Square root
z = Math.log(10);           // Natural logarithm
z = Math.sin(Math.PI / 2);  // Sine function
z = Math.cos(0);            // Cosine function
z = Math.tan(Math.PI / 4);  // Tangent function
z = Math.abs(-10);          // Absolute value
z = Math.sign(0);           // Returns -1, 0, or 1

// Finding the maximum and minimum values from a list
let max = Math.max(1, 2, 3);
let min = Math.min(1, 2, 3);

}

{// ================== Conditional Statements ==================

let age = 101;
if (age >= 18) {
  console.log("You are old enough to enter this site");
} else if (age < 0) {
  console.log("Your age can't be below 0");
} else if (age >= 100) {
  console.log("You are TOO OLD to enter this site");
} else {
  console.log("You must be 18+ to enter this site");
}
}

{// ================== Checkboxes and Radio Buttons ==================

// Handling a checkbox selection
mySubmit.onclick = function() {
  if (myCheckBox.checked) {
    subResult.textContent = "You are subscribed!";
  } else {
    subResult.textContent = "You are NOT subscribed!";
  }
};
}

{// ================== String Methods ==================


// Extracting the first name from the full name
let fullName = "Alok Kumar";
let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName); // Output: "Alok"

// Formatting the username to start with a capital letter
let username = "  aLok  ";
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username); // Output: "Alok"

// Various string operations
let greeting = "hello, world!";

console.log(greeting.toUpperCase());     // Convert to uppercase -> "HELLO, WORLD!"
console.log(greeting.toLowerCase());     // Convert to lowercase -> "hello, world!"
console.log(greeting.includes("world")); // Check if "world" exists -> true
console.log(greeting.startsWith("hello")); // Check if it starts with "hello" -> true
console.log(greeting.endsWith("!"));     // Check if it ends with "!" -> true
console.log(greeting.indexOf("world"));  // Get the index of "world" -> 7
console.log(greeting.replaceAll("world", "universe")); // Replace all occurrences of "world" with "universe"

// Getting the first character of a string
console.log(greeting.charAt(0)); // Output: "h"

// Finding the first occurrence of a character
console.log(greeting.indexOf("o")); // Output: 4

// Finding the last occurrence of a character
console.log(greeting.lastIndexOf("o")); // Output: 8

// Getting the length of a string
console.log(greeting.length); // Output: 13

// Trimming whitespace from both ends
let paddedString = "   Hello   ";
console.log(paddedString.trim()); // Output: "Hello"

// Repeating a string multiple times
console.log(greeting.repeat(2)); // Output: "hello, world!hello, world!"

// Padding a string from the start
let paddedStart = "5".padStart(3, "0");
console.log(paddedStart); // Output: "005"

// Padding a string from the end
let paddedEnd = "5".padEnd(3, "0");
console.log(paddedEnd); // Output: "500"

// Extracting a substring using slice()
console.log(greeting.slice(0, 5)); // Output: "hello"
console.log(greeting.slice(-6)); // Output: "world!"
}

{/* Number Precision */

// Using toFixed() to set decimal precision
let num = 5.6789;

console.log(num.toFixed(2)); // Output: "5.68" (Rounds to 2 decimal places)
console.log(num.toFixed(0)); // Output: "6" (Rounds to nearest whole number)
console.log(num.toFixed(4)); // Output: "5.6789" (Keeps 4 decimal places)
console.log(num.toFixed(6)); // Output: "5.678900" (Pads with zeros if necessary)
}


{// ================== Functions ==================

// Basic arithmetic functions
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Function to validate an email format
function isValidEmail(email) {
  return email.includes("@");
}

// Fixing decimal places
num.toFixed();
}

{// ================== Arrays ==================

let fruits = ["apple", "orange", "banana", "coconut"];
fruits.push("mango");   // Add an element at the end
fruits.pop();           // Remove last element
fruits.unshift("mango"); // Add an element at the beginning
fruits.shift();         // Remove first element

let numOfFruits = fruits.length; // Get the number of elements
console.log(numOfFruits);

fruits.sort();          // Sort array alphabetically
fruits.sort().reverse(); // Reverse sorted array

// Finding the index of an element in an array
let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits.indexOf("banana")); // Output: 1
console.log(fruits.indexOf("mango"));  // Output: -1 (not found)
}

{// ================== Spread Operator ==================

// spread operator = ... allows an iterable such as an array or string to be expanded into 
// seperate elements (unpacks the elements).

// Using spread operator to find the max value in an array
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
console.log(maximum); // Output: 5

// Splitting a string using the spread operator
let username = "Bro Code";
let letters = [...username].join("-");
console.log(letters); // Output: B-r-o- -C-o-d-e
}

{// ================== Rest Parameters ==================

// rest parameters = (...rest) allow a function work with a variable number of arguments 
// by bundling them into an array.

// Spread = Expands an array or iterable into separate elements
// Rest = Bundles separate elements into an array

// Using the rest parameter to collect arguments into an array
function openFridge(...foods) {
    console.log(foods); 
  }
  
  const food1 = "pizza";
  const food2 = "hamburger";
  const food3 = "hotdog";
  const food4 = "sushi";
  const food5 = "ramen";
  
  openFridge(food1, food2, food3, food4, food5);
  // Output: ["pizza", "hamburger", "hotdog", "sushi", "ramen"]
}

{// ================== Callback Functions ==================

// A callback function is a function passed as an argument to another function
// Used for asynchronous operations like fetching data or event handling

// “Pehle ek kaam karo, fir jab wo ho jaye, tab doosra function chalao.”


// Function that takes another function as an argument
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

// Callback function to display the result
function displayConsole(result) {
  console.log(result);
}

sum(displayConsole, 1, 2);
}

{// ================== Array Methods ==================

// .forEach() modifies the original array
let numbers1 = [1, 2, 3, 4];
numbers1.forEach((num, index, arr) => arr[index] = num * 2);
console.log(numbers1); // [2, 4, 6, 8] (original array modified)

// .map() returns a new array with changes
let numbers2 = [1, 2, 3, 4];
let doubledNumbers = numbers2.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8] (new array)
console.log(numbers2); // [1, 2, 3, 4] (original array unchanged)

// Shortcut to remember: 
// forEach → modifies 🔄
// map → returns a new array 📤

// filter() - Filtering elements based on a condition
const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
console.log(adults);

function isAdult(element) {
  return element >= 18;
}

// reduce() - Reducing array values to a single output
const grades = [75, 50, 90, 80, 65, 95];
const maxGrade = grades.reduce(getMax);
console.log(maxGrade);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}
}

{// ================== Objects ==================

// 🔹 Objects store **key-value pairs** (properties & methods).
// 🔹 Used to represent real-world entities.

const person1 = {
  name: "Spongebob",
  favFood: "hamburgers",
  sayHello: function() {
    console.log(`Hi! I am ${this.name}`);
  },
  eat: function() {
    console.log(`${this.name} is eating ${this.favFood}`);
  }
};

person1.eat();

// ================== Object.freeze() ==================

// 🔹 `Object.freeze(obj)` makes an object **immutable** (prevents modification).
// 🔹 You **cannot** add, delete, or change properties after freezing.

// ✅ Example: Freezing an Object
const person = {
    name: "John",
    age: 25
  };
  
  Object.freeze(person);
  
  person.age = 30; // ❌ No effect (can't modify)
 
  
  console.log(person); // Output: { name: "John", age: 25 }
  
  // ✅ Checking if an Object is Frozen
  console.log(Object.isFrozen(person)); // Output: true
}

{// ================== Function(Declaration,Expression) ==================

//? Function Declaration = Defines a function that can be used anywhere in the scope due to hoisting ( hoisting yane javscript apne memory me yaad rakhta)

console.log(greet("Alok")); // ✅ Works before declaration (hoisting)

function greet(name) {
    return `Hello, ${name}!`;
  }
  
  //? Function Expression = Assigns a function to a variable; it is NOT hoisted
  
  const greetExpression = function(name) {
    return `Hello, ${name}!`;
  };
  
  console.log(greetExpression("Alok")); // ✅ Must be called after declaration
  
  //? 🔥 Differences 🔥
  // 1️⃣ Function declarations are hoisted, function expressions are not.
  // 2️⃣ Function expressions are often used for callbacks, event handlers, and closures.
  // 3️⃣ Function expressions can be anonymous (without a name).

}

{// ================== Arrow Functions (=>) ==================

// 🔹 Arrow functions provide a **shorter** way to write functions.
// 🔹 They do NOT have their own `this`, making them great for callbacks.

// ✅ Syntax:
const functionName = (parameters) => someCode;

// ✅ Examples:

const hello = () => console.log("Hello"); 
hello(); // Output: Hello

const square = num => num * num;
console.log(square(4)); // Output: 16

const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// ✅ Arrow Functions in Array Methods:
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(num => num * num); 
console.log(squares); // [1, 4, 9, 16, 25]

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// ✅ When to Use:
// ✔ Short functions, Callbacks (map, filter, reduce)
// ❌ Avoid in objects & class constructors (`this` issues)

}

{// ================== this Keyword ==================

// 🔹 `this` refers to the **current object** in a given context.
// 🔹 Used to access properties/methods inside an object.

// ✅ Example: Using `this` in an Object
const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    
    sayHello: function() {
      console.log(`Hi! I am ${this.name}`);
    },
    
    eat: function() {
      console.log(`${this.name} is eating ${this.favFood}`);
    }
  };
  
  person1.sayHello(); // Output: Hi! I am Spongebob
  person1.eat();      // Output: Spongebob is eating hamburgers
}

{// ================== Constructor Function ==================

// 🔹 A special function to create and initialize objects.
// 🔹 Used with the `new` keyword to create multiple instances.

// ✅ Example: Defining a Constructor
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  
  // ✅ Creating Objects using Constructor
  const car1 = new Car("Ford", "Mustang", 2024, "red");
  const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
  
  console.log(car1.make);  // Output: Ford
  console.log(car2.model); // Output: Camaro
}


{// ================== Classes (ES6) ==================

// 🔹 A blueprint for creating objects with properties & methods.
// 🔹 Provides better structure than traditional constructor functions.

class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    displayProduct() {
      console.log(`Product: ${this.name}`);
      console.log(`Price: $${this.price.toFixed(2)}`);
    }
  
    calculateTotal(salesTax) {
      return this.price + this.price * salesTax;
    }
  }
  
  // ✅ Creating Instances
  const salesTax = 0.05;
  const product1 = new Product("Shirt", 19.99);
  const product2 = new Product("Pants", 22.50);
  
  product1.displayProduct();
  const total = product1.calculateTotal(salesTax);
  console.log(`Total price (with tax): $${total.toFixed(2)}`);
}

{// ================== Static Keyword ==================

// 🔹 Defines properties/methods that belong to the class, not instances.
// 🔹 Shared among all objects created from the class.

// class ki property hoti hai na ki object ki

class User {
    static userCount = 0; // Belongs to the class, not instances.
  
    constructor(username) {
      this.username = username;
      User.userCount++; // Increment on each new instance.
    }
  
    static getUserCount() {
      console.log(`There are ${User.userCount} users online.`);
    }
  
    sayHello() {
      console.log(`Hello, my username is ${this.username}.`);
    }
  }
  
  // ✅ Creating Users
  const user1 = new User("Spongebob");
  const user2 = new User("Patrick");
  
  user1.sayHello(); // "Hello, my username is Spongebob."
  User.getUserCount(); // "There are 2 users online."
  }

{// ================== Inheritance ==================

// 🔹 Allows a new class (child) to inherit properties/methods from an existing class (parent).
// 🔹 Promotes code reusability.

class Animal {
    constructor(name) {
      this.name = name;
      this.alive = true;
    }
  
    eat() {
      console.log(`This ${this.name} is eating.`);
    }
  
    sleep() {
      console.log(`This ${this.name} is sleeping.`);
    }
  }
  
  // ✅ Child Classes Inheriting from Animal
  class Rabbit extends Animal {
    hop() {
      console.log(`${this.name} is hopping.`);
    }
  }
  
  class Fish extends Animal {
    swim() {
      console.log(`${this.name} is swimming.`);
    }
  }
  
  const rabbit = new Rabbit("Bunny");
  const fish = new Fish("Nemo");
  
  rabbit.eat();  // "This Bunny is eating."
  fish.sleep();  // "This Nemo is sleeping."
  fish.swim();   // "Nemo is swimming."

  }

{// ================== super Keyword ==================

// 🔹 Used to call the constructor of the parent class.
// 🔹 Allows access to parent class methods/properties.

// Agar child class ka constructor likha hai, toh super() call karna zaroori hai, nahi toh error aayega.
//  Lekin agar child class ka constructor likha hi nahi, toh super() automatically call ho jata hai, aur error nahi aata.

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    move(speed) {
      console.log(`${this.name} moves at a speed of ${speed} mph.`);
    }
  }
  
  // ✅ Child Class Using `super`
  class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
      super(name, age);  // Calls parent constructor
      this.runSpeed = runSpeed;
    }
  
    run() {
      console.log(`${this.name} can run.`);
      super.move(this.runSpeed);  // Calls parent method
    }
  }
  
  const rabbit = new Rabbit("Bunny", 2, 10);
  rabbit.run(); 
  // Output: 
  // Bunny can run.
  // Bunny moves at a speed of 10 mph.
  }

  {// ================== Getters & Setters ==================

// 🔹 Getters make a property readable.
// 🔹 Setters make a property writable.
// 🔹 Useful for validation and modification when reading/writing a property.

// 💡 Getters & Setters ka use karo taki kisi property ko bina permission ya validation ke change na kiya ja sake!

// 🚀 Pehle setter check karega (valid input hai ki nahi), tabhi value update hogi. Getter safe access dega!

class Person {
  constructor(firstName, lastName, age) {
      this._firstName = firstName; // Using _ to avoid direct access
      this._lastName = lastName;
      this._age = age;
  }

  // ✅ Setter Methods (Validate & Modify Values)
  set firstName(newFirstName) {
      if (typeof newFirstName === "string" && newFirstName.length > 0) {
          this._firstName = newFirstName; // ✅ Modifies the private property safely
      } else {
          console.error("❌ First name must be a non-empty string.");
      }
  }

  set lastName(newLastName) {
      if (typeof newLastName === "string" && newLastName.length > 0) {
          this._lastName = newLastName;
      } else {
          console.error("❌ Last name must be a non-empty string.");
      }
  }

  set age(newAge) {
      if (typeof newAge === "number" && newAge >= 0) {
          this._age = newAge;
      } else {
          console.error("❌ Age must be a non-negative number.");
      }
  }

  // ✅ Getter Methods (Read Properties)
  get firstName() {
      return this._firstName;
  }

  get lastName() {
      return this._lastName;
  }

  get fullName() {
      return `${this._firstName} ${this._lastName}`;
  }

  get age() {
      return this._age;
  }
}

// ✅ Creating an Instance
const person = new Person("John", "Doe", 25);

console.log(person.firstName); // John
console.log(person.lastName);  // Doe
console.log(person.fullName);  // John Doe
console.log(person.age);       // 25

// ❌ Invalid Setters Example
person.firstName = 420;  // ❌ Error: First name must be a non-empty string.
person.age = -5;         // ❌ Error: Age must be a non-negative number.

}
  
{// ================== Destructuring in JavaScript ==================

// 🔹 Destructuring allows extracting values from arrays and objects 
//    and assigning them to variables in a convenient way.

// 🔹 `[]` → Used for array destructuring.
// 🔹 `{}` → Used for object destructuring.

// ================== Example 1: Swapping Two Variables ==================
let a = 1;
let b = 2;
[a, b] = [b, a];

console.log(a); // Output: 2
console.log(b); // Output: 1

// ================== Example 2: Swapping Elements in an Array ==================
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors); // Output: ["white", "green", "blue", "black", "red"]

// ================== Example 3: Assigning Array Elements to Variables ==================
const colorsArray = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colorsArray;

console.log(firstColor);  // Output: "red"
console.log(secondColor); // Output: "green"
console.log(thirdColor);  // Output: "blue"
console.log(extraColors); // Output: ["black", "white"]

// ================== Example 4: Extracting Values from Objects ==================
const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};

// Using default value for `job` if it's missing
const { firstName, lastName, age, job = "Unemployed" } = person2;

console.log(firstName); // Output: "Patrick"
console.log(lastName);  // Output: "Star"
console.log(age);       // Output: 34
console.log(job);       // Output: "Unemployed"

// ================== Example 5: Destructuring in Function Parameters ==================
function displayPerson({ firstName, lastName, age, job }) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Job: ${job}`);
}

displayPerson(person1);
/*
Output:
Name: Spongebob SquarePants
Age: 30
Job: Fry Cook
*/

displayPerson(person2);
/*
Output:
Name: Patrick Star
Age: 34
Job: Unemployed
*/
}

{// ================== Nested Objects ==================

// 🔹 Nested objects are objects inside other objects.
// 🔹 Helps represent complex data structures.
// 🔹 A child object is enclosed within a parent object.

// ✅ Example Structure:
//    Person { Address {}, ContactInfo {} }
//    ShoppingCart { Keyboard {}, Mouse {}, Monitor {} }

// ================== Example 1: Accessing Nested Object Properties ==================
const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {                  // nested object usecase
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Waters"
  }
};

console.log(person.fullName);        // Output: Spongebob Squarepants
console.log(person.age);             // Output: 30
console.log(person.isStudent);       // Output: true
console.log(person.hobbies[2]);      // Output: cooking
console.log(person.address.city);    // Output: Bikini Bottom

// ✅ Looping Through Nested Object Properties
for (const property in person.address) {
  console.log(person.address[property]); 
}
/* Output:
124 Conch St.
Bikini Bottom
Int. Waters
*/

// ================== Example 2: Using Classes for Nested Objects ==================

// ✅ Address Class
class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

// ✅ Person Class
class Person {
  constructor(name, age, street, city, country) {
    this.name = name;
    this.age = age;
    this.address = new Address(street, city, country);
  }
}

// ✅ Creating Objects Using Classes
const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Waters");
const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person3.address.country); // Output: Int. Waters

}

{// ================== Array of Objects ==================

// 🔹 An array can store multiple objects.
// 🔹 Each object contains multiple properties.
// 🔹 Useful for handling structured data like products, users, or items.

// ✅ Example: Array of Fruit Objects
const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 }
];

// ================== Accessing Elements ==================
console.log(fruits[3].name);  // Output: coconut

// ================== Array Methods ==================

// ✅ push() → Adds a new object at the end
fruits.push({ name: "grape", color: "purple", calories: 62 });
console.log(fruits);

// ✅ pop() → Removes the last object
fruits.pop();
console.log(fruits);

// ✅ slice() → Extracts part of the array (does not modify original)
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);

// ================== Array Iteration Methods ==================

// ✅ forEach() → Loops through each object
fruits.forEach(fruit => console.log(fruit.calories));
/* Output:
95
45
105
159
37
*/

// ✅ map() → Creates a new array of selected properties
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames); // Output: ["apple", "orange", "banana", "coconut", "pineapple"]

// ✅ filter() → Filters objects based on a condition
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);
/* Output:
[
  { name: "banana", color: "yellow", calories: 105 },
  { name: "pineapple", color: "yellow", calories: 37 }
]
*/

// ✅ reduce() → Finds max & min calorie fruit
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(maxFruit); // Output: { name: "coconut", color: "white", calories: 159 }
console.log(minFruit); // Output: { name: "pineapple", color: "yellow", calories: 37 }
}

{// ================== Sorting in JavaScript ==================

// 🔹 The `sort()` method is used to sort elements of an array in place.
// 🔹 By default, it sorts elements as strings in **lexicographic order** (alphabet + numbers + symbols).

// ================== Example 1: Sorting Numbers ==================
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// ✅ Ascending Order (Small → Large)
numbers.sort((a, b) => a - b);
console.log(numbers);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ✅ Descending Order (Large → Small)
numbers.sort((a, b) => b - a);
console.log(numbers);  // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ================== Example 2: Sorting Objects ==================
const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "Patrick", age: 37, gpa: 1.5 },
  { name: "Squidward", age: 51, gpa: 2.5 },
  { name: "Sandy", age: 27, gpa: 4.0 }
];

// ✅ Sort by Age (Ascending)
people.sort((a, b) => a.age - b.age);
console.log(people);

// ✅ Sort by Name (Alphabetically)
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

// ================== localeCompare() ==================
// 🔹 `localeCompare()` compares strings alphabetically, considering case & locale.
// 🔹 It returns:
//    - `-1` if `a` comes before `b`
//    - `0` if `a` and `b` are equal
//    - `1` if `a` comes after `b`

console.log("apple".localeCompare("banana"));  // Output: -1
console.log("grape".localeCompare("apple"));   // Output: 1
console.log("orange".localeCompare("orange")); // Output: 0
}

{// ================== Fisher-Yates Shuffle Array Algorithm ==================

// 🔹 The Fisher-Yates algorithm shuffles an array in place efficiently.

// 🔹 It works by iterating backward through the array and swapping each element
//    with a randomly chosen earlier element (including itself).

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);
console.log(cards); // Output: Random shuffled order of cards

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {   // Start from last index
    const random = Math.floor(Math.random() * (i + 1));  // Random index from 0 to i
    [array[i], array[random]] = [array[random], array[i]]; // Swap elements
  }
}
}

{// ================== Date Objects in JavaScript ==================

// 🔹 Date objects store date & time information.
// 🔹 They provide methods to get & set date values.
// 🔹 Dates can be formatted and manipulated easily.

// ✅ Creating a Date Object
const date = new Date(); // Current date & time

// ================== Getting Date Components ==================
const year = date.getFullYear();  // ✅ Get the year
const month = date.getMonth();    // ✅ Get the month (0 = Jan, 11 = Dec)
const day = date.getDate();       // ✅ Get the day of the month
const hour = date.getHours();     // ✅ Get the hour (0-23)
const minutes = date.getMinutes();// ✅ Get the minutes
const seconds = date.getSeconds();// ✅ Get the seconds
const dayOfWeek = date.getDay();  // ✅ Get the day of the week (0 = Sunday, 6 = Saturday)

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

// ================== Setting Date Components ==================
date.setFullYear(2024);  // Set the year
date.setMonth(0);        // Set month to January (0-based)
date.setDate(1);         // Set day of the month
date.setHours(2);        // Set hour
date.setMinutes(3);      // Set minutes
date.setSeconds(3);      // Set seconds

console.log(date); // Output: Modified date object

// ================== Comparing Dates ==================
const date1 = new Date("2023-12-31");  // 31st Dec 2023
const date2 = new Date("2023-12-30");  // 30th Dec 2023

if (date2 > date1) {  // Corrected comparison
    console.log("HAPPY NEW YEAR!");  
} else {
    console.log("Still waiting...");
}

// ================== Formatting a Date ==================
console.log(date.toDateString());  // Example: "Mon Jan 01 2024"
console.log(date.toLocaleDateString()); // Example: "1/1/2024" (Depends on locale)
console.log(date.toISOString());   // Example: "2024-01-01T02:03:03.000Z"

// ================== Notes on Date ==================
// 🔹 Months are 0-based (Jan = 0, Dec = 11).
// 🔹 `.getDay()` returns day index (0 = Sunday, 6 = Saturday).
// 🔹 `.toISOString()` returns UTC time in a standard format.
}

