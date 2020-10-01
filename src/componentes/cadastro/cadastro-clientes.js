import validaCPF from "../valida/validaCPF";
import {cadastrarClientes} from "../../api/cliente";
import "../../assets/css/cadastro-clientes.css"

const eventoEnvia = (form) => {

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

  form.addEventListener("submit", event => {
    event.preventDefault();
    const nome = event.target.querySelector("[data-nome]").value;
    const cpf = event.target.querySelector("[data-cpf]").value;
    
    const clearName = document.querySelector('[data-nome]')
    const cpfError = document.querySelector('[data-cpf]')
    const errorSpan = document.querySelector('.error')
    const cpfEmpty = document.querySelector('.cpfEmpty')

    cpfError.onfocus = () => {
      cpfError.style.borderColor = 'initial'
      errorSpan.classList.add('--hidden')
      cpfEmpty.classList.add('--hidden')
      cpfError.value = null // Apaga o cpf do campo de input
    }
    
    if(validaCPF(cpf) && cpf.length === 11) { // Se CPF for válido
      cadastrarClientes(nome, cpf).then(resp => {
        if(resp.status === 200){ //sucesso
          form.appendChild(mensagem('success', 'Cliente cadastrado com sucesso'))
          const mens = document.querySelector('#msg')
          mens.classList.add('active')
          
          setTimeout(() => { //Mensagem some depois de 3 segundos
            mens.classList.remove('active')
          }, 3000);

        }
        else {
          form.appendChild(mensagem('warning', 'Erro na criação do cliente'))
          const mens = document.querySelector('#msg')
          mens.classList.add('active')

          setTimeout(() => { //Mensagem some depois de 3 segundos
            mens.classList.remove('active')
          }, 3000);
        }
        return resp.body;
      } 
    )
      clearName.value = null //apaga do form dps de enviado
      cpfError.value = null
      return
      } 
    if(!cpf.length){ //CPF vazio
      cpfEmpty.classList.remove('--hidden')
      cpfError.style.borderColor = 'red'
    }  
    else {          // CPF inválido
        errorSpan.classList.remove('--hidden') 
        cpfError.style.borderColor = 'red'
    }
      
  });
}

export default eventoEnvia