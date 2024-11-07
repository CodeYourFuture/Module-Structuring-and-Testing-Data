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
  