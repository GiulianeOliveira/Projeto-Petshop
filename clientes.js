const informacoesClientes = [
  {
    cpf: 18875539081,
    nome: "Jairo"
  },
  {
    cpf: 18875539081,
    nome: "Monica"
  },
];

const exibeCliente = (cpf, nome, id) => {
  const linha = document.createElement("tr");
  const conteudoLinha = `
  <td>${cpf}</td>
  <td>${nome}</td>
  <td>${id}</td>
  <td><button id="deleteBTN">X</button>${id}</td>
  <td><a class="btn btn-primary" href="cadastro-clientes.html">X</a></td>
  `;
// criar uma const
  linha.innerHTML = conteudoLinha;
  return linha;
};
// pegar id do get, quando clicar no botao pega o id e manda request de delete
// no then da request, refaz a request de get, passar data dentro de um html
const corpoTabela = document.querySelector("[data-conteudo-tabela]");

informacoesClientes.forEach(indice => {
  console.log(indice, '<-------<-------')
  corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
})


