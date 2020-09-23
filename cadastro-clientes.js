const formCadastroCliente = document.querySelector("[data-form]");

formCadastroCliente.addEventListener("submit", event => {
  event.preventDefault();
  
const cadastrarClientes = (nome, cpf) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf
  });

  return fetch("http://localhost:4000/clientes/cliente", {
    method: "POST",
    headers: {
      "Content-Type": "application/json" 
    },
    body: json
  }).then(resp => {
      return resp.body;
    } 
  )
}

  const nome = event.target.querySelector("[data-nome]").value;
  const cpf = event.target.querySelector("[data-cpf]").value;

  if(validaCPF(cpf) && cpf.length === 11) {
    cadastrarClientes(nome, cpf);
  } else {
    alert("O CPF não é válido");
  }
  
});
