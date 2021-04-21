const palindromes = require('./palindromes')
describe('palindromes()', () => {
    it('correctly retuns a one word palindrome', () => {
        expect(palindromes('madam')).toEqual('madam')

    })
})