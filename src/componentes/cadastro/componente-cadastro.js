import eventoEnvia from "./cadastro-clientes"

export const inicializaCadastro = () => {
    const form = document.createElement('form')

    const cadastro = `
    <div class="container">
        <div class="form-group">
            <label>CPF</label>
            <input type="number" class="form-control" data-cpf placeholder="Digite seu CPF aqui" />
            <span class="error --hidden">CPF inválido</span>
            <span class= "cpfEmpty --hidden">CPF vazio</span>
        </div>
        <div class="form-group" id="cpfFormGroup">
            <label>Nome</label>
            <input type="text" class="form-control" data-nome placeholder="Digite seu nome aqui" />
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
        <a class="btn btn-primary" href="/">Página inicial</a>
    </div>
    `
    form.innerHTML = cadastro

    eventoEnvia(form)
    return form
}
