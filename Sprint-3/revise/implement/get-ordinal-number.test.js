// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

    
//  Numbers ending in 1 (e.g., 1, 21, 101) → st (1st, 21st, 101st)
// Numbers ending in 2 (e.g., 2, 22, 102) → nd (2nd, 22nd, 102nd)
// Numbers ending in 3 (e.g., 3, 23, 103) → rd (3rd, 23rd, 103rd)
// All others (e.g., 4, 11, 1004) → th (4th, 11th, 1004th)
// 11th, not 11st
// 12th, not 12nd
// 13th, not 13rd

   // get-ordinal-number.test.js (or your file name)

// The function implementation
function getOrdinalNumber(number) {
    const remainder10 = number % 10;
    const remainder100 = number % 100;

    if (remainder100 >= 11 && remainder100 <= 13) {
        return `${number}th`;
    }

    switch (remainder10) {
        case 1:
            return `${number}st`;
        case 2:
            return `${number}nd`;
        case 3:
            return `${number}rd`;
        default:
            return `${number}th`;
    }
}


describe('getOrdinalNumber', () => {
    it('should return "1st" for 1', () => {
        expect(getOrdinalNumber(1)).toBe('1st');
    });

    it('should return "2nd" for 2', () => {
        expect(getOrdinalNumber(2)).toBe('2nd');
    });

    it('should return "11th" for 11', () => {
        expect(getOrdinalNumber(11)).toBe('11th');
    });

    it('should return "1001st" for 1001', () => {
        expect(getOrdinalNumber(1001)).toBe('1001st');
    });
});
