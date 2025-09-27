# JS coding standard


## Naming Conventions
```
// ■ Bad
function d(a, b) {
    return a + b;
}
let x = d(10, 20);
```
```
// ■ Good
function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
const result = addNumbers(10, 20);
```




## Error Handling
```
// ■ Bad
function parseJSON(str) {
    return JSON.parse(str); // crashes if invalid JSON
}
parseJSON("{bad json}");
```
```
// ■ Good
function parseJSON(str) {
    try {
        return JSON.parse(str);
    } catch (error) {
        console.error("Invalid JSON provided:", error.message);
        return null;
    }
}
parseJSON("{bad json}");
```





## Avoid Magic Numbers
```
// ■ Bad
function calculateCircleArea(radius) {
    return 3.14 * radius * radius;
}
```
```
// ■ Good
const PI = Math.PI;
function calculateCircleArea(radius) {
    return PI * radius * radius;
}
```


## Use const and let (not var)
```
// ■ Bad
var name = "Alice";
name = "Bob";
```
```
// ■ Good
const appName = "MyApp";
let userName = "Alice";
userName = "Bob"; // allowed because `let` is mutable
```


## Modular Code
```
// ■ Bad
function processOrder(order) {
    // validate order
    if (!order.id) return "Invalid";
    if (order.amount <= 0) return "Invalid";
    // calculate tax
    const tax = order.amount * 0.18;
    // print invoice
    console.log(`Invoice: ${order.id}, Total: ${order.amount + tax}`);
}
```
```
// ■ Good
function validateOrder(order) {
    return order.id && order.amount > 0;
}
function calculateTax(amount) {
    return amount * 0.18;
}
function printInvoice(order, tax) {
    console.log(`Invoice: ${order.id}, Total: ${order.amount + tax}`);
}
function processOrder(order) {
    if (!validateOrder(order)) return "Invalid";
    const tax = calculateTax(order.amount);
    printInvoice(order, tax);
}
```



## Consistent Formatting
```
// ■ Bad
function getUser(id) { return { id: id, name: "John" }; }
```
```
// ■ Good (Prettier + ESLint)
function getUser(id) {
    return {
        id: id,
        name: "John",
    };
}
```



## DRY Principle
```
// ■ Bad (Repeating Code)
function calculateStudentDiscount(price) {
    return price - (price * 0.1);
}
function calculateSeniorDiscount(price) {
    return price - (price * 0.1);
}
function calculateEmployeeDiscount(price) {
    return price - (price * 0.1);
}
console.log(calculateStudentDiscount(100));
console.log(calculateSeniorDiscount(200));
console.log(calculateEmployeeDiscount(300));
```
```
// ■ Good (DRY Applied)
function calculateDiscount(price, discountRate = 0.1) {
    return price - (price * discountRate);
}
console.log(calculateDiscount(100)); // Student
console.log(calculateDiscount(200)); // Senior
console.log(calculateDiscount(300, 0.2)); // Employee (20% discount)
```
