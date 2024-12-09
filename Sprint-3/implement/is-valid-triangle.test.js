function isValidTriangle(a,b,c) {
    
    if(a + b <= c || a + c <= b|| b + c <= a){
        return false
    } else if (a <= 0 || b <= 0 || c <= 0){
        return false
    } else {
        return true
    }
}

test('returns true for valid triangle', () => {
        expect(isValidTriangle(2, 3,4)).toBe(true);
        expect(isValidTriangle(6, 5,3)).toBe(true);
    });

    test('returns true for valid triangle', () => {
        expect(isValidTriangle(0, 3,4)).toBe(false);
        expect(isValidTriangle(9, 1,3)).toBe(false);
    });