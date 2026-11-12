import { expect } from 'chai'
import * as td from 'testdouble'
import map from '../src/map.js'

describe('mapTests', () => {
    afterEach(() => {
        td.reset()
    })

    it('should do map standard transformation', () => {
        // Arrange
        const input = [1, 2, 3]
        const expected = [2, 4, 6]
        const expectedCallCount = 3
        const mockIteratee = td.func()
        td.when(
            mockIteratee(td.matchers.isA(Number)),
            { ignoreExtraArgs: true }
        ).thenDo((n) => n * 2)

        // Act
        const result = map(input, mockIteratee)

        // Assert
        expect(result).to.deep.equal(expected)
        expect(td.explain(mockIteratee).callCount).to.equal(expectedCallCount)
    })
})
