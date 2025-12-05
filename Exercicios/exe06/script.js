//Encontre o String
function VerSting(obj){
    for(const chave in obj){
        if(typeof(chave, obj[chave]) === 'string'){
            console.log(obj[chave])
        }
    }
}

const filme = {
    Titulo: "SuperMen",
    Ano: 2025,
    Diretor: 'James gun',
    Bilheteria: 10000000
}
VerSting(filme)