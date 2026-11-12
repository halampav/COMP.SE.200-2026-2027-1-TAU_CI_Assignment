import { expect } from "chai"
import * as td from "testdouble"

describe('toStringTests', () => {
    let isSymbolStub, SUT

    beforeEach(async function(){
        isSymbolStub = td.func()
        await td.replaceEsm('../src/isSymbol.js', null, isSymbolStub)
        SUT = await import('../src/toString.js')
    })

    afterEach(async function(){
        td.reset()
    })

    it('should handle Symbol as parameter', () => {
        // Arrange
        const input = Symbol('hello')
        const expected = 'Symbol(hello)'
        td.when(isSymbolStub(input)).thenReturn(true)

        // Act
        const result = SUT.default(input)

        // Assert
        expect(result).to.equal(expected)
    });
});
