function quadrado(n) {
    for (var i = 0; i < n ; i++) {
        for (var j=n;j>0;j--) {
        process.stdout.write('*');
    }
    console.log('\n');
}
}
quadrado(5);