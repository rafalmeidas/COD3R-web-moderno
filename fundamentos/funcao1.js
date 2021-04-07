// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // NaN
imprimirSoma(2, 4, 5, 6, 8); // Só pega os dois primeiros parâmetros
// Função com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(1, 4));
console.log(soma(2));