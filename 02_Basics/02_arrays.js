const marvel_heros = ["thor", "ironman", "captain america"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heroes)

// console.log(marvel_heros)

// const newArr = marvel_heros.concat(dc_heroes)      //concat creates a new array
// console.log(newArr)

const all_new_heroes = [...marvel_heros, ...dc_heroes]
console.log(all_new_heroes);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray('Prakhar'));
console.log(Array.from('Prakhar'));

console.log(Array.from({name: "Prakhar"})); //tricky

let s1= 100
let s2= 200
let s3= 300

console.log(Array.of(s1, s2, s3))

