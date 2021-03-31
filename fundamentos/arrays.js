//Criar arrays
const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);
console.log(valores[4]); //retorna undefined (false) pois não existe

valores[10] = 10; // Preche a posição 10 do array
console.log(valores); // retorna [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 10 ]

valores.push(20); // Insere o valor na ultia posição, e não ocupa o primeiro espaço vazio
console.log(valores); // retorno [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 10, 20 ]

//Retorna quantos elementos tem no array
console.log(valores.length); // conta até as posições vazias

// Array é homogênio, aceita varios tipos de dados em um mesmo
valores.push({id: 1}, 'Rafael', 2, null, 'teste');
console.log(valores);

// Excluir posições do Array
// Retira (ou retorna) a ultíma posição do array
console.log(valores.pop());

// Deleta a posição informada
delete valores[0];
console.log(valores);

console.log(typeof valores); // No javascript o array é um objeto