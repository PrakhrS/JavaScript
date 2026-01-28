const name = "prakhar"
const repoCount = 50

//console.log(name + repoCount + " Value"). // not a good way

//Modern way
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//other way of string declaration

const gameName = new String('prakharsoni')

/* String methods */

// console.log(gameName)

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('p'));


const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(0, 4)
console.log(anotherString);


// slice can take negative values but substring cannot. If given negative values to substring it will start from 0

const newStringOne = "   PRAK   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://prakhar.com/prakhar%20soni"

console.log(url.replace("%20", "-"));
  