document.title = "DOM - alterado"; // document => referenciase ao documento como um todo, descendo o nivel de ramo, title o titulo que esta dentro da pagina
document.body.style.backgroundColor = "gray"; // desce o nivel de referencia, o backgrand esta dentro de style que esta dentro de body que esta no documento
setTimeout(function name(params) { // função setTimeout seta um tempo para algo acontecer
    document.getElementById("PrimTit").innerHTML = "Mais um titulo novo" //innerHTML é usado para escrever algo ou reescrever com formatação (CSS)  | innertext tbm escreve porem sem formatacao
}, 3000); //o tempo esta em milisegundos | 1 segunto = 1000 milisegundos


//Funções de seleção de elemento
//getElementById
document.getElementById("test").innerHTML = "Selecionado por getElementById" //getElemnetbyId pega o elemento da pagina por id

//getElementsByName
document.getElementsByName("par")[0].innerHTML = "Selecionado por getElementsByName" //getElementsByName pega varios elementos por nome e voce declara qual vc quer por indice entre colchetes

//getElementsByClassName
document.getElementsByClassName("classe")[0].innerHTML = "Selecionado por getElementsByClassName" //trabalha da mesma forma do anterior porem com o nome da classe

//getElementsByTagName
document.getElementsByTagName("h3")[0].innerHTML = "Selecionado por getElementsByTagName" //Seleciona por tag HTML -> h1 / p etc

//querySelector
document.querySelector("#um").innerHTML = "Selecionado por querySelector" //seletor geral selecionado por tag id ou classe se tiver mais de um elemento ele pegara o primeiro
document.querySelector(".segundo").innerHTML = "Selecionado por querySelector"
document.querySelector("div").innerHTML = "Selecionado por querySelector"

//querySelectorAll
document.querySelectorAll(".segundo")[1].innerHTML = "Selecionado por querySelectorAll" //seletor geral por tag class ou id porem com vetor para escolher( [0] )


//Função de valores
let nome = ""
function armazenarNome (){
    nome = document.getElementById("nome").value //a função value pega o valor de dentro de um input HTML
    event.preventDefault() //nao deixa a pagina recaregar ao dar submit
}
function MostarNome(){
    document.getElementById("caixa").innerText = nome
    event.preventDefault()
}

//Funções de escrita:
//innerText
document.getElementById("innertext").innerText = "<i>innerText</i>" //reescre e le texto porem nao pega texto oculto por css e nao coloca tags html é o mais lento

//innerHTML
document.getElementById("innerHTML").innerHTML = "<i>innerHTML</i>" //reescre e le texto pega texto oculto por css e é o unico que aceita tags HTML

//textContent
document.getElementById("textContent").textContent = "<i>textContent</i>" //reescre e le texto pega texto oculto por css e nao coloca tags html, é o mais rapido

//Write
document.write("document.write") //função write escreve na tela de forma simples sem lugar expecifico e sem tag no HTML, a escrita vai para o final da pagina
document.write("<h1>document.write</h1>"); //função write aceita tags