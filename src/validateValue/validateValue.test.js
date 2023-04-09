const validateValue = require('./validateValue');



describe('validateValue', () => {
    test('correct value', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('too low value', () => {
        expect(validateValue(-2)).toBe(false);
    })
    test('too high value', () => {
        expect(validateValue(101)).toBe(false);
    })
    test('minimal value', () => {
        expect(validateValue(0)).toBe(true);
    })
    test('maximum value', () => {
        expect(validateValue(100)).toBe(true);
    })
})