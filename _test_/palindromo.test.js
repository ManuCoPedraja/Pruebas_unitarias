const palindromo = require('../utils/palindromo');

describe('test palindromo', () => {
    test.each`
    firstValue | secondValue | expectedResult 
      
    ${'Casa'}  | ${'asaC'}   |  ${true}
    ${'Casa'}  | ${'Saac'}   |  ${false}
    ${'Roma'}  | ${'amoR'}   |  ${true}
    ${'moto'}  | ${'otom'}   |  ${true}
    ${'silla'} | ${'llisa'}  |  ${false}
    `('$firstValue and $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(palindromo(firstValue, secondValue)).toBe(expectedResult);
    })
})