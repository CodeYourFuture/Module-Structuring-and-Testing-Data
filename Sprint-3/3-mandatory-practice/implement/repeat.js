function repeat(str = "hello", times = 3) {
    return str.repeat(times);
}

console.log(repeat());               // "hellohellohello"
console.log(repeat("test", 1));
console.log(repeat("bye", 2));       // "byebye"
console.log(repeat("ha", 5));        // "hahahahaha"

module.exports = repeat;
