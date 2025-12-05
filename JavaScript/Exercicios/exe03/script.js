//FizzBuzz
function FizzBuzz(n){
    if(typeof(n) === 'number'){
        if(n%3==0 && n%5==0){
            return "FizzBuzz"
        } else if(n%3==0){
            return "Fizz"
        } else if(n%5==0){
            return "Buzz"
        }else{
            return n
    }}
    else{
        return 'Nao é um numero'
    }
}
const resultado = FizzBuzz(15)
console.log(resultado)