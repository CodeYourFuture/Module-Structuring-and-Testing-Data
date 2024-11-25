const getAngleType = require('./angle');
//its still js so i should be able to comment in this file. i wrote specific tests and followed the boiler plate from the site.
describe('getAngleType', () => {
    it('identifies right angles', () => {
        expect(getAngleType(90)).toBe('Right angle');
    });
    it('identifies acute angles', () => {
        expect(getAngleType(45)).toBe('Acute angle');
    });
    it('identifies obtuse angles', () => {
        expect(getAngleType(120)).toBe('Obtuse angle');
    });
    it('identifies straight angles', () => {
        expect(getAngleType(180)).toBe('Straight angle');  // Fixed the expected value
    });
    it('identifies reflex angles', () => {  
        expect(getAngleType(270)).toBe('Reflex angle');
    });
    it('identifies invalid angles', () => {
        expect(getAngleType(360)).toBe('Who you trying to fool Flat-Earther?!');
    });
});