let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// Duas interrogações serve para verificar o resultado real da variável, converter algo para boolean
// Se for 0 ele é false e 1 true
isAtivo = 0;
console.log(!!isAtivo);

if(isAtivo)
    console.log('sim');

// obs: todos números são verdadeiros a não ser o 0, texto, array, strings com texto ou espaço, todos retornam true
console.log('os verdadeiros');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = Infinity));

console.log('os falsos');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

// Utilizando o operador lógico para retonar o primeiro valor verdadeiro na operação OU
console.log(0 || null || '' || 'sou verdadeiro fi!' || 123);

// Retorna o primeiro valor negativo
console.log(!(0 || null || '' || 'sou verdadeiro fi!' || 123));

// Converte o valor para true
console.log(!!(0 || null || '' || 'sou verdadeiro fi!' || 123));

// variável nome está vazio portando é false, pode usar para salvar em uma variável o valor em cima de uma validação
let nome = '';
console.log(nome || 'Desconhecido');

//Retorna o primeiro valor verdadeiro, como o nome está preenchido retorna ele
nome = 'Rafael'
console.log(nome || 'Desconhecido');