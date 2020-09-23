const getURL = new URL(window.location) //pega o endereço da página

const id = getURL.searchParams.get('id') //pega o id contido como parametro dentro do getURL

const formularioCPF = document.querySelector('[data-cpf]')
const formularioNome = document.querySelector('[data-nome]')

detalhaCliente(id).then((obj) => { // faço um get e preencho os campos do form com os campos do cliente
    formularioCPF.value = obj[0].cpf
    formularioNome.value = obj[0].nome
})
// jogar pro git, criar branch input error e dps faz merge
const form = document.querySelector('[data-form]')

form.addEventListener('submit', event => {
    event.preventDefault() // pro form nao ser enviado logo

    if(!validaCPF(formularioCPF.value)){ // Colocar uma borda vermelha no input e mostrar mensagem de erro <---- classe erro
        alert('CPF INVÁLIDO')
        return
    }
    editandoCliente(id, formularioCPF.value, formularioNome.value)


})
