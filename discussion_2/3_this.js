// let cap = {
//     name: "Steve",
//     sayHi: function () {
//         // console.log(this == global);
//         console.log("Hi from ", this.name);
//     }
// }
// // method call -> this -> current Obj
// cap.sayHi();

// let sayHiAdd = cap.sayHi;
// // function call -> this -> global 
// sayHiAdd();


// this if defined at runTime   
// function is called -> node -> this ->  global/ browser -> this -> window
// function fn() {
//     console.log(this == global);
// }
// fn();


// const cap = {
//     name: "Steve",
//     sayHi:  function(){
//         console.log("29", this.name);
//         function iAmInner(){
//             console.log("31", this.name);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();






this.name = "Iron Man"
const cap = {
    name: "Steve",
    sayHi: () => {
        console.log(this);
        console.log("53", this.name);
        const iAmInner = () => {
            console.log("55", this.name);
        }
        iAmInner();
    }
}
// arrow does not bother about it's  
cap.sayHi();

// this if defined at runTime
// function is called -> node -> this -> global / browser -> this -> window
// method call -> this -> currentObj
// GEC -> this -> node ->{}/browser -> Window
// arrow fn does not bother about this -> it takes this from outer scope 





