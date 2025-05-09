function isEven (num){
    if (num %2 ===0){
        return true
    }
    else {
        return false
    }
}

test ("isEven should return true for even number", function (){
    expect(isEven(4)).toBe(true);
    expect(isEven(7)).toEqual(false);
    expect(isEven(8)).toEqual(true);
})