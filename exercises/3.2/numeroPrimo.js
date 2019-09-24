function primo(x) {
    for (var i=2; i<x ; i++) {
        if  (x%i == 0) {
            console.log ("O número não é primo");
            return false;
        }
        else {
            console.log ("O número é primo");
            return true;
        }
    }
}
primo(897);