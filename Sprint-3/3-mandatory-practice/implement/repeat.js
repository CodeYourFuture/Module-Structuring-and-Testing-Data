function repeat(str,count) {
    if(count<0){
        return "negative number"
    }
    return str.repeat(count);
}
//console.log(repeat("hello",3))
module.exports = repeat;