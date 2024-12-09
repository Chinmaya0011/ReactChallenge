// The `this` keyword in JavaScript refers to the object that is executing the current function. Its behavior varies based on where and how it is used. Here's a concise explanation of its behavior in different contexts:

// ---

// ### 1. **Global Context**
// In the global scope (outside of any function), `this` refers to:
// - **In a browser**: The global object `window`.
// - **In Node.js**: The global object `global`.

// ```javascript
// console.log(this); // In browsers, logs the 'window' object.
// ```

// ---

// ### 2. **Inside a Function**
// - **Non-Strict Mode**: `this` refers to the global object (`window` in browsers).
// - **Strict Mode**: `this` is `undefined`.

// ```javascript
// function regularFunction() {
//     console.log(this);
// }

// // Non-strict mode
// regularFunction(); // Logs 'window' (in browsers).

// // Strict mode
// "use strict";
// regularFunction(); // Logs 'undefined'.
// ```

// ---

// ### 3. **Inside an Object Method**
// When `this` is used in an object method, it refers to the object itself.

// ```javascript
// const person = {
//     name: "Alice",
//     greet: function () {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// };

// person.greet(); // Logs "Hi, I'm Alice".
// ```

// ---

// ### 4. **Arrow Functions**
// Arrow functions **do not have their own `this`**. Instead, they inherit `this` from their surrounding lexical scope.

// ```javascript
// const person = {
//     name: "Alice",
//     greet: () => {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// };

// person.greet(); // Logs "Hi, I'm undefined" because `this` refers to the global object.
// ```

// To fix this, avoid using arrow functions for object methods.

// ---

// ### 5. **In Constructor Functions**
// In a constructor, `this` refers to the newly created object.

// ```javascript
// function Person(name) {
//     this.name = name;
// }

// const person = new Person("Alice");
// console.log(person.name); // Logs "Alice".
// ```

// ---

// ### 6. **In Classes**
// In class methods, `this` refers to the instance of the class.

// ```javascript
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// }

// const person = new Person("Alice");
// person.greet(); // Logs "Hi, I'm Alice".
// ```

// ---

// ### 7. **In Event Handlers**
// - **Regular Function**: `this` refers to the element that triggered the event.
// - **Arrow Function**: `this` inherits from the surrounding scope.

// ```javascript
// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//     console.log(this); // Logs the button element.
// });

// button.addEventListener("click", () => {
//     console.log(this); // Logs the global object or undefined (depends on the context).
// });
// ```

// ---

// ### 8. **Using `bind()`, `call()`, and `apply()`**
// You can explicitly set the value of `this` using these methods.

// ```javascript
// const person = {
//     name: "Alice",
//     greet: function () {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// };

// const anotherPerson = { name: "Bob" };

// person.greet.call(anotherPerson); // Logs "Hi, I'm Bob".
// person.greet.apply(anotherPerson); // Logs "Hi, I'm Bob".

// const boundGreet = person.greet.bind(anotherPerson);
// boundGreet(); // Logs "Hi, I'm Bob".
// ```

// ---

// ### Summary Table

// | Context                | `this` Refers To                                     |
// |------------------------|------------------------------------------------------|
// | Global (non-strict)    | Global object (`window` in browsers).                |
// | Global (strict)        | `undefined`.                                         |
// | Object Method          | The object that owns the method.                     |
// | Arrow Function         | Lexical `this` (inherits from the enclosing scope).  |
// | Constructor Function   | The newly created object.                            |
// | Class Method           | The instance of the class.                           |
// | Event Handler          | The element that triggered the event (for regular functions). |

// Understanding these contexts will help you avoid common `this`-related bugs!