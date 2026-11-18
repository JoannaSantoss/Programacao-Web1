let valorElemento = document.getElementById("valor")
let btnMais = document.getElementById("mais")
let btnMenos = document.getElementById("menos")

let contator = 0

btnMais.addEventListener('click', ()=>{

    valorElemento.textContent = contator
    contator++
    if(contator > 0){        
        valorElemento.style.color = "blue"        
    }
})

btnMenos.addEventListener('click', ()=>{
    contator--
    valorElemento.textContent = contator


    if(contator < 0){        
        valorElemento.style.color = "red"
    }
    
})