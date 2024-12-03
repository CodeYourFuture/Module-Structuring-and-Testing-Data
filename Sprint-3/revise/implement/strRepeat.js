function strRepeat(string, count){

    if(count === 0){
        return "";
    }

    if(count < 0 || !Number.isInteger(count)){
        throw new Error("Count must be a non-negative integer")
    }
    
    let results = "";

    for(let i = 0; i < count; i++){
        results += string;
    }
    return results;
}

module.exports = strRepeat;

console.log(strRepeat("plan", 0));