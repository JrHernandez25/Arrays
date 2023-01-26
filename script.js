"use strict"

console.log("Hello World");

const animals = [" Tiger ", " Penguin ", " Jaguar ", " Bird "];
for(let i=0; i<animals.length; i++){
 console.log(animals[i]);
let start = 3;
let deleteItem = 1;
animals.splice(start, deleteItem);
document.write(animals[i]);
}
animals.push("Pig");

console.log(animals);

const sports = [' Soccer ', "Football", 'Baseball', "Tennis"];
for(let i=0; i<sports.length; i++){
    document.write("<ul>", sports[i], "</ul>");
}
console.log(sports)

