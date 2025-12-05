//Números Primos
function NPrimos(valor){
    const Primos = []
    for(let numero = 2; numero <=valor; numero++){
        let ePrimo = true
        for(let x = 2; x < numero; x++){
            if(numero%x==0){
                ePrimo =false
                break
            }
        }
        if(ePrimo){
            Primos.push(numero)
        }
    }
    return Primos
}
tt = NPrimos(10)
console.log(tt)