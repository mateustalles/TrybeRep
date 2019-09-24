var percentil = 76;

if (percentil >= 0 && percentil <40) {
    console.log ("F");
}
else if (percentil >=40 && percentil < 60) {
    console.log ("E");
}
else if ( percentil >= 60 && percentil < 70) {
    console.log ("D");
}
else if ( percentil >= 70 && percentil < 80) {
    console.log ("C");
}
else if (percentil >= 80 && percentil < 90) {
    console.log ("B");
}
else if (percentil >= 90 && percentil <= 100) {
    console.log ("A");
}
else {
    console.log ("Nota invalida");
}