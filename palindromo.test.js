const palindromo = require('./palindromo');

test ('Deve retornar true', () => {
    expect(palindromo('arara')).toBe(true);
})

test ('Deve retornar false', () => {
    expect(palindromo('Subi no onibus')).toBe(true);
})

test ('Deve retornar true', () => {
    expect(palindromo('Marrocos')).toBe(false);
})