function atualizar(){
    fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta =>{
        return resposta.json()
    }).then(economia => {
        console.log(economia)
        document.getElementById('valor-atual').innerHTML = "R$" + economia.USDBRL.bid.substr(0,4)
        console.log(economia)
        document.getElementById('maior-valor').innerHTML = "R$" + economia.USDBRL.high.substr(0,4)
        console.log(economia)
        document.getElementById('menor-valor').innerHTML = "R$" + economia.USDBRL.low.substr(0,4)
    }) 
}
setInterval (atualizar,10)
