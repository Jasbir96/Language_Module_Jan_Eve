// let a = true;
// console.log("Before");
// // minimum time 
// setTimeout(() => {
//     a = false;
//     console.log("a",a);
//     console.log("I broke the while loop");
// }, 1000);
// console.log("After");

// // while (a) {

// // }


// asynchronous function is given by your env
// every line of JS code will excute on your call stack



console.log("Before");

const cb2 = () => {
    console.log("set timeout 1");
    while (1) {
    }
}
const cb1 = () => console.log("hello");
// -> 1sec
setTimeout(cb2, 1000)
 // -> 2 sec   
setTimeout(cb1, 2000)

console.log("After");