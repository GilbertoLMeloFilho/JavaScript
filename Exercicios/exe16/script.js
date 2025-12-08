for(let i = 1; i<11; i++){ //pequeno projeto de cronometro com coisas ja vistas
    setTimeout( () => { //Arrow function (simplifando funções)
        document.getElementById("cron").innerText = i
    }, 1000 * i+1)
}