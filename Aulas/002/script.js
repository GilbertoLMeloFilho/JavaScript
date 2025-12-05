//if else:; if (se)
idade = 13
if(idade>=18){
    var carteira = true
}
else{
    carteira = false
}
console.log(carteira)

let sal = 30
if(sal<20){
    console.log('Pobre')
}
else if(sal<40){
    console.log("Na media")
}
else{
    console.log("Rico")
}

//switch
let permição;
permição = 'adm'
switch (permição){
    case 'comum':
    console.log("Usuario comum")
    break;

    case 'gerente':
    console.log("Usuario gerente")
    break;

    case 'adm':
    console.log("Usuario adm")
    break;

    default:
    console.log("Usuario nao conhecido")
}
//lacos de repetição; for; while; do...while; for... in; for... of

//for(1°-declara a variavel, 2° qual condição do laço continuar(ou seja o laço para quando essa for true), 3° oq acontece a cada volta do laço)
for(let  i = 1; i < 6; i++){
    console.log('Texto ', i)
}

//While (é preciso declarar a variavel fora do laço e somente condição para quebrar entre parenteses)
let i = 1;
while(i<=10){
    if(i%2==0){
        console.log(i + " esse numero é par!")
    }
    i++
}

//do...while (declara a variavel fora do laço e a condição de quebra fica no final ou seja o doWhile executa primeiro e quebra depois o while confere a quebra antes de executar)

let x = 0;
do{
    if(x%2==1){
        console.log(x + " é impar")
    }
    x++
} while(x <= 10);

//for..in (feita para usar em arrays e objetos, usase o for, uma variavel (para objetos serve para assesar a chave e no array o indice), in e o nome do objato/array)

const pessoa = { 
    nome: 'Izis',
    idade: 17
};

for(let chave in pessoa){
    console.log(chave, pessoa.idade); // é possivel assesar o valor da chave por ponto(porem tem que colocar o nome da chave ou seja é limitado)
}
const cores = ['Azul', 'vermelho', 'Verde', 'Rosa']
for(let indice in cores){
    console.log(indice, cores[indice]) // ou por chaves, que somente com o indice dentro da mesma ja assesa o valor
}

//for...of