import {deletarCliente, listarClientes, detalhaCliente} from "../../api/cliente";
import "../../assets/css/clientes.css"

const apagaCliente = async (id) => {
  const cliente = await detalhaCliente(id).then(obj => obj[0])
  const response = await confirm(`Cliente: ${cliente.nome} \nCPF: ${cliente.cpf} \nDeseja excluir?`)
  if(response){
      deletarCliente(id).then(() => {
      const item = document.querySelector(`.line-${id}`)
      item.remove()
      })
  } 
}

const criaCorpoTabela = (tabela) => {
  const corpoTabela = document.createElement('tbody')
  
  const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement("tr"); 
  
    linha.setAttribute("class", `line-${id}`);
  
    const conteudoLinha =`
    
    <td>${cpf}</td>
    <td>${nome}</td>
    <td>${id}</td>
    <td><button id="deleteBTN-${id}" class="btn btn-danger btn-sm">X</button></td>
    <button type="button" id="deleteBTN-${id}" class="btn btn-info" onclick="navegacao('/edita?id=${id}'); return false;">Editar</button>
    `;
  
    linha.innerHTML = conteudoLinha;
  
    linha.querySelector(`#deleteBTN-${id}`).addEventListener("click", () => {
      apagaCliente(id)
   })
  
    return linha;
  };

  
  listarClientes().then(clientes => {
    clientes.forEach(indice => {
      corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
    });
  });

  tabela.appendChild(corpoTabela)

}

export const inicializaTabela = () => {
  const cabecalho = `
    <thead class="thead-dark">
    <tr>
      <th scope="col">CPF</th>
      <th scope="col">Nome</th>
      <th scope="col">Id</th>
      <th scope="col">Remover</th>
      <th scope="col">Editar</th>
      <th>
          <a class="btn btn-primary" onclick="navegacao('/cadastro'); return false;">Novo Cliente</a>
      </th>
    </tr>
    </thead>`

  const tabela = document.createElement('table') // cria a tabela
  tabela.innerHTML = cabecalho // passa o conteudo da tabela pra dentro dela
  tabela.classList.add("table")

  criaCorpoTabela(tabela)

  return tabela
}






