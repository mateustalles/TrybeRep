function triangulo(n) {
    for (var l = 1; l <= n ; l++) {
        var j = l;
        var z = n-l;
        while (z > 0) {
            process.stdout.write(' ');
            z--;
        }
        while (j > 0) {
            process.stdout.write('*');
            j--;
        }   
        console.log('\n');
    }
}
triangulo(5);