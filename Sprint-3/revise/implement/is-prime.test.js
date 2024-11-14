// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrimeNumber(num){
    if(num < 2) return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false; 
    }
    return true;
}

let primeNum = isPrimeNumber(14);
console.log(primeNum);

test("check a prime number", () => {
    expect(isPrimeNumber(0)).toBe(false);
    expect(isPrimeNumber(-2)).toBe(false);
    expect(isPrimeNumber(1)).toBe(false);
    expect(isPrimeNumber(2)).toBe(true);
    expect(isPrimeNumber(3)).toBe(true);
    expect(isPrimeNumber(29)).toBe(true);
    expect(isPrimeNumber(28)).toBe(false);
})