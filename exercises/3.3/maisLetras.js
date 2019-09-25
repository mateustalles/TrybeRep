function maisLetras(array) {
    let letras = array[0].length,
        ganhador = '';
    for (let value of array) {
        if (value.length > letras) {
            letras = value.length;
            ganhador = value;
        }
    }
    console.log(ganhador);
}
maisLetras( ['José', 'Nabucodonosor','Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);