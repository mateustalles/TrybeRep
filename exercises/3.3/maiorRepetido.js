

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
    return maior;
}

function maiorRepetido(array) {
    var registro=[],
        cont=0;
    for (let value of array) {
        for (let value2 of array) {
            if (value2 == value) {
                cont++;
            }
        }
        registro.push(cont);
        cont = 0;
    }
 
    console.log ("O número mais repetido foi: ");
    //busca o índice onde foi resultado o maior numero
    //de repetições na string registro, dentro da 'array' da função
    //utilizando a função "maiorValor" previamente definida
    //que irá retornar o maior valor da array "registro"
    console.log (array[registro.indexOf(maiorValor(registro))]);
}

maiorRepetido( [2, 3, 2, 5,8,8,8,8, 8, 2, 3]);
