//CRi referencia ao form

const frm = document.querySelector("form")
const resp = document.querySelector("h3")


//Ouvinte de evento, acionado ao clicar no botao submit 

frm.addEventListener("submit", (e) => {
    e.preventDefault() //Evita envio do form

    const nome = frm.inNome.value //obtem os valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)


    let peso  //declara a variável peso

    if(masculino ){ // se masculino (ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2) //math.pow eleva ao quadrado 

    } else{
        peso = 21 * Math.pow(altura, 2)
    }

    //Apresentar resultados respostas (alterar o conteudo do elemento h3 da página)

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kgs`
})
frm.addEventListener("reset", () =>{
    resp.innerText = "" // Limpa o campo das resposta
})
