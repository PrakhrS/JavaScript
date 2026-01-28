 if(true){
    let a = 10
    const b = 20
    var c = 30
 }

//  console.log(a) //error
//  console.log(b) //error
//  console.log(c) //will print the value. That is the reason var is avoided


function one(){
    const username = "Prakhar"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()


if(true){
    const username = "Prakhar"
    if (username === "Prakhar"){
        const website = " Youtube"
        //console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)


/* ++++++++++++++++++++++++++++++++ */


console.log(addone(5));

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

