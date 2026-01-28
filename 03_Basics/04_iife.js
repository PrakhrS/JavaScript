// Immediately Invoked Function Expressions (IFFE)

//named IFFE
(function chai(){
    console.log(`DB CONNECTED`)
})(); // semicolon is needed to stop iffe 


((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("Prakhar");
