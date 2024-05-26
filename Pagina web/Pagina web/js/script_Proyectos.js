function crearProyectos () {
    let textarea = document.getElementById("crear")
    textarea.classList.remove("hidden")
    textarea.focus()
}

let estrellas = document.getElementById('estrellas');
let luna = document.getElementById('luna');
let detras = document.getElementById('detras');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let adelante = document.getElementById('adelante');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value= window.scrollY;
    estrellas.style.left = value *0.25 + 'px';
    luna.style.top = value * 1.05+ 'px';
    detras.style.top = value * 0.05+ 'px';
    adelante.style.top = value * 1.05+ 'px';
    text.style.marginRight = value * 4+ 'px';
    text.style.marginTop = value * 1.5+ 'px';
    btn.style.top = value * 1.05+ 'px';
})