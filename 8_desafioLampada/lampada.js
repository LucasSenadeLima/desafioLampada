var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}


function Ligar(){
    if (!estaQuebrada()){
    lamp.src ='ligada.svg'
    window.document.body.style.backgroundColor = '#fecd00'}
}
function Desligar(){
    if (!estaQuebrada()){
    lamp.src ='desligada.svg'
    window.document.body.style.backgroundColor = 'rgb(48,48,48)'}
}

lamp.addEventListener ('click', Quebrar)
function Quebrar(){
    lamp.src = 'quebrada.svg'
    window.document.body.style.backgroundColor = 'black'
}

function Consertar(){
    if (estaQuebrada()){
    lamp.src = 'desligada.svg'}
}