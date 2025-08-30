function largestNumber (a,b,c) {
    if (a>b) {
        if (a>c){
            return a;
        }
        else {
            return c;
        }
    }
    else {
        if (b>c){
        return b;
        }
        else {
            return c;
        }
    }
}

console.assert(largestNumber(5, 2, 8) === 8);
console.assert(largestNumber(87, 78, 93) === 93);
console.assert(largestNumber(5.3, 5.5, 5.8) === 5.8);
console.assert(largestNumber(-5, -2, -8) === -2);
