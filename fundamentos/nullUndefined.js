// Undefined = Não inicializada
let valor; // não inicializada
console.log(valor);

// Null siginifica ausência de valor
valor = null;
console.log(valor);
//console.log(valor.toString());// TypeError, acesso a variável null, sempre ter um valor padrão


const produto = {};

console.log(produto.preco); // undefined
console.log(produto);

produto.preco = 3.5;

console.log(produto.preco);