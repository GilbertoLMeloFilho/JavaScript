//Arrays
//Adicionar, encontrar, dividir e remover elementos, dividir e combinar arrays

//Adicionar elementos (Tipos Primitivos)

let CaixaDeFrutas = ['Uva', 'Maca', 'Banana']
console.log(CaixaDeFrutas)
//Inicio
CaixaDeFrutas.unshift('Melancia')
console.log(CaixaDeFrutas)

//Meio
CaixaDeFrutas.splice(2,0,'Pera') //primeiro parametro é onde sera colocado o novo elemento, o segundo é quantos seram removidos a partir do novo e o terceiro é oq sera adicionado
console.log(CaixaDeFrutas)

//Final
CaixaDeFrutas.push('Ameixa')
console.log(CaixaDeFrutas)

//Encontrar elementos
console.log(CaixaDeFrutas.indexOf('Maca')) //Retorna a posição do item proucurado
console.log(CaixaDeFrutas.indexOf('Caju')) //retorna -1 se o item nao for achado
//lastIndexOf encontra a ultima referencia ou seja se tiver duas maças ele mostrara o indice da ultima
console.log(CaixaDeFrutas.includes('Uva')) //retorna true or false se o item existe ou nao dentro do array
console.log(CaixaDeFrutas.includes('Abacaxi'))

//Encontar emementos (Tipos de referencia)
let Times = [
    {Nome:'Flamengo', Posição: '1°'},
    {Nome: 'Vasco', Posição: '20°'},
    {Nome: 'Cruzeiro', Posição: '9°'}
];
console.log(Times)

console.log(Times.find(function(Time){
    return Time.Nome === 'Flamengo'
}));

//Adicionar Tipos de Referencia
//Mesma coisa que os de tipo primitivo
Times.push({Nome: 'Palmeiras', Posição: '19°'})
console.log(Times)

//Arrow Functions => metodo para simplificar funções, o parametro da função vem antes da "flecha" e o return depois

console.log(Times.find(Time => Time.Nome === 'Flamengo')); //Metodo simplificado para achar um objeto no array

//Remover elementos de um array

//Final
console.log(CaixaDeFrutas.pop()) // Remove o ultimo elemento da lista
console.log(CaixaDeFrutas)

//Inicio
console.log(CaixaDeFrutas.shift()) //Remove o primeiro elemento da lista
console.log(CaixaDeFrutas)

//Meio
console.log(CaixaDeFrutas.splice(2,1)) //O primeiro parametro é a partir de qual indice o/os itens seram removido e o segundo é quantos itens serem removidos
console.log(CaixaDeFrutas)

//Esvasiando um array
//Solução 1 | Parte Ruim : quando o array é reatribuido a outro array as informações do segundo nao somen
let NovaCaixadeFrutas = CaixaDeFrutas
CaixaDeFrutas = [] //Metodo 1
console.log(CaixaDeFrutas)
console.log(NovaCaixadeFrutas)

//Solução 2 | Apaga todas as referencia
let NovosTimes = Times
console.log(NovosTimes)
Times.length = 0 //Metodo 2
console.log(Times)
console.log(NovosTimes) //Apagou a referencia criada

//Solução 3
CaixaDeFrutas.splice(0,CaixaDeFrutas.length)

//Solução 4
while (Times.length > 0)
    Times.pop();

//Combinando um Array 
const JogadoresFutebol = ['Messi', 'CR7', 'Arrascaeta', 'Pele'];
const JoagdoresBasquete = ['LeBron', 'Curry', 'Jordan'];

let Jogadores = JogadoresFutebol.concat(JoagdoresBasquete);
console.log(Jogadores);

//Dividir
let cortado = Jogadores.slice(0,3) //primeiro indice onde começa a separação e o segundo ate onde vai (desconsidrando o ultimo), se passar somente um indice ele cortara do indice ate o ultimo
console.log(cortado)


//Operador Spread
let Juntos = [...JogadoresFutebol, 'Yamal', ...JoagdoresBasquete, 'Shaquille ONeal']//metodo facil possivel de adicionar novos elementos
console.log(Juntos)

//Clone usando spread
let clone = [...Juntos]
console.log(clone)

//Foreach

Juntos.forEach( (numero, indice) => console.log(numero, indice)) //Metodo para percorrer todos os itens do array

//Combinando Arrays
console.log(Juntos.join(' - ')) //separa todos os elementos pela string (ex: ponto)

const frase = 'Ola todo bem meu nome é gilberto e sou foda'
console.log(frase.split(' ')) // separa a frese em palavras em um array

function SepararPorTraso(frase){
    const separado = frase.split(' ') //separa todas as palavras da frase
    return separado.join('-') //juntatodas com um traso no meio
}
console.log(SepararPorTraso(frase))

//Recebendo dados
let corfav = prompt("Ola qual sua cor preferida")
console.log(corfav)
if(corfav == 'Azul'){
    console.log("Bom gosto")
}

//Manipulando DOM
//DOM é todo o HTML
