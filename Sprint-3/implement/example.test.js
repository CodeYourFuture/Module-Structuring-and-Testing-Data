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