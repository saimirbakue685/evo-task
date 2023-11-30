/*
Filename: ComplexCode.js
Content: A complex and elaborate JavaScript code example demonstrating various concepts and techniques.
*/

// Define a class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Create multiple instances of Person
const john = new Person('John Doe', 30);
const jane = new Person('Jane Doe', 25);

console.log(john.getGreeting());
console.log(jane.getGreeting());

// Define a function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  return n * factorial(n-1);
}

console.log(factorial(5)); // Output: 120

// Use a higher-order function to filter an array based on a given condition
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(num) {
  return num % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Create a promise that resolves to a random number after a delay
function generateRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      resolve(randomNumber);
    }, 2000);
  });
}

generateRandomNumber()
  .then((number) => console.log('Random number:', number))
  .catch((error) => console.error('Error:', error));

// Demonstrate closure by creating a counter function
function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log('Count:', count);
  };
}

const counter = createCounter();
counter(); // Output: Count: 1
counter(); // Output: Count: 2

// Use destructuring assignment to extract values from an object
const user = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
};

const { name, email } = user;
console.log('Name:', name);
console.log('Email:', email);

// Generate a Fibonacci sequence using a generator function
function* fibonacci() {
  let a = 0, b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();

for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}