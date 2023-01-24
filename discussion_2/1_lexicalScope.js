var varName = 10;
// function def
function b() {
    // var is not present inside our current scope
    console.log("5",varName);
}

function fn() {
    var varName = 20;
    // fuction call
    b();
    console.log("12",varName);
}
fn();

// outer scope Works in JS :  lexical scope -> outer scope determined by fuction 

