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

