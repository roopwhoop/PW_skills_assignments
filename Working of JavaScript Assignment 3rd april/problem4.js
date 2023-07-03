// 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

{
    console.log(x); // undefined
    console.log(y); // refrence error
    console.log(z); //refrence error

    var x = "we";
    let y = "are";
    const z = "indian";

    console.log(x); // we
    console.log(y); // are
    console.log(z); // indian

}