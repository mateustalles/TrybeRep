function palindromo(string) {
    var letras = string.split("");
    var reverso = [];
    for (var i = letras.length -1 ; i >= 0 ; i--) {
        reverso.push(letras[i]);
    }
    reverso = reverso.join();
    letras = letras.join();

    if (letras == reverso) {
        console.log (string+" é um palíndromo");
        return true;
    } else {
        console.log (string+" não é um palíndromo");
        return false;
    }
}
palindromo('aposasopa');