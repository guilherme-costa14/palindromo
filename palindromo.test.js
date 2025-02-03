const palindromo = require('./palindromo');

test ('Deve retornar true', () => {
    expect(palindromo('arara')).toBe(true);
})

test ('Deve retornar false', () => {
    expect(palindromo('qualquer coisa')).toBe(false);
})

test ('Deve retornar true', () => {
    expect(palindromo('ana')).toBe(true);
})