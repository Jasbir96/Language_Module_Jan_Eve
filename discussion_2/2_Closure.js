// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     return innerFunction
// }

// const innerFunc = outerFunction();
// console.log("b/w");
// console.log(innerFunc());
// console.log(innerFunc());
// console.log(innerFunc());


function createCounter(init, delta) {
    function count() {
        init = init + delta;
        return init
    }
    return count
}
let c1 = createCounter(10, 5);
let c2 = createCounter(5, 2);

console.log(c1())
console.log(c2())

console.log(c1())
console.log(c2())