const userEmail = "p@prakhar.ai"

// if (userEmail) {
//     console.log("Got user email")
// } else{
//     console.log("Don't have user email")
// }


//Falsy Values
/*

false
0
-0
Bigint - 0n
""
null
undefined
NaN


*/

// all other are truthy values

const myArr = []

// if (myArr.length === 0) {
//     console.log("Array is empty");
    
    
// }

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
       
// }

//false == 0
//false == ''    all are true
//0 == ''


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20 //first value is assigned
console.log(val1);


// Terniary Operator

/*    condition ? true : false    */

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

