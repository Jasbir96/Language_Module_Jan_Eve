
// real();
// function real() {
//     console.log("I am real. Always run me");
// }
// function real() {
//     console.log("No I am real one ");
// }


// function real() {
//     console.log("You both are wasted");
// }


// console.log("Hi ",a); // a-> undefined
// var a;

// console.log("Hi",a); // a-> undefined
// a=5;
// console.log("Hi", a); // a-> undefined












//1. code execution -> call Stack 

//2.  A bubble -> Execution context  -> when your excute your code/ function is invocked 

                // 1. Creation
                            // global Object -> window/ global ,
                            // this
                            // memory allocation ->hoisting 
                                        // function -> there memory is allocated inside heap 
                                        // var -> undefined
                            // outer scope

                // 2. code execution 


// TDZ(Temporal Dead Zone) // -> lines above decalration of a let or const -> where you can;t acces the  varibale
// console.log("a", a);
let a;
console.log("a",a);
