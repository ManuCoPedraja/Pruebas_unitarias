const esmayuscula = require('../utils/esmayuscula');

//test('comprobar si es mayuscula', () => {
    //expect(esmayuscula('HOLA')).toBe(true);
//});

//test('comprobar si no es mayuscula', () => {
    //expect(esmayuscula('hola')).toBe(false);
//});
describe('tabla_esmayuscula', () => {
    test.each`
      firstValue | expectedResult    
      ${'HOLA'}  | ${true}
      ${'hola'}  | ${false}
      ${'HoLA'}  | ${false}
      ${'hOLA'}  | ${false}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(esmayuscula(firstValue)).toBe(expectedResult);
    });
  });