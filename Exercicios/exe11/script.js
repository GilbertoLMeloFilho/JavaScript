//Montador de Endereço
let endereco = {
    rua: "Rua Foda",
    Cidade: "Cidade Do Caralho",
    Cep: "Nao sei oq é cep"
}
function ExibirEndereco(end){
    for(let chave in end){
        console.log(chave, endereco[chave])
    }
}
ExibirEndereco(endereco)