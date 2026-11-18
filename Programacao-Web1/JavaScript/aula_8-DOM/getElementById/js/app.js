let paragrafo = document.getElementById("primParag")
let segParagrafo = document.getElementById("segParag")
let div1 = document.getElementById("div1")

function mudarCorIn(){
    div1.style.backgroundColor="pink"
    segParagrafo.textContent = "Cursor Entrou na Div"
}

function mudarCorOut(){
    div1.style.backgroundColor="purple"
    segParagrafo.textContent = "Cursor saiu da Div"
}







function mudarParag(){
    paragrafo.textContent = "Paragrafo atualizado"
}

function mudarCor(){
    paragrafo.style.color="Red"
    paragrafo.textContent = "Cursor Entrou no botão"
}

function mudarCorSaida(){
    paragrafo.style.color="green"
    paragrafo.textContent = "Cursor saiu do botão"
}
