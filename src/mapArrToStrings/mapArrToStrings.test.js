const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('numbers in array', () => {
        expect(mapArrToStrings([1,2,3])).toEqual(['1', '2', '3']);
    })
    test('junk input', () => {
        expect(mapArrToStrings([1,2,3,null,undefined])).toEqual(['1', '2', '3']);
    })
    test('empty array', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test('Negative', () => {
        expect(mapArrToStrings([1,2,3])).not.toEqual([1,2,3]);
    })
})