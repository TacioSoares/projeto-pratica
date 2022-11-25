var lista = document.querySelectorAll('.cidadao')
var buscar = document.querySelector('#ibusca')
buscar.addEventListener('input', function(){
    var pesquisa = new RegExp(document.querySelector('#ibusca').value,"i")
    lista.forEach(function(pessoa){
        var nome = pessoa.querySelector('.nome').innerText
        if (pesquisa.test(nome)) {
            pessoa.classList.remove('invisivel')
        } else {
            pessoa.classList.add('invisivel')
        }
    })
})