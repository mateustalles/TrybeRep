function chess(piece) {
    piece = piece.toLowerCase();

    if (piece == 'pawn') {
        console.log ("Forwards, and diagonal when eating");
    }

    else if (piece == 'bishop') {
        console.log ("Diagonals");
    }

    else if (piece == "queen") {
        console.log("Any direction");
    }
    else if (piece == "king") {
        console.log("One move in any direction");
    }
    else if (piece == "horse") {
        console.log("Can jump pieces, two in one direction, one in another (90 degrees, L movement)");
    }
    else if (piece == "rook") {
        console.log ("Perpendicular to the chessboard");
    }
    else {
        console.log("Huh?");
    }
}
chess("Horse");