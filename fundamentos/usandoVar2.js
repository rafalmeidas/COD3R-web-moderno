// Dentro do mesmo escopo se for nomeada uma variável com o memso nome ela será sobrescrita
var numero = 1; 
{
    var numero = 2;
    console.log('dentro = ', numero); // imprime 2
}
console.log('fora = ', numero); // imprime 2