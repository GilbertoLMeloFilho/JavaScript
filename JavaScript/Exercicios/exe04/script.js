//Medidor de Velocidade
function VerificaVelocidade(vel){
    let velocidade = Math.floor(vel)
    if(velocidade<=70){
        return "ta de boa";
    }
    else{
        const pontos = Math.floor(((velocidade - 70) / 5))
        if (pontos >=12){
            return 'Carteira suspensa';
        }
        return pontos
    }
}
let Velocidade = 80
let Naosei = VerificaVelocidade(Velocidade)
console.log(Naosei)
