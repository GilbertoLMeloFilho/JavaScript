//Encontre a igualdade
function Endereco(rua, cidade, cep){
    return{
        rua,
        cidade,
        cep,
    }
}
const end1 = Endereco('A', 'B', 'C');
const end2 = Endereco('A', 'B', 'C');

function Igual(end1, end2){
    for(let chave in end1){
        if(end1[chave] != end2[chave]){
            return false
        }
    }
    return true
}

function MemoriaIgual(end1, end2){
    return end1 === end2
}

console.log(Igual(end1, end2))
console.log(MemoriaIgual(end1, end2))
