function triangulo(n) {
    for (var l = 1; l <= n ; l+=2) {
        var j = l;
        var z1 = (n-l)/2;
        var z2 = (n-l)/2;
        while (z1 > 0) {
            process.stdout.write(' ');
            z1--;
        }
        while (j > 0) {
            process.stdout.write('*');
            j--;
        }   
        while (z2 > 0) {
            process.stdout.write(' ');
            z2--;
        }
        console.log('\n');
    }
}
triangulo(10);