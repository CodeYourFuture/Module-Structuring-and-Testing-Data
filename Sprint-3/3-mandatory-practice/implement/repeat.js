function repeat(str, count) {
    if(count > 0) {
        return str.repeat(count); 
    } else if (count === 0) {
        return "";
    } else {
        throw new Error("Invalid number");
    }     
}

module.exports = repeat;


console.log(repeat("abc", -1))