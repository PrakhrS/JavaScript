//Singleton
// Object.create()


//Object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Prakhar",
    "full name": "Prakhar Soni",
    [mySym]: "mykey1",
    age: 21,
    location: "Noida",
    email: "prakhar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //prefer this

// console.log(JsUser[mySym])

// Object.freeze(JsUser) //no changes will take place on the object. There will no error even trying to change values

JsUser.greeting = function(){
    console.log("Hello World")
}

JsUser.greetingTwo = function(){
    console.log(`Hello ${this["full name"]}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
