const user = {
    username: "Prakhar",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) //this => current context
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this)
//     console.log(this.username); //this doesn't work in functions
    
// }

// chai()

const chai = () =>{
    let username = "Prakhar"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

//Implicit Function
// const addTwo = (num1, num2) =>  num1+num2
// const addTwo = (num1, num2) =>  (num1+num2)
const addTwo = (num1, num2) =>  ({username: "Prakhar"})

console.log(addTwo(2,3));


