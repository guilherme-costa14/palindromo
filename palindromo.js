function palindromo(string){
    //remove os espaços e converte para minúscula
    string = string.replace(/\s+/g, '').toLowerCase();
    //verfica se a string é igual a sua reversa
    return string === string.split('').reverse().join('');
}

module.exports = palindromo;