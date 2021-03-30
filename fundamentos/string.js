const escola = "cod3r";
//Retorna o valor da posição 4 na string = r
console.log(escola.charAt(4));

//Se não existe ele retorna um valor vazio, somente em branco, não retorna null
console.log(escola.charAt(5));

// Retorna o valor unicode da posição 3
console.log(escola.charCodeAt(3));

// Existe o valor d? retorna a posição dele na string por favor
console.log(escola.indexOf('d'));

// Imprime a partir do índice informado na função, ou
//entre posições informadas, sem considerar a ultima posição informada
console.log(escola.substring(1));
console.log(escola.substring(0,3));

// Concatenar string
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola '+ escola + "!");

// Altera o valor da posição 1º parâmetro pelo valor informado como 2º parâmetro
console.log(escola.replace(3, 'e'));

// Transforma a string em array quebrando pelo valor informado na função split
console.log('Ana,Maria,Rafael'.split(','));