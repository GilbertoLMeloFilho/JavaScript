//Máximo Entre Dois Valores
function QualMaior(x, y){
    if(x>y){
        return console.log(x, " é maior que ", y)
    }
    else if (y>x){
        return console.log(y, " é maior que ", x)
    }
    else{
        return console.log(x, " e ", y, "sao iguais")
    }
}

/** outro jeito
function Max(n1,n2){
    return n1>n2 ? n1:n2
}
*/

n1 = 4
n2 = 6
let m = QualMaior(n1, n2)