function menorValor(array) {
    var menor = array[0];
    for (let value of array) {
        if (value < menor) {
            menor = value;
        }
        else {
            menor = menor;
        }
    }
    console.log (menor);
    return menor;
}
menorValor([1,-3,2,6,8,27,3,9]);