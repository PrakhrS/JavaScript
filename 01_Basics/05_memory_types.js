// Stack(Primitive)  =>when a memory is declare in stack, you will get copy of that memory

// Heap(Non-primitive) => when memory declared in heap, you will get reference of the original. that is all changes are made to original value

let myYoutubename = "prakhar@youtube"

let anothername = myYoutubename

anothername = "hello world"

// console.log(myYoutubename);
// console.log(anothername);


let userOne = {
    email: 'user@google.com',
    upi: 'user@ybl'
}

let userTwo = userOne

userTwo.email = 'prakhar@google.com'

console.log(userOne.email);
console.log(userTwo.email);
