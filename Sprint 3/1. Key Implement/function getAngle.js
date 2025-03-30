function getAngleType(angle) {
    if (angle === 90) return "Right angle";
    expect(getAngleType(90)).toEqual("Right angle")
    const angleType = 90 "Right angle";
}
function getAngleType(angle) {
    if (angle === 90) return "Right angle";
    if (angle > 0 && angle < 90) return "Acute angle";
    if (angle > 90 && angle < 180) return "Obtuse angle";
    if (angle === 180) return "Straight angle";
    if (angle > 180 && angle < 360) return "Reflex angle";
    if (angle === 360) return "Full rotation";
    return "Invalid angle";
