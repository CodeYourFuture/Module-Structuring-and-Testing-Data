//function repeat() {
    //return "hellohellohello";
function repeat(str = "hello", times = 3) {
    return str.repeat(times);
}

console.log(repeat());               
console.log(repeat("test", 1));
console.log(repeat("bye", 2));       
console.log(repeat("ha", 5));   

module.exports = repeat;