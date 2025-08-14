function repeat(str,count) {
    if(count<0){
        return false;
    }
    return str.repeat(count);
}

module.exports = repeat;


console.log(repeat("",-1));
console.log(repeat("negative number", 1));