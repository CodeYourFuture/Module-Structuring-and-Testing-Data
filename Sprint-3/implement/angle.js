module.exports = function getAngleType(angle) {
    if (angle === 90) return 'Right angle';
    if (angle < 90) return 'Acute angle';
    if (angle > 90 && angle < 180) return 'Obtuse angle';
    if (angle === 180) return 'Straight angle';
    if (angle > 180 && angle < 360) return 'Reflex angle';
    if (angle <= 0 || angle >= 360) return 'Who you trying to fool Flat-Earther?!'
}

//this was the first time i followed the TDD approach and started with tests then the function. the approach works for me cause its like i know what the function must do, its more clear.
// i needed Babel to help me with the es6 as jest only uses commonJS and i ran into alot of problems getting my tests to run but in the end i discovered Babel and learnt alot of extras.