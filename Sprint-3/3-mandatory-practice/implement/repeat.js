function repeat(str, count) {
    if (count > 0) return str.repeat(count) ;
    else if (count === 0) return "";
    else throw new Error("Invalid count");
}



module.exports = repeat;

console.log(repeat("hello", 3));
console.log(repeat("hello", 1));
console.log(repeat("hello", 0));
// console.log(repeat("hello", -3));