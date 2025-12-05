//Segurança Virtual
const listaconvGuilherme = ['Izis', 'Alana', 'Vitoria', 'Ana Luiza', 'Gilberto'] //array com os convidados do guilherme
const listaconvDaniel = ['Joao Daniel', 'Marcos', 'Sophia', 'Davi', 'Gilberto'] //array com os convidados do daniel
function Iniciar(){ //função inicia apartir do click no botão
    
    let nome = document.getElementById("nome").value //pega o valor do nome
    let conv = document.getElementById("convidou").value //pega o valor de quem convidou
    var certo = false //duas variaveis com valor false, para conferir se o nome de quem convidou existe e se o convidado esta na lista
    var errado = false
    if(conv === "Guilherme"){
        for(indice in listaconvGuilherme){
            if(nome === listaconvGuilherme[indice]){
                certo = true
                break
        }
        certo = false
    }}
    else if(conv === "Daniel"){
        for(indice in listaconvDaniel){
            if(nome === listaconvDaniel[indice]){
                certo = true
                break
        }
        certo = false
    }}
    else{
        console.log('nao existe')
        errado = true
    };
    let texto = document.getElementById("texto")
    if(certo === true){
        texto.innerText = "Voce esta liberado para entrar"
    }
    else{
        texto.innerText = "Voce nao esta liberado para entrar"
    }
    if(errado === true){
        texto.innerText = "Nome de quem te convidou não existe"
    }}
