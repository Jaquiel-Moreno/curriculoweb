
//Cria  referência ao form

const frm = document.querySelector("form")

const resposta1 = document.querySelector("h3")

const resposta2 = document.querySelector("h4")

//cria ouvinte de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) =>{

    e.preventDefault() // evita envio do form

    const nome = frm.inNome.value // obtem os valor do form

    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    //lOGICA CALCULAR A MEDIA 

     const media = (nota1 + nota2)/2

     resposta1.innerText = `Medias das notas ${media.toFixed(2)}`

     //Cria condição 
     if(media >= 7){ 

        //alterar o estilo da cor do elemento resposta2
        resposta2.innerText = `Parabéns! ${nome} você foi aprovado`
        resposta2.style.color = "blue"
     } 
     else if(media >= 4){
      resposta2.innerText = `Atenção! ${nome} você está em exame`
      resposta2.style.color ="green"
        }
     else {
        resposta2.innerText = `Ops ${nome}... você foi reprovado`
        resposta2.style.color = "red"
     } 
})

frm.addEventListener("reset", () =>{
   resposta1.innerText = "" // Limpa o campo das resposta
   resposta2.innerText = ""
})