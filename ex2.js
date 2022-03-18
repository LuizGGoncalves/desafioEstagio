const lista = [0, 1]
const numero = 354;
let c = 0;
while (true) {
    lista.push(lista[lista.length - 1] + lista[lista.length - 2]);
    if (numero === lista[c]) {
        console.log('O numero pertence a sequencia de fibonacci');
        break
    }
    if (numero < lista[c]){
        console.log('O numero nao pertence a sequencia de fibonacci')
        break
    }
    c++
}
console.log(lista);