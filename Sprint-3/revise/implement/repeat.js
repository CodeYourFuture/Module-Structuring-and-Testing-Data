function repeat(str, count){
    if (count < 0) {
        throw new Error("Count cannot be nagative");
    }
    let result = "";
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;

}
