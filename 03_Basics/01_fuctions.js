function sayMyName(){

}

sayMyName

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
// addTwoNumbers(3, 'a')

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){     //username === undefined
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Prakhar"))
// console.log(loginUserMessage())


function calculateCartPrice(...num1){        //here(...) it is rest operator
    return num1
}

// console.log(calculateCartPrice(200, 300, 500))


const user = {
    username: "Prakhar",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))