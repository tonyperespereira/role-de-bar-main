import React from 'react';
import './CadastroConsumidor.css'; // Importando o CSS para estilização

function CadastroConsumidor() {
  return (
      <div className="consumidor">
        <h1>Cadastro de Consumidor</h1>
        <form>
          <div className="nome">
            <label htmlFor="nome">Nome</label>
            <input type="text" className="form-control" id="nome" placeholder="Digite seu nome" />
          </div>
          <div className="cpf">
            <label htmlFor="cpf">CPF</label>
            <input type="text" className="form-control" id="cpf" placeholder="CPF:" />
          </div>
          <div className="email">
            <label htmlFor="email">E-mail</label>
            <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail" />
          </div>
          <div className="senha">
            <label htmlFor="senha">Senha</label>
            <input type="password" className="form-control" id="senha" placeholder="Crie a sua senha:" />
          </div>
          <div className="confirmacao">
            <label htmlFor="senha">Confirmação de Senha</label>
            <input type="password" className="form-control" id="confirmacao" placeholder="Confirme a sua senha:" />
          </div>
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
      </div>
  );
}

export default CadastroConsumidor;