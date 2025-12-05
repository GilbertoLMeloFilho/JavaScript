//Média de Nota Escolar
function mediaAluno(notas){
    var soma = 0
    for(let indice in notas){
        soma = soma + notas[indice]
    }
    let media = soma / (notas.length)
    if(media<=59) return 'F'
    else if (media<=69) return 'D'
    else if(media<=79) return 'C'
    else if(media<=89) return 'B'
    else return 'A'
}

const array = [70, 100, 90];
let m = mediaAluno(array)
console.log(m)