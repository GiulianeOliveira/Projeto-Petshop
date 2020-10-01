import {inicializaCadastro} from "./componentes/cadastro/componente-cadastro";
import {inicializaTabela} from './componentes/lista/listagem-cliente'
import {inicializaFormEdicao} from './componentes/edita/form-edicao'

const rotas = {
    "/": inicializaTabela,
    "/cadastro": inicializaCadastro,
    "/edita": inicializaFormEdicao
}

const rootDiv = document.querySelector('[data-container]')

export const navegacao = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname) //estado,  titulo e url
    //pushState adiciona um estado à pilha de histórico de navegação 
    
    rootDiv.innerHTML = "" // apagar o que tiver na div
    const iniciarRota = rotas[window.location.pathname] // acessa o valor pela chave
    rootDiv.appendChild(iniciarRota())

}
window.navegacao = navegacao // tornando global

window.onpopstate = () => { // retira o estado da pilha
    rootDiv.innerHTML = "" 
    rootDiv.appendChild(rotas[window.location.pathname]())

}