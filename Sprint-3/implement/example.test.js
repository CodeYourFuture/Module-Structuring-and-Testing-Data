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
//assertion check for get-card-value function
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