let string = "abcdefghi"

inverte = (string) => {
    let newString = ''

    for (let c = 0; string.length > c; c++ ) {
        newString += string[string.length - c - 1]
    }
    console.log(newString);
    return newString;
}

const invertido = inverte(string);

