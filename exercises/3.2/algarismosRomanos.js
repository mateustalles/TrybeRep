function romanos (string) {
var obj = {
I : 1,
V :	5,
X :	10,
L : 50,
C : 100,
D :	500,
M :	1000
};
    var soma = 0;
    var last = [];
    //separa a string e forma array
    var exp = string.split("");
    //cria array de numeros correspondentes:
    for (cont of exp)
    {
        last.push(obj[cont]);
    };
    //seta permutação por cada algarismo inserido
    for (var i=0; i<last.length ; i+=1) {
            //seta propriedade aplicavel apenas se caso a string tiver mais de um algarismo
            if (last.length > 1) {
                    if (i==0) {           
                    //subtração     
                    if (last[i+1] > last[i]) {
                        soma+=(last[i+1] - last[i]);
                    }
                    //adição
                    else if (last[i+1] < last[i] || last[i+1] == last[i] ) {
                        soma += (last[i+1] + last[i]);
                    }
                 
                        }
                    
                    else if (i > 0 && last[i+1] !== undefined) {
                        //subtração em caso de cursor estar avançado
                        if (last[i+1] > last[i]) {
                            soma-=last[i];
                            soma+=(last[i+1] - last[i]);
                        }
                        //adição cursor avançado
                        else if (last[i+1] < last[i] || last[i+1] == last[i] ) {
                            soma += (last[i+1]);
                        }
                    }
            }
            //Caso  usuario insira apenas um algarismo
            else if (last.length == 1) {
                soma=last[i];
            }
           
        }
    
    console.log(soma);
    }

romanos("MCDLXIX");
