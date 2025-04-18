// function sayHello() {
//     let you = prompt('What is your name?');
//    console.log('Hello', you + '!');
// }
// sayHello();

// let varContainingFunction = function() {
//     let varInFunction = "I'm a variable in a function";
//     console.log("hi There!",varInFunction);
// };

// varContainingFunction();

// function tester(para1, para2) {
//     return para1 + " " + para2;
// }
// const test = tester("Hello", "World!");
// console.log(test);

// function add(a, b) {
//     console.log(a+b);
// }
// parseInt(prompt("Enter first number: ", function(a)) {
//     parseInt(prompt("Enter second number: ", function(b))) {
//         add(a, b);
//     }; 
// }

// function tester(para1, para2) {
//     return para1 + " " + para2;
// }
// const test = tester("Hello", "World!");
// console.log(test);

// let var1= prompt("Enter a number: ");
// let var2= prompt("Enter another number: ");
// console.log("The sum of " + var1 + " and " + var2 + " is: " + (parseInt(var1) + parseInt(var2)));

// function addtwoNumbers(x=3, y=4) {
//     console.log(x+y);
// }
// addtwoNumbers()
// addtwoNumbers(6,6)
// addtwoNumbers(5,3)
// addtwoNumbers(8,9,4,10)

//SPECIAL FUNCTION
// const printMessage = (message) => {
//     console.log(message);
// };
// printMessage("This is an arrow function!");

// const addNumbers = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(addNumbers(5, 7)); 


// const arr = [1, 2, 3, 4, 5];
// arr.forEach((element) => {
//     console.log(element);
// });


//SPREAD
// let spread = ('some','random','words');
// let message = ("more","random",spread,"words");
// console.log(message);

// function addNumbers(x,y) {
//     console.log(x+y);
// }
// let arr = [1,2];
// addNumbers(...arr);


//REST
// function someFunction(param1, ...param2){
//     console.log(param1,param2);
// }
// someFunction("Hello", "World", "This", "is", "a", "test");



//RETURNING FUNCTION VALUES
// function addTwoNumbers(x,y){
//     return x+y; }
// let resultArr=[];
// for(let i=0; i<10; i++){
//     let result=addTwoNumbers(i,2*i);
//     resultArr.push(result);}
        
// console.log(resultArr);

//RETURNING WITH ARROW FUNCTION
// const addTwoNumbers = (x, y) => x + y;
// let resultArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2 * i);
//     resultArr.push(result);
// }

// console.log(resultArr);


//VARIABLE SCOPE IN FUNCTION
// function scopeExample() {
//     let localVariable = "I am local to this function";
//     console.log(localVariable); 
// }

// scopeExample();

// let globalVariable = "I am global";

// function accessGlobalVariable() {
//     console.log(globalVariable); 
// }

// accessGlobalVariable();
// console.log(globalVariable); 


// function testAvailability() {
//     let text = "Hello World!";
//     console.log("Available here", text);
// }

// testAvailability();
// console.log("Not Available here", text);


// class vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("The vehicle is moving at " + this.currentSpeed + " km/h");
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//         console.log("The vehicle accelerated to " + this.currentSpeed + " km/h");
//     }

// class Motorcycle extends vehicle {
//     constructor(color, currentSpeed, maxSpeed, type) {
//         super(color, currentSpeed, maxSpeed, fuel);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("The motorcycle is doing a wheelie!");
//     }
// }
// let motor = new Motorcycle("red", 50, 150, "petrol");
// console.log(motor.color);

PaymentResponse.prototype.introduce = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
}   
let p = new personalbar("John", 30);
console.log(p.name);
p.introduce();