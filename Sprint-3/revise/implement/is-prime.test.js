// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num){
    if(num < 2){
        return false
    }
    for (let i = 2; i < num ; i++){
        if (num % i === 0){
            return false
        }
    }
    return true
}


test('expecting 17 to be a prime number', () => {
    expect(isPrime(17)).toBe(true)
}) //passed

test('expecting 3 to be a prime number', () => {
    expect(isPrime(3)).toBe(true)
}) //passed

test('expecting 220 to be false', () =>{
    expect(isPrime(220)).toBe(false)
}) //passed

test.each([[7,true],[12,false],[17,true], [122,false]])("%p isPrime %p",(input,expectedResult)  =>{
    console.log(input,expectedResult)
    expect(isPrime(input)).toBe(expectedResult)
 }) //passed