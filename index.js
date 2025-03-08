{/* session 1
  document.getElementById('myh1').textContent = "hello"; 
 // ?                                         (html me kisi bi id ke text ko change krna)
  window.alert("alok");         
 // ?                       ( alert bhejna )

let name = "alok";
console.log(typeof name) 
//  ?                       (type of datatype)

document.getElementById("myh1").textContent = `My name is ${name} .` 
*/}


{// session 2
//let input;
 
// input = window.prompt(`what is ur name?`) 
// ?                                           (user input lena)

//console.log(input)

// let username;
// document.getElementById("mySubmit").onclick = function(){
// username = document.getElementById("myText").value;
// document.getElementById("myH1").textContent = ' Hello ${username} '}
//  ?                                                        (on click use and value store, user input)


//let age = window.prompt("How old are you?");

// age = Number(age) ;
// age = String(age) ;
// age = Boolean(age) ;
// ?                (data type conversion)

//age+=1;
// console.log(age);
}


{ //?                    (math usecase)
  // Math.random();
// Math.PI
// Math.E
//z = Math.round(x) ;           
//z = Math.floor(x);   eg 4.9 = 4
//z = Math.ceil(x);    eg 4.1 = 5
//z = Math.trunc(x) ;    eg remove decimal part == 4.98766 = 4
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);         positive only
//z = Math.sign(x) ;
//let max = Math.max(x, y, z);
//let min = Math.min(x, y, z);

}


{ // ?                             (if else use)
  //let age = 101;

//if(age >= 18){
//console. log("You are old enough to enter this site");}

//else if(age < 0){
//console. log("Your age can't be below 0");

//}
//else if(age >= 100){
//onsole. log("You are TOO OLD to enter this site");

//}
//elset
//console. log("You must be 18+ to enter this site");
//}

}

 {//?                          to check the checkboxes , radio 
//mySubmit.onclick = function(){
 // if (myCheckBox.checked){

//subResult.textContent = You are subscribed!';
//  else
  //subResult.textContent = 'You are NOT subscribed!*;
 }

{// ?                           string methods
  // string.charAt()
  // string.indexOf("")
  // string.lastIndexOf("")
  // string.length
  // string.trim()          (white spaces)
  // string.toUpperCase()
  // string.toLowerCase()
  // string.repeat()
  // string.startsWith("")
  // string.endsWith("") 
  // string.includes("")
  // string.replaceAll("","")
  // string.padStart( num , "")
  // string.padEnd( num , "")
  // string.slice(start, end)

  // let firstName = fullName.slice(0, fullName.indexOf(" "))

}

 // username = username.trim().charAt(0).toUpperCase() + username.trim().slice().toLowerCase()

   //  ?                        method chaining


    {  // ?                                          usecase of function
   // function add(x, y){
   //  return x + y;
    // }
    // function subtract(x, y){
   //  return x - y;
   //  function multiply(x, y){
   // return x * y;
   // }
   //  function divide(x, y){
   // return x / y;
   // }
   // function isEven (number){
   // return number % 2 === 0 ? true: false;
   // ｝
   // function isValidEmail (email){
   // return email. includes("@") ? true : false;
    }


   // num.toFixed()
   // ?          to set precision



   {// ?                     array
   // let fruits = ["apple", "orange", "banana", "coconut"];

    // fruits. push ("coconut");         add krna last se
    //fruits. pop);                     del krna last se
    // fruits.unshift ("mango");          add krna start se
    //fruits.shift();                     del krna start se
    // let numOfFruits = fruits.length;          length
   // console. log(numOfFruits);
   // array.indexOf()                    index puchna
   // array.sort()                        sort in alphabetical order
   // array.sort().reverse()                        sort in  reverse alphabetical order

   }

{// ?                    spread operator
   // spread operator = ... allows an iterable such as an array or string to be expanded into 
   // seperate elements (unpacks the elements).

// let numbers = [1, 2, 3, 4, 5];
//let maximum = Math. max(... numbers);
// console. log(maximum);


//let username = "Bro Code";
// let letters = [...username].join("-");
}


{// ?                rest parameter

// rest parameters = (...rest) allow a function work with a variable number of arguments 
// by bundling them into an array.

// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array



 // function openFridge(... foods){
 // console. log (foods) ;
 // ｝
 // const foodi = "pizza";
 // const food2 = "hamburger";
 // const food = "hotdog";
 // const food4 = "sushi" ;
 // const food5 = "ramen";

 // openFridge(foodl, food2, food, food4, food5);
}



{// ?    call back
// callback = a function that is passed as an argument
//            to another function.

/* sum(displayConsole, 1, 2);
function sum (callback, x, y){
let result = x + y;
callback(result);
function displayConsole(result){
console. log(result);
}
} 
*/}

{//?    for each 
/* forEach() = method used to
iterate over the elements
of an array and apply a specified function (callback)
to each element
array. forEach(callback)

eg: 
numbers. forEach(square);

numbers. forEach(display);

function double (element, index, array){
array [index] = element * 2;
}

function triple(element, index, array){
array [index] = element * 3;
}

function square (element, index, array){
array [index] = Math. pow (element, 2);

function display(element){
console.log(element);
}





*/
}

// difference between .map() and forEach() is ..    forEach make changes in that array but map returns a new array with changes done !

{//?  .map
/*   •map() = accepts a callback and applies that function
     to each element of an array, then return a new array





const dates = ["2024-1-10",
"2025-2-20", "2026-3-30"];

const formattedDates = dates.map (formatDates);

console. log(formattedDates) ;

function formatDates (element) {
const parts = element.split("-");

return *${parts [2])/${parts[1}/${parts[0]}* ;
｝

*/}


{//? • filter) = creates a new array by filtering
 /*                                out elements



const ages = [16, 17, 18, 18, 19, 20, 601;
const adults = ages. filter(isAdult);
console. log(adults);
function isAdult(element){
return element >= 18;


*/
}




{//? .reduce() = reduce the elements of an
/*                      to a single value


const grades = [75, 50, 90, 80, 65, 951];

const maximum = grades.reduce();

function getMax(accumulator, element){
return Math.max(accumulator, element);
}


*/
}

{ //?  function declaration = define a reusable block of code
/*                          that performs a specific task


aisa function jo hr jagah use kr sakte !



///? function expressions = a way to define functions as
values or variables

usecase :


1. Callbacks in asynchronous operations
2. Higher-Order Functions
3. Closures
4. Event Listeners

eg:  

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map (function (element){
return Math. pow (element, 2) ;
1) ;
const cubes = numbers.map(function (element){
return Math. pow (element, 3) ;
});
const evenNums = numbers. filter(function (element){
return element % 2 === 0;
}) ;
const oddNums = numbers. filter (function (element){
return element % 2 !== 0;
}) ;
const total = numbers. reduce(function (accumulator, element){
return accumulator + element;
});
console. log(total);




*/}


{ //? arrow functions = a concise way to write function expressions
 /*                 good for simple functions that you use only once
                            (parameters) => some code

                            const hello = () => console. 1og("Hello");
                                                                       hello() ;

*/}


{ //? // object = A collection of related properties and/or methods
 /*                       Can represent real world objects (people, products, places)
object = {key: value,
function ( )}


eg: 

const person1 = {
firstName: "Spongebob",
lastName: "Squarepants" ,
age: 30,
isEmployed: true,
sayHello: function (){console.10g("Hi! I am Spongebob!")},
eat: function (){console.log("I am eating a Krabby Patty")},


const person2 = {
firstName: "Patrick",
lastName: "Star",
age: 42,
isEmployed: false,
sayHello: () => console. 10g("Hey, I'm Patrick..."),
eat: () => console.log("I am eating roast beef, chicken, and pizza"),


person1.eat ();
person2. eat() ;

*/}


{ //? this ??
 /*
 this = reference to the object where THIS is used
             (the object depends on the immediate context)
 person. name = this. name

const person1 = {
name: "Spongebob"
favFood: "hamburgers",
sayHello: function(){console.log(*Hi! I am ${this.favFood}* )},
eat: function() {console.log(*${this.name} is eating ${this.favFood}* )]
}

person1.eat()

*/}

{ //?  constructor = special method for defining the
  //?                   properties and methods of objects
 /*

function Car (make, model, year, color){
this.make = make,
this.model = model,
this.year = year,
this.color = color
｝
const car1 = new Car ("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro" , 2025 , "blue"):

console.log(car1.make) ;
console.log (car1.model);
console.log(car1.year);
console.log(car1.color);

*/}

{ //?  class = (ES6 feature) provides a more structured and cleaner way to
 // ?          work with objects compared to traditional constructor functions
 //?                ex. static keyword, encapsulation, inheritance
/*


class Product{
constructor (name, price){
this.name = name;
this.price = price;

displayProduct (){
console. log(`Product: ${this.name}`);
console. log('Price: $${this.price.toFixed (2)});

calculateTotal(salesTax){
return this.price + (this.price * salesTax);
｝
const salesTax = 0.05;

const producti = new Product ("Shirt", 19.99);
const product2 = new Product ("Pants", 22.50);
const product = new Product ("Underwear", 100.00);

product3.displayProduct();
const total = product3.calculateTotal(salesTax);
console. log( Total price (with tax): $${total.toFixed (2)}*);

*/}


{ //?  static keyword = that defines properties or methods that belong
  //? to a class itself rather than the objects created
  //? from that class (class owns anything static, not the objects)
  
/*


class User{


static userCount = 0;

constructor (username) [
this. username = username;
User.userCount++;



static getUserCount(){
console. log( There are ${User.userCount} users online*);
}
sayHello(){
console. log( Hello, my username is ${this.username}*);
}
const user1 = new User ("Spongebob" );
const user2 = new User ("Patrick");
const user3 = new User ("Sandy");
*/}



{ //?  inheritance = allows a new class to inherit properties and methods
  //? from an existing class (parent -> child)
  //? helps with code reusability
  
/*


class Animal{
alive = true;
console. log(' This ${this.name} is eating );
}
sleep (){
｝
}
}
class Rabbit extends Animal{..
class Fish extends Animal{..
• class Hawk extends Animal{...
}
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
console. log(hawk.alive);
hawk.eatO);
console. log(' This ${this.name} is sleeping*);
*/

}


{ //?  super = keyword
  //?          is used in classes to call the constructor or
  //?     access the properties and methods of a parent (superclass)
  //?            this = this object
  //?                  super = the parent
  
/*
class Animal{
constructor (name, age){
this. name = name;
this. age = age;
}
move (speed) {
console. log(' The ${this name} moves at a speed of ${speed}mph*);
｝
class Rabbit extends Animal{
constructor (name, age, runSpeed) {
super (name, age);
this.runSpeed = runSpeed;
｝
runk
console. log( This ${this. name} can run*);
super. move (this.runSpeed);


*/

}


{ //?  super = keyword
  //?          is used in classes to call the constructor or
  //?     access the properties and methods of a parent (superclass)
  //?            this = this object
  //?                  super = the parent
  
/*


*/

}

{ //?  super = keyword
  //?          is used in classes to call the constructor or
  //?     access the properties and methods of a parent (superclass)
  //?            this = this object
  //?                  super = the parent
  
/*


*/

}


{ //?  getters and setters

  // getter = special method that makes a property readable

// setter = special method that makes a property
 //writeable


// validate and modify a value when reading/writing property

/* class Person{
constructor (firstName, lastName, age){
this.firstName = firstName;
this. lastName = lastName;
this. age = age;
}

set firstName (newFirstName){
if(typeof newFirstName === "string" && newFirstName. length › 0
this._firstName = newFirstName;
else{
console.error("First name must be a non-empty string"D;
}
set age (newAge) {
if(typeof newAge === "number" && newAge ›= 0){
this._ age = newAge;
}
elset
console.error ("Age must be a non-negative number");
}
}
get firstName(){
return this._firstName;
}
get lastName (){
return this._lastName;
get fullName (){
return this._firstName + " " + this._ lastName;
get age ( )K
return this._age;

const person = new Person(420, 69, "pizza");
console.1og(person. firstName);
console.1og(person. lastName) ;
console.log(person.age); 









*/

}

{ //? // destructuring = extract values from arrays and objects,
  //   then assign them to variables in a convenient way
  //  [] = to perform array destructuring
  //  {} = to perform object destructuring
  //          5 examples
 
  /*

- -
EXAMPLE 1
         SWAP THE VALUE OF TWO VARIABLES
let a = 1;
let b = 2;
[a, b] = [b, al;
console. log(a);
console. 1og(b);


- - -
EXAMPLE 2 --
- - - - - - — - — —
          SWAP 2 ELEMENTS IN AN ARRAY
const colors = ["red"
", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console. log(colors);



---------- EXAMPLE 3 ---
              ASSIGN ARRAY ELEMENTS TO VARIABLES
const colors = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extracolor] = colors;
console. log(firstcolor);
console. log (secondColor);
console. log(thirdColor);
console. log(extraColor);



ーーーー
EXAMPLE 4
- - -

   EXTRACT VALUES FROM OBJECTS
const person1 =
firstName: "Spongebob"
lastName: "SquarePants" ,
age: 30,
job:
"Fry Cook"
｝
const person2 = {
firstName: "Patrick",
lastName: "Star"
age: 34,
}

const
{firstName, lastName, age, job="Unemployed"} = person2;
console. log (firstName);
console. log(lastName) ;
console. log (age);
console. log(job);


-
EXAMPLE 5
      / DESTRUCTURE IN FUNCTION PARAMETERS
function displayPerson({firstName, lastName, age, job}){
console. log(* name: ${firstName} ${lastName}*);
console. log(* age: ${age}*);
console. log(job: #{job}*);
}
const person1 =
firstName: "Spongebob",
lastName: "SquarePants",
age: 30,
job: "Fry Cook",
}
const person2 = {
firstName: "Patrick",
lastName: "Star",
age: 34,
｝
displayPerson(person2);


  */


}

{ //?  nested objects = Objects inside of other Objects.
  //    Allows you to represent more complex data structures
 //       Child Object is enclosed by a Parent Object.


  //    Person{Address{}, ContactInfo{}}
  //           ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
 
  /*const person = {
    FullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
    street: "124 Conch St.",
    city: "Bikini Bottom"
    country: "Int. Water"
    ｝
    console. log(person.fullName);
    console. log(person. age);
    console. log(person.isStudent);
    console. log(person.hobbies [2]);
    console. log(person.address.cityb;
 
for(const property in person. address){
console. 1og(person.address[property]l);
}

class Person{
constructor (name, age, ... address){
this.name = name;
this. age = age;
this.address = new Address... address) ;
}
class Address{
constructor (street, city, country)
this.street = street;
this.city = city;
this.country = country;
}
const personi = new Person ("Spongebob", 30, "124 Conch st.",
"Bikini Bottom",
"Int. Waters");
const person2 = new Person ("Patrick", 37,
"128 Conch St."
"Bikini Bottom"
J
"Int. Waters");
const person3 = new Person ("Squidward", 45, "126 Conch st.",
"Bikini Bottom",
"Int. Waters");
console. log(person3.address. country);
  

  */
}


{// ? array of objects
  /*
  
  const fruits = [{name: "apple", color: "red", calories: 95},
{name: "orange"
', color: "orange"
', calories: 45},
{name: "banana"
', color: "yellow", calories: 105},
{name:
"coconut"
', color: "white", calories: 159},
{name: "pineapple", color: "yellow", calories: 37}];


console. log(fruits[3]
- name ) ;

fruits.push()
fruits.pop()
fruits.slice()

forEach()
fruits. forEach(fruit =› console.log(fruit.calories));


•- map()
- - - - - -
const fruitNames = fruits.map(fruit =›> fruit.name);
console.1og(fruitNames) ;
  
filter() -
const yellowFruits = fruits. filter(fruit => fruit.color === "yellow");
console. log(yellowFruits) ;
  

ーーー
- - reduce) --
const maxFruit = fruits.reduce( (max, fruit) =›
fruit. calories › max.calories ?
fruit : max);
const minFruit = fruits.reduce( (min, fruit) =>
fruit. calories ‹ min.calories ?
fruit : min);
console. log(maxFruit);
console.log(minFruit);
  
  
  */

}


{ //? // sort() = method used to sort elements of an array in place.
  // Sorts elements as strings in lexicographic order, not alphabetical
  // lexicographic = (alphabet + numbers + symbols) as strings

  /*
  
  let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers. sort((a, b) => a - b);
numbers. sort((a, b) => b - a);
console. log (numbers) ;
  
  
  const people = [{name: "Spongebob", age: 30, ga: 3.0},
(name: "Patrick", age: 37, gpa: 1.5},
{name: "Squidward", age: 51, gpa: 2.5},
{name: "Sandy", age: 27, gpa: 4.0}]
people. sort((a, b) => a.age - b.age);
console. log(people) ;

people. sort((a, b) => a. name. localeCompare(b.name)); //localecompare ? 
console. log(people);
  
  
  
  
  
  
  
  */
}

{//? shuffle an array (Fishers yats algorithm)
  /*

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards) ;
console. log(cards) ;
function shuffle(array)E
for(let i = array. length - 1; i › 0; i--){
const random = Math. floor (Math. random () * (i + 1));
[array[i], array[random]] = [array[random], array[i]l;
} how is this even working
  
  
  */ 
}


{ //? // Date objects = Objects that contain values that represent dates and times
   //                   These date objects can be changed and formatted

   /*
const date = new Date;

const year = date .getFullYear();
const month = date. getMonth ();
const day = date. getDate() ;
const hour = date getHours);
const minutes = date getMinutes();
const seconds = date. getSeconds ();
const dayofWeek = date. getDay() ;

console. log (year);
console. log(month);
console. log (day);
console. log (hour);
console. log(minutes);
console. log (seconds) ;
console. log(dayOfWeek) ;

date.setFullYear (2024);
date. setMonth(0) ;
date.setDate (1);
date. setHours (2);
date.setMinutes (3);
date.setSeconds (3);

const datel = new Date("2023-12-31");
const date2 = new Date("2023-12-30");
if(date2 › date1){
console. log( "HAPPY NEW YEAR!");
}

   */

}

{//? closure = = A function defined inside of another function,
              //   the inner function has access to the variables
//        and scope of the outer function.Allow for private variables and state maintenance
 //           Used frequently in JS frameworks: React, Vue, Angular
  
/*
function outer){
let
message = "Hello";
function inner(){
console. log(message);
inner ();
}
outer ( );
*/

}
