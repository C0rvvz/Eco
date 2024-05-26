function mostrarMas(id){
    const div = document.getElementById(id)
    const btn = document.getElementById(id+'-btn')
    console.log(div, btn);
    btn.classList.add('hidden')

    div.classList.remove('hidden')
}

function cerrarMostrarMas(id){
    const div = document.getElementById(id)
    const btn = document.getElementById(id+'-btn')

    div.classList.add('hidden')

    btn.classList.remove('hidden')   
}