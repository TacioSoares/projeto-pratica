var numeros = []

function sortear() {
    while (numeros.length < 8) {
        var digito = Math.ceil(Math.random()*60)
        if (numeros.indexOf(digito) == -1) {
            numeros.push(digito)
            adicionarNaTela(numeros)
        } else {
            sortear()
        }   
    }     
    
}

function adicionarNaTela(numeros) {
    var spans = document.querySelectorAll('.digito')
    numeros.sort(function compare(a,b) {
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })
    spans[0].innerHTML = numeros[0]
    spans[1].innerHTML = numeros[1]
    spans[2].innerHTML = numeros[2]
    spans[3].innerHTML = numeros[3]
    spans[4].innerHTML = numeros[4]
    spans[5].innerHTML = numeros[5]
    spans[6].innerHTML = numeros[6]
    spans[7].innerHTML = numeros[7]
}

function novoSorteio() {
    var spans = document.querySelectorAll('.digito')
    spans[0].innerHTML = ''
    spans[1].innerHTML = ''
    spans[2].innerHTML = ''
    spans[3].innerHTML = ''
    spans[4].innerHTML = ''
    spans[5].innerHTML = ''
    spans[6].innerHTML = ''
    spans[7].innerHTML = ''
    numeros = []
}