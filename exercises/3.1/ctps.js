var salarioB = 3500,
    inss8=.08,
    inss9=.09,
    inss11=.11,
    inssmax=570.88,
    ir75=.075,
    ir15=.15,
    ir225=.225,
    ir275=.275;
salarioB=salarioB.toFixed(2);

if (salarioB <= 1556.94) {
    salarioB=salarioB*(1-inss8);
}
 else if (salarioB >= 1556.95 && salarioB <= 2594.92) {
    if (salarioB >=1903.99 && salarioB <= 2826.65) {
    salarioB=(salarioB*(1-inss9)*(1-ir75))-142.8;
    }
    else {
            salarioB=salarioB*(1-inss9);
    }
}

    else if (salarioB>=2594.93 && salarioB <=5189.82) {
        if (salarioB >=2826.66 && salarioB <= 3751.05) {
            salarioB=(salarioB*(1-inss11)*(1-ir15))-354.8;
        }
        else if (salarioB >= 3751.06 && salarioB<=4664.68) {
            salarioB=(salarioB*(1-inss11)*(1-ir225))-636.13;
        }
        else if (salarioB > 4664.68) {
            salarioB=(salarioB*(1-inss11)*(1-ir275))-869.36;
        }
    }


    else if (salarioB > 5189.82) {
        salarioB=(salarioB*(1-ir275))-869.36-inssmax;
    }

    else {
        console.log ("Salario inválido");
    }
 
console.log (salarioB.toFixed(2));