function repeat(str, count) {
    if (count<0){
        throw new Error("negative count are not valid")
    }
    return str.repeat(count) ;
}

module.exports = repeat;