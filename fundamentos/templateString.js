const nome = 'Rafael';

// Interpreta quebras de linha
console.log(`
    Olá 
    ${nome}!`);

// expressões, realiza calculos
console.log(`1 + 1 = ${1+1}`);

// Variável recebe o valor e já executa a função nativa para string toUpperCase()
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);