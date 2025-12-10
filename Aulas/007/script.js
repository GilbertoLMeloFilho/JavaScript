//element.offsetWidth / element.offsetHeight
const caixa = document.getElementById("caixa")
console.log("Altura offset: ", caixa.offsetHeight) //retorna o valor de altura (vertical), tamanho TOTAL do elemento incluindo bordas e padding.
console.log("Largura offset: ", caixa.offsetWidth) //retorna o valor de largura (horizontal), tamanho TOTAL do elemento incluindo bordas e padding.

//element.clientWidth / element.clientHeight
console.log("Altura client: ", caixa.clientHeight) ////retorna o valor de largura (horizontal), tamanho somente do conteúdo + padding.
console.log("Largura client: ", caixa.clientWidth) //retorna o valor de altura (vertical), tamanho somente do conteúdo + padding.

//element.scrollTop / element.scrollHeight
console.log(caixa.scrollTop) //retorna quantos pixels o usuario ja rolou para baixo de um scroll
console.log(caixa.scrollHeight) //retorna o valor comppleto do conteudo, ate a parte não visivel de um scroll

//element.getBoundingClientRect()
console.log(caixa.getBoundingClientRect()) //retorna valores apartir da posição do elemento 

                                            /**Ele retorna:

                                            top → distância do topo da tela

                                            left → distância esquerda da tela

                                            bottom → distancia ate em baixo

                                            right → distancia ate a direita da tela

                                            width → largura do elemento (conteudo, padding e border

                                            height → altura do elemento (conteudo, padding e border

                                            */


//element.parentElement
const filho = document.getElementById("ul_filho")
console.log("element.parentElement: ", filho.parentElement) //retorna o pai do elemento

//element.children | element.childNodes
const pai = document.getElementById("lista_pai") 
console.log("element.children: ", pai.children) // retorna o filho de elemento (so elementos) | É um HTMLCollection, não um array real.
console.log("element.childNodes: ", pai.childNodes) //retorna o filho do elemento (inclui texto, comentários, espaços, quebras de linha)

//element.firstChild | firstElementChild
console.log("element.firstChild: ", pai.firstChild) //retorna o primeiro filho, nao importando oq é
console.log("firstElementChild: ", pai.firstElementChild) //retorna o primeiro elemento filho

//element.lastChild | element.lastElementChild
console.log("element.lastChild: ", pai.lastChild) //retorna o ultimo filho, nao importando oq é
console.log("element.lastElementChild: ", pai.lastElementChild) //retorna o ultimo elemento filho, nao importando oq é

//element.nextElementSibling | element.previousElementSibling
console.log("element.nextElementSibling: ",filho.nextElementSibling) //retorna o irmao proximo irmao do elemento ( elemento de mesmo nivel)
console.log("element.previousElementSibling: ", filho.previousElementSibling) //retorna o irmao antes do elemento

//element.closest("seletor")
console.log(filho.closest("#avo")) //retorna o elemento dentro da sua arvore (pai, avo, ...) que corresponde ao seletor
console.log(filho.closest("#bisavo"))

