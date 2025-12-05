//console.log para imprimimir no console
console.log("Hello Word")
//Usar cosnt na maioria, let para variaveis que mudam e var para variaveis de escopo global
const idade = 17;
let nome = "Gilberto";
const peso = 59;
console.log(idade, nome, peso);
nome = "guilherme";
console.log(nome);
//Tipos primitivos int(numero) string(texto) bool(verdadeiro/falso) undefined(sem definição) null(redefinição) 
//Tipos de referencia: objeto, arrays, função
//objeto; declarado por chaves, uma informação e uma chave da informação
let pessoa = { 
    nome: 'Guilherme',
    peso : '59',
    idade: 17

}
console.log(pessoa)
//arrays; declarado por colchetes
let familia = [
    13,true,49.05,51,'Gilberto'
]
console.log(familia[4])
console.log(familia[0])
console.log(familia.length) // tamanho do array
//função; verbo+substantivo
function SomarNumero(n1, n2){
    n3 = n1+n2
    return n3 //retorna o valor
}
n1 = 5; n2 = 3
console.log(SomarNumero(n1,n2))

function MudarCor(cor, tonalidade){
    x = cor + " " + tonalidade
    console.log(x)
}
cor = 'azul'
console.log(cor)
MudarCor('verde', 'escuro')

//operadores;
//operadores arimeticos: + - * / % ** ++ --
let salario = 10
console.log(salario + salario ) //soma
console.log(salario - salario ) // subtração
console.log(salario * salario ) // multiplicação
console.log(salario / salario ) // Divisão
console.log(salario % salario ) // resto da divisão
console.log(salario ** salario ) // elevado
console.log(++salario) //adiciona 1 (antes da variavel adiciona antes de mortra, depois da variavel so é mostrada em outra linha)
console.log(--salario) //mesma coisa que o anterio soq com subtração

//operadores de atribuição = += -= *= ...
salario+=salario // = salario = salario + salario
console.log(salario)

//operadroes de comparação ===(restrita(ou seja conpara o valor e o tipo(numero, strig etc))) == (solta (somente o valor))
console.log( 1 == '1') //solta
console.log('1' === 1) // restrita (foi passado um 1 em numero e outro m inteiro ou seja retorna falso pois sao de tipos de difernete)

//operador ternario 
let pontos = 150
let tipo = pontos > 100 ? 'premium' : 'Comum' // primeira parte diz oq tem que acontecer, a segunda (?) diz oq acontece se por verdade e a terceira oq acontece se for falsa
console.log(tipo)

//operadoes logicos; and && (so retorna true se ambas as condições forem true); or || (retorna true se pelo menos uma das condiçoes forem true); not ! (retorna true se for false)
jogo1 = true; jogo2 = false;
let vitoriaand = jogo1 && jogo2 //um esta true e outro false ou seja retorna falsee
console.log(vitoriaand)
let vitoriaor = jogo1 || jogo2 // um dos sois esta true ou seja retorna true
console.log(vitoriaor)
let vitorianot1 = !jogo1 // inverte o valor atribuido
let vitorianot2 = !jogo2
console.log(vitorianot1, vitorianot2)

//logicos nao bolleanos; truthy ( True, numeros, strings) falsy( underfined, null, 0, false, "", NAN - not a number)
//ou seja strings escritas ou numeros >0 sao equivalestes ao true enquantos null,underfined... sao equivalentes a false
let NBoll = false || 'Teste'
console.log(NBoll)
let NBoll2 = !0 //0 é equivalente a false e com o operaddor not iverte ou seja retorna true
console.log(NBoll2)
