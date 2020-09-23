const listarClientes = () => {
  return fetch("http://localhost:4000/clientes", {
    method: "GET"
  })
    .then(resp => {
      return resp.json();
    })
    .then(json => {
      return json;
    });
};

// deletar clientes 
const deletarCliente = (id) => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "DELETE"
  })
}

const detalhaCliente = (id) => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method:"GET"
  })
  .then(resp => {
    return resp.json()
  })
}

const editandoCliente = (id, cpf, nome) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf
  })

  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json" 
    },
    body: json
  })
}