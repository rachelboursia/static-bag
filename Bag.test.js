const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(23)
        expect(bag.weight).toBe(23)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })
    test('bag weight over limit', () => {
        expect(() => new Bag(24)).toThrowError('bag is over the limit of 23kg')
    })
    test('bag weight is equal to limit', () => {
        const bag = new Bag(23)
        expect(bag.weight).toBe(23)
    })
    test('bag weight is less than limit', () => {
        const bag = new Bag(19)
        expect(bag.weight).toBe(19)
    })
})
