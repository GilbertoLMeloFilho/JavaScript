//Multiplos de 3 e 5
function SomaMultiplos(valor){
    var x = 0
    var y = 1
    var a = 0
    var b = 1
    valores = []
    while( x + 3 <= valor){
        x = 3 * y
        y++
        valores.push(x)
    }
    while( a + 5 <= valor){
        a = 5 * b
        b++
        valores.push(a)
    }
    console.log(valores)
    let soma = 0
    for(let indice in valores){
        soma = soma + valores[indice]
    }
    console.log(soma)
}
SomaMultiplos(15)