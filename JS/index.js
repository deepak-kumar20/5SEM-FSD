// console.log("Hello world");
// let a = "20";
// if (a == 20) {
//     console.log("a is 20");
// }
// const data = function(name) {
//     return `Hello ${name}`;
    
// }
// console.log(data("John"));
// const a = () => {
//     console.log("Arrow function");
// }
// a();
// iife
// (() => {
//     console.log("IIFE");
// })();

// setTimeout(() => {
//     console.log("Hello after 2 second")
// }, 2000)
// setInterval(() => {
//     console.log("Hello after 1 seconds");
// }, 1000);

function greet(name = "guest") {
    return `hello ${name}`
}
console.log(greet("node"));
function selectlanguage(lang) {
    let data;
    if (lang == 'java') {
        function javaCompiler(param) {
            return "java compiler";

        }
        data= javaCompiler();
    } else if (lang == "C") {
        function cCompiler() {
            return "C compiler"
        }
        data = cCompiler();
    } else {
        data="no compiler found"
    }
    return data;
}
console.log(selectlanguage())


