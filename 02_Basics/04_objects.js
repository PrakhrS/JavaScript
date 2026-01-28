//Singleton object
// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prakhar",
            lastname: "Soni"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({},obj1, obj2)
 //good habit to add parenthesis in the starting. Empty parenthesis acts as a target object and rest act as source

const obj3 = {...obj1, ...obj2} //Spread operator (used 90% of the time)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))


//Destructuring objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Prakhar"
}

const {courseInstructor: instructor} = course //can give a shorter name

console.log(instructor)


