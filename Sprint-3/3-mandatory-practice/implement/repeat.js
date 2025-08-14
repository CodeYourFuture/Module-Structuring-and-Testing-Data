function repeat(str, count) {
    let repeatedStr = ""; // stores the string

    if(count < 0) return "this is an invalid count";
    if(count === 0) return "";
    // check errors before function runs

    for (let i = 0; i < count; i++) {
    repeatedStr = repeatedStr + str;
}  
    return repeatedStr;
}
console.log(repeat("hi there... ", 5));
module.exports = repeat;