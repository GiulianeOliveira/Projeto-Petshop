    const apagaCliente = async (id) => {
      const cliente = await detalhaCliente(id).then(obj => obj[0])
      const response = await confirm(`Cliente: ${cliente.nome} \nCPF: ${cliente.cpf} \nDeseja excluir?`)
      if(response){
          deletarCliente(id).then(() => {
          const item = document.querySelector(`.line-${id}`)
          item.remove()
          })
      } 
        // usar confirm <------------------------------------------------------------ colocar o cliente
    }

    const exibeCliente = (cpf, nome, id) => {
      const linha = document.createElement("tr"); 
  
      linha.setAttribute("class", `line-${id}`);

      const conteudoLinha =`
      
      <td>${cpf}</td>
      <td>${nome}</td>
      <td>${id}</td>
      <td><button id="deleteBTN" class="btn btn-danger btn-sm" onclick="apagaCliente(${id})">X</button></td>
      <td><a href="edita-clientes.html?id=${id}"><button id="deleteBTN" class="btn btn-info">Editar</button></a></td>
      `;

      linha.innerHTML = conteudoLinha;
  
      return linha;
    };

      const corpoTabela = document.querySelector("[data-conteudo-tabela]");
    
      listarClientes().then(clientes => {
        clientes.forEach(indice => {
          corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
        });
      });



  /*
    const botaoDelete = document.getElementById("deleteBTN") // pega o botao
    
    botaoDelete.addEventListener("click", evento => {

    })*/


