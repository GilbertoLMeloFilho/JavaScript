//Montador de Postagem de blog
function CriarPost(titulo, mensagem, autor, visualizacao, autcomen, menscomen, estaaoVivo){
    return{
        titulo,
        mensagem,
        autor,
        visualizacao,
        comentario:  [autcomen, menscomen],
        estaaoVivo,
    }
}

let Post = CriarPost('Flamengo', 'Flamengo e top', 'Gilberto', 10000, 'Guilheme', 'Gremio e melhor', false)
console.log(Post)
