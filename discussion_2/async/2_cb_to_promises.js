
const fs = require("fs");
// cb based asyn function 
// console.log("Before");
// fs.readFile("f1.txt", function (err, data) {
//     if (err) {
//         console.log("Error", err)
//     } else {
//         console.log("content inide file " + data)
//     }
// })
// console.log("After");


// cb -> fn -> data , function

console.log("Before");
const obj = fs.promises.readFile("f1.txt");

// obj.status -> resolved 
obj.then(function (data) {
    console.log("data" + data);
})
obj.catch(function (err) {
    console.log("err", err);
})
console.log("After");

// function fn(data) {
//     let promiseObj = {
//         status: "pending",
//         result: undefined
//     };

//     Innerfn(promiseObj,data)
//     return promiseObj;

// }


// let promiseObj = fn("sdjfhvdsjhfvdsjh");