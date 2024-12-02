function strRepeat(string, count){

    if(count <= 0 || !Number.isInteger(count)){
        throw new Error("Count must be a positive integer")
    }
    
    let results = " ";

    for(let i = 0; i < count; i++){
        results += string;
    }
    return results;
}

console.log(strRepeat("plan", 3));