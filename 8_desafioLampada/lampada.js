var lamp = window.document.getElementById('lampada')


function Ligar(){
    lamp.src ='ligada.svg'
    window.document.body.style.backgroundColor = '#fecd00'
}
function Desligar(){
    lamp.src ='desligada.svg'
    window.document.body.style.backgroundColor = 'rgb(48,48,48)'
}

function Quebrar(){
    lamp.src = 'quebrada.svg'
    window.document.body.style.backgroundColor = 'white'
}