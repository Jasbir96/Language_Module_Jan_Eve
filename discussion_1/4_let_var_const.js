// var a = 10;
// console.log("line number 2", a);
// function fn() {
//     console.log("line number 4", a);
//     var a = 20;
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//          a = 30;
//         a++;
//         console.log("line number 11", a);
//     }
//     console.log("line number 13", a);
// }
// fn();


//  var if function scope 




// function fn() {
//     // you can redeclare a var variable again 
//     var a = 10;
//     var a = 20;
//     console.log("line number 2", a);
// }
// fn();



//*******let******/

let a = 10;
console.log("line number 36", a);
function fn() {
    let a ;
    console.log("line number 38", a); // TDZ
    a=20;
    a++;
    console.log("line number 41", a);
    if (a) {
        let a = 30;
        a++;
        console.log("line number 45", a);
    }
    console.log("line number 47", a);
}
fn();