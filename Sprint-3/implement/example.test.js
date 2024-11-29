//output testing for get-angle-type function:
function getAngleType(angle) {
    let angleConverted = Number(angle.slice(0,-8));
    if (angleConverted === 90 ){
        return "Right angle";
    }
    else if (angleConverted === 180) {
        return "Straight angle";
    }
    else if (angleConverted < 90 ) {
        return "Acute angle";
    }
    else if (angleConverted > 90 && angleConverted < 180){
        return "Obtuse angle";
    }
    else if (angleConverted > 180 && angleConverted < 360){
        return "Reflex angle";
    }
}
test ('obtuse angle', () => {
    expect(getAngleType("120 degrees")).toBe('Obtuse angle');
});
//assertion check for get-card-value function:
function getCardValue(rankSuit) {
    let rankPart = rankSuit.slice(0,rankSuit.length-1);
    if (rankPart >= 2 && rankPart <= 9){
        return rankPart;
    }
    else if(["10", "J", "Q", "K"].includes(rankPart)){
        return 10;
    }
    else if(rankPart === "A"){
        return 11;
    }
    else{
        return "Invalid card rank";
    }
}
test (`expected output is 10`, () => {
    expect(getCardValue("10♠")).toBe(10);
});
// assertion check for is-proper-fraction function:
function isProperFraction(fraction) {
    let fractionArray = fraction.split("/");
    //position special case at the beginning of condition.
    if (fractionArray[1] == 0){
        return "Error";
    }
    else if (Math.abs(fractionArray[0]) < fractionArray[1]){
        return true;
    }
    else if (Math.abs(fractionArray[0]) >= fractionArray[1] ){
        return false;
    }
}
test ('expected output is error', () => {
    expect(isProperFraction("5/0")).toBe('Error');
});
// assertion check for is-valid-triangle:
function isValidTriangle(a,b,c){
    let sum_V1 = a+b;
    let sum_V2 = a+c;
    let sum_v3 = b+c;
    if (sum_V1 > c && sum_V2 > b && sum_v3 > a) {
        return true;
    }
    else {
        return false
    }
}
test ('expected output is true', () =>{
    expect(isValidTriangle(1,7,7)).toBe(true);
})
test ('expected output is false', () =>{
    expect(isValidTriangle(1,2,7)).toBe(false);
})
//assertion check for rotate-char:
function rotateCharacter(letter,shift){
    if (letter >= 'a' && letter <= 'z'){
        let lowerCase = ((letter.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0); 
        return String.fromCharCode(lowerCase);
    }
    else if (letter >= 'A' && letter <= 'Z'){
        let upperCase = ((letter.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0);
        return String.fromCharCode(upperCase);
    }
    else {
        return letter;
    }
}
test ('expected output is f', () =>  {
    expect(rotateCharacter('b',4)).toBe('f');
})
test ('expected output is K', () =>  {
    expect(rotateCharacter('H',3)).toBe('K');
})
test ('expected output is E', () =>  {
    expect(rotateCharacter('Z',5)).toBe('E');
})