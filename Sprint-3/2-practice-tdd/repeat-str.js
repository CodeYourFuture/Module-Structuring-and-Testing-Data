function repeatStr(str, num) {
    var result = "";
    var i;
    for (i = 0; i < num; i++) {
        result += str;
    }
    return result;
}
    
console.log(repeatStr("hello", 3))

module.exports = repeatStr;
