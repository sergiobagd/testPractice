const square = require('./square')

describe('Square number', () => {
    let mockValue;
    beforeEach( () => {
        
    })
    test('correct pass', () => {
        // expect(square(3)).toBeLessThan(10);
        // expect(square(3)).toBe(9);
        // expect(square(3)).toBeGreaterThan(8);
        // expect(square(3)).not.toBeUndefined();
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })
    test('correct pass', () => {
        // expect(square(3)).toBeLessThan(10);
        // expect(square(3)).toBe(9);
        // expect(square(3)).toBeGreaterThan(8);
        // expect(square(3)).not.toBeUndefined();
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })

    afterEach( () => {
        jest.clearAllMocks()
    })
})