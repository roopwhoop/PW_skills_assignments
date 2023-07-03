// 05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.

{
    console.log(x); // refrence error
    
    let x = "Hii";

    console.log(x); // hii
}