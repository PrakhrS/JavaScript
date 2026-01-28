const myArr = [0,1,2,3,4,5, true, "Prakhar"]

console.log(myArr[0])

// const newArr = new Array('prakhar', 4 , true)


// Array methods

myArr.push(6) //Item added at last of array
myArr.pop() //last element is removed

myArr.unshift(9) //element added at start

myArr.shift() //first element is removed

console.log(myArr.includes(9))

console.log(myArr.indexOf(3))

const newArr = myArr.join() // newArr will be string and not an array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //doesn't change the original array

const myn2 = myArr.splice(1, 3) //it modifies the original array that is it pops those elements given in the range
console.log(myn2)