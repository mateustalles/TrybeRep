function maiorValor(array) {
    var maior = array[0];
    for (let value of array) {
        if (value > maior) {
            maior = value;
        }
        else {
            maior = maior;
        }
    }
    console.log (maior);
    return maior;
}
maiorValor([1,2,6,8,27,3,9]);