//factory functions

const celular = {
    Marca: 'Apple',
    Modelo: 'IPhone 17',
    TamanhoTela: {
        Vertical: 150,
        Horizontal: 75,
    },
    Bateria: 5000,
    Valor: 10000
}

function CriarCelular(Marca, Modelo, TamanhoTela, Bateria, Valor){ //cria um opjeto de forma mais facil e escalavel com uma função
    return {
        Marca,
        Modelo,
        TamanhoTela,
        Bateria,
        Valor,
        ligar(){
            console.log("Ligando...")
        }
    }
}

const celular2 = CriarCelular('Sansung', 'S25', 5.5, 5000, 7000);
console.log(celular2)

// constructor functions

function CriarCelularNovo(Marcacelular, ModeloCelular, TamanhoCelular, BateriaCelular, ValorCelular){
    this.Marca = Marcacelular,
    this.Modelo = ModeloCelular,
    this.TamanhoTela = TamanhoCelular,
    this.Bateria = BateriaCelular,
    this.Valor = ValorCelular,
    this.ligar = function() {
        console.log('Ligando...');
    }
}

const Celular = new CriarCelularNovo('Xiaome', 'Redmi Poco', 5.6, 6000, 5000)
console.log(Celular)

//Natureza Dinamica de Objetos

const Carro = {
    Marca: 'Fiat',
    Modelo: 'Mobi',
    VelocidadeMax: 150
}

Carro.QuantPortas = 4 //Adiciona um elemento
Carro.Cor = 'Preto' 
Carro.Buzina = function(){
    console.log('BIIIIIIII')
}
console.log(Carro);
delete Carro.QuantPortas; //Remove um elemento
delete Carro.VelocidadeMax;
console.log(Carro) //JS é dinamico ou seja é possivel mudar elementos dentro de um objeto dinamicamente

//Clonando Objetos

const NewCarro = Object.assign({ VidroEletrico: true}, Carro) //Criase uma nova variavel para armazanar o objeto clonado por Object.assing, o primero parametro {} é para armazenar o novo objeto, podendo ser criado um um novo atributo dentro das mesmas, e o segundo parametro é o objeto clonado
console.log(NewCarro);

const NewCArro2 = {...Carro}; //Tres pontos mais o nome do objeto tambem o clona
console.log(NewCArro2)
console.log("-----------Math---------")
//Math  biblioteca com diversos metodos matematicos
console.log(Math.random()) //Mostra um valor aleatorio entre 0 e 1
console.log(Math.round(Math.random() * 100)) // Metodo para mostras um valor aleatorio entre 1 e 100
console.log(Math.max(9,7)) //Mostra o maior valor entre os dois dados
console.log(Math.min(9,7)) //Mostra o menor valor entre os dois dados
console.log(Math.sqrt(16)) //Mostra a raiz quadrada do numero
console.log(Math.pow(3,3)) //Eleva o primeriro na base do segundo
console.log(Math.round(9.87)) //Arredonda o numero para o mais proximo

//String 
console.log('--------String-----------')
const Mensagem = "Hello Word"
console.log(Mensagem.length) //Mostra quantas letras tem a string
console.log(Mensagem[0]) //o valor dentro dos colchetes é o indice de qual letra sera mostrada, começando de 0
console.log(Mensagem.includes("Word")) //confere se tem essa string dentro da string (maiusculas e minusculas sao diferentes)
console.log(Mensagem.includes("Mundo"))
console.log(Mensagem.startsWith("Hello"))//confere se a string inciciase com a palavra
console.log(Mensagem.startsWith("Ola"))
console.log(Mensagem.endsWith("Word"))//confere se a string termina com a palavra
console.log(Mensagem.endsWith("Hello"))
console.log(Mensagem.indexOf("Word"))//confere onde comeca essa palavra na string (começando do 0)
console.log(Mensagem.replace('Hello', 'Olá'))//troca uma palavra por outra
console.log(Mensagem.trim())//retira os espaços '  ' do começo e do final
console.log(Mensagem.split(" "))//reparte a string sempre que acha um espaço colocando em um array

//Templete Literal
let Nome = 'Matheus'
const NewMensagem = `Ola ${Nome}. 
Origado por tudo!
'Tamo junto'`
console.log(NewMensagem) //escreve tudo que esta dentro, mostrando quebras de linhas etc

//Date 

const data = new Date(2008, 9, 27, 8, 30)
console.log(new Date()) // Mostra seu horario atual do pc
console.log(new Date('Octuber 27 2008')) //Mostra o horario que vc definiu
console.log(new Date(2008, 9, 27, 8, 30)) //jeito certo de definir data: Ano, Mes (o mes começa do 0 ou seja um a menos do padrao), Dia, Hora
console.log(data.toDateString())//Transfroma em string
console.log(data.getDate())//pega o valor dasejado( data, ano, mes etc )
console.log(data.toISOString())//Usado ppara pegar data em banco de dados