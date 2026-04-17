//Cria referencia ao form e aos elementos h3 e h4 que exibirão o resultado
const frm = document.querySelector("form") //pega o primeiro form da pagina
const resp1 = document.querySelector("h3") //pega o primeiro h3 da pagina
const resp2 = document.querySelector("h4") //pega o primeiro h4 da pagina

//Adiciona um ouvinte de evento ao form, acionado quando o form for enviado
frm.addEventListener("submit", (e) => { //função arrow
    e.preventDefault() //Evita o envio do form
    //Cria variaveis para receber os valores digitados no form
    const titulo = frm.inttulo.value //pega o valor do campo titulo
    const duracao = Number(frm.induracao.value) //pega o valor do campo duracao e converte para numero

    //Calcula horas e minutos
    const horas = Math.floor(duracao / 60) //calcula a parte inteira das horas
    const minutos = duracao % 60 //calcula o resto da divisao em minutos    
    //Exibe o resultado nos elementos h3 e h4
    resp1.innerText = `Filme: ${titulo}` //exibe o titulo do filme
    resp2.innerText = `Duração: ${horas} hora(s) e ${minutos} minuto(s).` //exibe a duracao convertida
    //Limpa os campos do form
    frm.inttulo.value = "" //limpa o campo titulo
    frm.induracao.value = "" //limpa o campo duracao    
    //Coloca o foco no campo de titulo
    frm.inttulo.focus()
    e.preventDefault() //Evita o envio do form
})