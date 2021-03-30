console.log(7 / 0); // Retora infinito, qualquer divisão por zero vai retrnar infinty
console.log("10" / 2); // Executa calculos com string, caso numero esteja correto
console.log("3" + 2); // Vai concatenar, pois o + concatena strings, portanto tem prioridade
console.log("Show" * 2); // Erro NaN - Not a Number
console.log(0.1 + 0.7); // Sempre vai retornar um valor quebrado, é uma convenção que várias liguagens segue, o retorno preciso iria demorar para chegar até o usuário...

//console.log(10.toString()); // Não funciona inserindo o valor de forma literal, exs. correto abaixo
console.log((10.35).toFixed(2));
console.log((10.35).toString());