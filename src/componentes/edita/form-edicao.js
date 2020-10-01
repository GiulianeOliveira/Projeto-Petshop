import {eventoForm} from './edita-cliente'

export const inicializaFormEdicao = () => {
  const form = document.createElement('form')

  const formEdicao = `
    <div class="container">
      <div class="form-group">
        <label>CPF</label>
        <input type="number" class="form-control" data-cpf placeholder="Digite seu CPF aqui" />
        <span class="error --hidden">CPF inválido</span>
        <span class= "cpfEmpty --hidden">CPF vazio</span>
      </div>
      <div class="form-group">
        <label>Nome</label>
        <input type="text" class="form-control" data-nome placeholder="Digite seu nome aqui" />
      </div>
      <div data-sucesso></div>
      <button type="submit" class="btn btn-primary">Enviar</button>
      <a class="btn btn-primary" href="/">Página inicial</a>
      </div>
  `
  form.innerHTML = formEdicao

  eventoForm(form)
  return form
}