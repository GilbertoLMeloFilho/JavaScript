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
document.getElementById("lista").removeChild(document.getElementById("trc"))
document.getElementById("tr").remove()

//scrollTo -> move o usuario a algum lugar da pagina
function IrTopo(){
    scrollTo({
        top: 0, //posição para cima onde o usuario vai
        left: 0, //posição para os lados onde o usuario vai
        behavior: "smooth" //velociodade que a tela vai -> auto: automatico | smooth: suavimente
    })
}