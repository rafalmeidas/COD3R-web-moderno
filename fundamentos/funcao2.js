// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(1, 2);


// Arrow function em uma variável
const soma = (a, b) => {
    return a + b;
}


console.log(soma(1, 3));

//retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(2,1));

const imprimir2 = a => console.log(a);

imprimir2('Top!')