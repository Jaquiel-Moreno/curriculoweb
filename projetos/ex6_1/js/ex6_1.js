


// obtem Elementos da página
const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []  // vetor global

frm.addEventListener("submit", (e) =>{

    e.preventDefault() // evita envio do form

    const nome = frm.inPaciente.value // obtem nome do Pacientes

    pacientes.push(nome) //Adicionar o nome no final do vetor

    let lista = "" // String para concatenar pacientes

    //for para "tradicional " (inicia em 0, enquanto menor que o tamanho do array )
    for(let i = 0; i < pacientes.length; i++){
        lista += `${i+1}. ${pacientes[i]}\n`
    }
    respLista.innerText = lista  // Exibe a lista de Pacientes na página 
    frm.inPacientes.value = ""   //  Limpa conteudo do campo de formulário
    frm.inPaciente.focus()     //   Posiona o cusor no campo
})

//Adiona um "ouvinte" para o Evento click no btUrgencia que está no form 

frm.btUrgencia.addEventListener("click", () =>{

    //Verifica se as validações do form estão ok (no caso, paciente is required )

    if(!frm.checkValidity()){
        alert("Informe do Paciente a ser atendido em carater de urgência")

        frm.inPaciente.focus() // Posiona o cusor no campo
        return  // retorna ao form


    }


const nome = frm.inPaciente.value // obtem nome do Pacientes
pacientes.unshift(nome)  // Adicionar o nome no inicio  do vetor
let lista = "" // String para concatenar pacientes

// forEach Aplicado sobre o array  pacientes

pacientes.forEach((paciente, i) =>  (lista += `${i+1}. ${paciente}\n`))
respLista.innerText = lista // Exibe a lista  de Pacientes  na página 
frm.inPaciente.value = "" // limpa conteudo do campo de formulário
frm.inPaciente.focus()     //   Posiona o cusor no campo
})

frm.btAtender.addEventListener("click", () =>{
    //Se o tamanho do vetor = 0

    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()

        return
    }

    const atender = pacientes.shift() // remove do inicio da fila (e obtem o nome )
    respNome.innerText = atender // Exibe o nome do paciente em atendimento 
    let lista = "" // string para concatenar pacientes

    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`))

    respLista.innerText = lista // Exibe  a lista de pacientes na pagina
})

