import { useState } from 'react';
import '../contato/Contato.css';

function Contato() {
  const [formEnviado, setFormEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormEnviado(true);
    e.target.reset();
    setTimeout(() => setFormEnviado(false), 5000);
  };

  return (
    <main id="contato">
      <section>
        <h1>Ficou com alguma dúvida ou tem alguma reclamação?</h1>
        <h2>Entre em contato conosco!</h2>
      </section>
      <article className="container">
        <div className="form_box">
          <form onSubmit={handleSubmit}>
            <input type="text" name="nome" id="nome" placeholder="Digite seu nome:" required />
            <input type="email" name="email" id="email" placeholder="Digite seu e-mail:" required />
            <textarea
              name="mensagem"
              id="mensagem"
              placeholder="Digite sua mensagem:"
              rows="5"
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
          {formEnviado && (
            <p> Seu formulario foi enviado com sucesso!</p>
          )}
        </div>
      </article>
    
    </main>
  );
}

export default Contato;