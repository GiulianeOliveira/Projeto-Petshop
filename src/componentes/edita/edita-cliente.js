import {detalhaCliente, editandoCliente} from "../../api/cliente"
import validaCPF from "../valida/validaCPF";
import "../../assets/css/cadastro-clientes.css"

export const eventoForm = form => {

    const getURL = new URL(window.location) //pega o endereço da página

    const id = getURL.searchParams.get('id') //pega o id contido como parametro dentro do getURL

    const formularioCPF = form.querySelector('[data-cpf]')
    const formularioNome = form.querySelector('[data-nome]')

    detalhaCliente(id).then((obj) => { // faço um get e preencho os campos do form com os campos do cliente
        formularioCPF.value = obj[0].cpf
        formularioNome.value = obj[0].nome
    })

    const mensagem = (classe, msg) => {
        const linha = document.createElement('tr')
        linha.setAttribute('id', 'msg')
        const conteudo = `
            <div class="alert alert-${classe}" role="alert">
                ${msg}
            </div>
        `
        linha.innerHTML = conteudo
        return linha
    }

    form.addEventListener('submit', event => {
        event.preventDefault() // pro form nao ser enviado logo
        const errorSpan = document.querySelector('.error')
        const cpfEmpty = document.querySelector('.cpfEmpty')

        formularioCPF.onfocus = () => {
            formularioCPF.style.borderColor = 'initial'
            errorSpan.classList.add('--hidden')
            cpfEmpty.classList.add('--hidden')
        }

        if(!validaCPF(formularioCPF.value)){
            if(!formularioCPF.value){
                cpfEmpty.classList.remove('--hidden')
                formularioCPF.style.borderColor = 'red'
            }
            if(formularioCPF.value){
                errorSpan.classList.remove('--hidden') //ele perde
                formularioCPF.style.borderColor = 'red'
                formularioCPF.value = null
                return
            }
            
            return 
        }
        
        // criar classe .error.--hidden de novo
    
        
        editandoCliente(id, formularioCPF.value, formularioNome.value)
        .then(resp => {
            if(resp.status === 200){ //sucesso
                form.appendChild(mensagem('success', 'Cliente editado com sucesso'))
                const mens = document.querySelector('#msg')
                mens.classList.add('active')

                setTimeout(() => { //Mensagem some depois de 3 segundos
                    mens.classList.remove('active')
                }, 3000);
            }
            else {
                form.appendChild(mensagem('warning', 'Erro na edição do cliente'))
                const mens = document.querySelector('#msg')
                mens.classList.add('active')

                setTimeout(() => { //Mensagem some depois de 3 segundos
                    mens.classList.remove('active')
                }, 3000);
            }
            
        })
        //.then(e => alert('Cliente editado com sucesso.'))
    })

}