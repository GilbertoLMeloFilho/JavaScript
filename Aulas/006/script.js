// atributes
//hasAttribute -> confere se um elemento possui um atributo ( id / class / style / src / hidden / etc... )
document.getElementById("idqualquerum").innerText = document.getElementById("idqualquerum").hasAttribute("class")
document.getElementById("idqualquerdois").innerText = document.getElementsByClassName("classequalquer")[0].hasAttribute("id")

//getAttribute  -> pega o valor (nome) do atributo
document.getElementById("idqualquertres").innerText = document.getElementById("idqualquertres").getAttribute("class")
document.getElementById("idqualquerquatro").innerText = document.getElementById("idqualquerquatro").getAttribute("id")

//setAttribute  -> seta ou reseta um atributo
document.getElementById("idqualquercinco").innerText = document.getElementById("idqualquercinco").hasAttribute("class") //confere se posui a classe (nao possui)
document.getElementById("idqualquercinco").setAttribute("class" , "classequalquer") //adiciono essa classe ao elemento
document.getElementById("idqualquerseis").innerText = document.getElementById("idqualquercinco").hasAttribute("class") //confiro novamente se possui depois de adicioanar (obviamente possui)

//removeAttribute -> remove um atributo de um elemento
document.getElementById("idqualquersete").innerText = document.getElementById("idqualquersete").hasAttribute("class") //confere se posui a classe (possui)
document.getElementById("idqualquersete").removeAttribute("class") //remove essa classe do elemento
document.getElementById("idqualqueroito").innerText = document.getElementById("idqualquersete").hasAttribute("class") //confiro novamente se possui depois de remover

//creatElement / creatTetNode / appendChild
document.getElementById("criar").appendChild(document.createElement('p').appendChild(document.createTextNode("Novo texto")))
//primiero pego a div criar | crio um filho para ela | nesse filho eu crio um elemento p | no p eu crio um filho | e no filho eu crio um no de texto com o texto 

//removeChild | remove
document.getElementById("lista").removeChild(document.getElementById("trc")) //remove o filho
document.getElementById("tr").remove() //remove de forma direta

//appendChild | insertBefore | prepend | append

document.getElementById("listagem").appendChild(document.createElement("li").appendChild(document.createTextNode("Novo texto"))) //appendChild
document.getElementById("listagem").insertBefore(document.createTextNode("Texto insertBefore"), document.getElementById("l2")) //adiciona o novo elemento antes de segundo parametro passado

//prepend
const ul1 = document.getElementById("listagem");
const li1 = document.createElement("li");
li1.textContent = "Texto prepend 1";
ul1.prepend(li1); //adiciona um elemetno na primeira posição

//append
const li2 = document.createElement("li");
li2.textContent = "Texto append 1";
ul1.append(li2); //adiciona um elemento na ultima posição

//element.style.PropriedadeCSS
var container = document.getElementById("container")
container.style.backgroundColor = "blue" //altera alguma propriedade css

//element.classList.add("classe")
var lista1 = document.getElementsByClassName("top")[0]
lista1.classList.add("cclasse") //adiciona uma classe a um elemento

//element.classList.remove("classe")
var lista2 = document.getElementById("vendoclass1")
lista2.classList.remove("cclasse") //remove uma classe

//element.classList.toggle("classe")
var lista3 = document.getElementById("vendoclass2")
lista3.classList.toggle("cclasse") //adiciona uma classe, se ja tiver ela remove

//element.classList.contains("classe")
var lista4 = document.getElementById("vendoclass4")
console.log(lista4.classList.contains("cclasse")) //retorna true/false para ve se o elemento tem a classe ou não

var lista5 = document.getElementById("vendoclass5")
console.log(lista5.classList.contains("cclasse"))

//form.elements
const form = document.getElementById("meuForm");
form.elements.nome.value = "Gilberto" //seta um valor padrao ao input
form.elements.email.value = "Teste@gmail.com"
console.log(form.elements) //retorna uma tabela com informs do input (keys etc...)

//input.value
const valor = document.getElementsByName("nome")[0].value //retorna o valor de um input
console.log(valor)

//event.preventDefault() Impede o comportamento padrão de algo acontecer

const btn = document.getElementById("btn")
btn.addEventListener("click", () => { //é usado para disparar um evento
    console.log("Enviou"); //evento click quando algo é clicado
    event.preventDefault()
})
const nome = document.getElementsByName("nome")[0]
nome.addEventListener("input", () => { //input é para quando é escrito algo
    console.log("Digitando")
})

nome.addEventListener("change", () => { //quando se sai de uma caixa de input
    console.log("eventchange")
})
window.addEventListener("load", () => { //ativa o eveto quando a pagina carrega
    console.log("pagina carregou")
})
const caixa = document.getElementById("caixa")
const texto = document.getElementById("texto")
caixa.addEventListener("mouseover", () => { //quando o mouse entra
    caixa.style.backgroundColor = "red"
    texto.innerHTML ="Mouse entrou"
})
caixa.addEventListener("mouseout", () => { //quando o mouse sai
    caixa.style.backgroundColor = "orange"
    texto.innerHTML ="Mouse saiu"
})

/**
 alguns eventos | 
               \/
Evento	Quando
click	Clicar	
input	Enquanto digita
change	Após mudar e sair
submit	Enviar form	
keydown	Tecla pressionada
keyup	Tecla solta
mouseover	Mouse entra
mouseout	Mouse sai
load	Página carregou*/

//scrollTo -> move o usuario a algum lugar da pagina
function IrTopo(){
    scrollTo({
        top: 0, //posição para cima onde o usuario vai
        left: 0, //posição para os lados onde o usuario vai
        behavior: "smooth" //velociodade que a tela vai -> auto: automatico | smooth: suavimente
    })
}