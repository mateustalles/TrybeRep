function stringEnd (stringWord,stringEnd) {
    if (stringWord.endsWith(stringEnd)) {
        console.log (true);
        return true;
    } else {
        console.log (false);
        return false;
    }
}
stringEnd("trybe", "be");
stringEnd("joaofernando", "fernan");