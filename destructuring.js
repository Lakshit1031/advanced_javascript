// const person = {
//   firstname: 'John',
//   lastname: 'Doe',
//   age: 30
// }

// let { firstname, lastname, age, country = "India" } = person;

// console.log(firstname); // John
// console.log(lastname); // Doe
// console.log(age); // 30
// console.log(country); // India
// console.log(person); // { firstname: 'John', lastname: 'Doe', age: 30, country: 'India' }

//destructuring is not destructive

// let fname = "JohnDoe";
// let [a1,a2,a3,a4,a5] = fname; //undefined
// console.log(a1); // undefined
// console.log(a2); // undefined       
// console.log(a3); // undefined
// console.log(a4); // undefined
// console.log(a5); // undefined

const fruits = [ 'apple', 'banana', 'orange', 'mango' ];
// let [fruit1,,,fruit2] = fruits; 
// console.log(fruit1); 
// console.log(fruit2); 

// let {[0]: fruit1, [1]: fruit2} = fruits

// const numbers = [10,20,30,40,50,60,70];

// const[a,b, ...rest] = numbers
// console.log(a,b);

// const fruits = new Map([
//     ['apple', 500],
//     ['banana', 300],
//     ['orange', 200]
// ]);

// let text = "";
// for(const[key,value] of fruits){
//     text+= key+ "is" +value;
// }
// console.log(text)

//console.log(fruits.includes("Mangoes")); // false

//TRAILING COMMAS

const arr = ["one", "two", "three",, ];
console.log(arr)
console.log(arr.length)

