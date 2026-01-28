let myDate = new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())


console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23) //Months in JS start from 0 that is January is 0, February is 1 and so on .

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay());

newDate.toLocaleString('default', {weekday: 'long'})

console.log(newDate)