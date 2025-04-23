const fruits = new Map([
    ['apple', 500],
    ['banana', 300],
    ['orange', 200]
]);
console.log(fruits);

const fruits2 = new Map();
fruits2.set('apple', 500);
fruits2.set('banana', 300);
fruits2.set('orange', 200);
console.log(fruits2);

console.log(fruits.get('apple')); // 500
console.log(typeof fruits); // 300
console.log(fruits instanceof Map); // true

//JAVASCRIPT MAP METHODS
console.log(fruits.size); // 3
// fruits.delete('banana'); // remove banana from the map
console.log(fruits.size); // 2
//fruits.clear(); // remove all elements from the map
console.log(fruits.has('banana')); // false
// fruits.forEach((value, key) => {
//     console.log(key, value); // apple 500 orange 200
// });

let text = "";
fruits.forEach(function(value, key) {
    text += key + " = " + value + "\n";
});
console.log(text); // apple = 500 orange = 200
console.log(typeof text); // string
console.log(text instanceof String); // false

let textEntries = "";
for (const x of fruits.entries()){
    textEntries += x;
}
console.log(textEntries); // [object Map Iterator] [object Map Iterator]

let textKeys = "";
for (const x of fruits.keys()){
    textKeys += x;
}
console.log(textKeys); // appleorange

let textValues = "";
for (const x of fruits.values()){
    textValues += x;
}
console.log(textValues); 