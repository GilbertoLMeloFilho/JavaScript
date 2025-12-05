//Par ou Impar
function ParImpar(x){
    for(let i=1; i < x+1; i++){
        if(i%2==0){
            console.log(i, ' É Par')
        }
        else{
            console.log(i, " É Impar")
        }
    }
}
ParImpar(5)