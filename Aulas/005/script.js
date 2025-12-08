document.title = "DOM - alterado"; // document => referenciase ao documento como um todo, descendo o nivel de ramo
document.body.style.backgroundColor = "gray"; // desce o nivel de referencia, o backgrand esta dentro de style que esta dentro de body que esta no documento
document.write("Escrevendo...") //função write escreve
document.write("<h1>Escrevendo titulos...</h1>"); //função write aceita tags
document.getElementById("PrimTit").innerHTML = "Novo Titulo" //getElemnetbyId pega o elemento da pagina por id
setTimeout(function name(params) { // função setTimeout seta um tempo para algo acontecer
    document.getElementById("PrimTit").innerHTML = "Mais um titulo novo" //innerHTML é usado para escrever algo ou reescrever com formatação (CSS)  | innertext tbm escreve porem sem formatacao
}, 3000); //o tempo esta em milisegundos | 1 segunto = 1000 milisegundos


for(let i = 1; i<11; i++){ //pequeno projeto de cronometro com coisas ja vistas
    setTimeout(function name(params) {
        document.getElementById("cron").innerText = i
    }, 1000 * i+1)
}

document.getElementsByName("par")[0].innerHTML = "Sem texto" //getElementsByName pega varios elementos por nome e voce declara qual vc quer por indice entre colchetes
var check = document.getElementsByName("check"); //pega varios elementos e retorna os mesmos
console.log(check)

document.getElementsByClassName("classe")[0].innerHTML = "tenha ideias" //trabalha da mesma forma do anterior porem com o nome da classe

document.