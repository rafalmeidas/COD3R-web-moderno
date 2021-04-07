// Escopo? variáveis definidas com var é visível fora do bloco de código, porém quando é definida dentro de uma função ela fica visível somente dentro da função
{
    {
        {
            {
                var sera = 'Será??'
            }
        }
    }
}
console.log(sera);


function teste(){
    var local = 123;
    console.log(local);
}