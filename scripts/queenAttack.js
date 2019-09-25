function queenAttack(queenPosition,attackedPosition) {

    if( queenPosition.x == attackedPosition.x) {
        console.log("Peça na mesma coluna.")
        return true;
    }


    if( queenPosition.y == attackedPosition.y){
        console.log("Peça na mesma linha.")
        return true;
    }



    //Diagonal superior-direita (1o quadrante)

    for (var i=0;i<8;i++) {
        var x_position = queenPosition.x + i;
        var y_position = queenPosition.y + i;

        // Se o tabuleiro terminou, sai do loop;
        if (x_position >= 8 || y_position >= 8) {
            console.log ("Saiu do tabuleiro");
            break;
        }
        //Verifica se está na diagonal-superior-direita, 1o quadrante
        if(attackedPosition.x == x_position && attackedPosition.y == y_position) {
            console.log("Na diagonal superior-direita. (1o quadrante)");
            return true;
        }
    }



    //Diagonal inferior-esquerda,  3o quadrante
    for (var i=0; i < 8; i++) {
        var x_position = queenPosition.x - i;
        var y_position = queenPosition.y - i;

        //Se o tabuleiro terminar, este comando o tira do loop:
        if ( x_position < 0 || y_position < 0 ) {
            break;
        }

        //Se a peça atacada estiver na diagonal da rainha, ela é atacada.
        if(attackedPosition.x == x_position && attackedPosition.y == y_position) {
            console.log("Na diagonal inferior-esquerda. (3o quadrante)");
            return true;
        }
      }

      
      //Diagonal superior esquerda
    for (var i=0; i<8; i++) {
            var x_position = queenPosition.x - i;
            var y_position = queenPosition.y + i;

        // Se o tabuleiro terminou, sai do loop;
        if (x_position < 0 || y_position >= 8) {
            console.log ("Saiu do tabuleiro");
            break;
        }
        //Verifica se está na diagonal-superior-esquerda, 2o quadrante
        if(attackedPosition.x == x_position && attackedPosition.y == y_position) {
            console.log("Na diagonal superior-esquerda (2o quadrante)");
            return true;
        }

      }

    //Diagonal inferior direita
    for (var i=0; i<8; i++) {
            var x_position = queenPosition.x + i;
            var y_position = queenPosition.y - i;

        // Se o tabuleiro terminou, sai do loop;
        if (x_position >= 8 || y_position < 0) {
            console.log ("Saiu do tabuleiro");
            break;
        }
        //Verifica se está na inferior-direita, 4o quadrante
        if(attackedPosition.x == x_position && attackedPosition.y == y_position) {
            console.log("Na diagonal inferior-direita, 4o quadrante");
            return true;
        }
      }

    console.log ("Peça não pode ser atacada.");
    return false;
}

queenPosition = {
    x: 3,
    y: 3
};

pawnPosition = {
    x: 6,
    y: 0
};


var result = queenAttack(queenPosition,pawnPosition);