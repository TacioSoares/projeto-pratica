var numeros = []

function sortear() {
    while (numeros.length < 6) {
        var digito = Math.ceil(Math.random()*60)
        if (numeros.indexOf(digito) == -1) {
            numeros.push(digito)
            adicionarNaTela(numeros)
        } else {
            sortear()
        }   
    }     
    
}
//12-18-30-32-51-52

function adicionarNaTela(numeros) {
    var spans = document.querySelectorAll('.digito')
    numeros.sort(function compare(a,b) {
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = numeros[i]
    }
}

function novoSorteio() {
    var spans = document.querySelectorAll('.digito')
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = ''
    }
    numeros = []
}