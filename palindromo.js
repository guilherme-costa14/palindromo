function palindromo(str){
    //remove os espaços e converte para minúscula
    str = str.replace(/\s+/g, '').toLowerCase();
    //verfica se a string é igual a sua reversa
    return str === str.split('').reverse().join('');
}

module.exports = palindromo;