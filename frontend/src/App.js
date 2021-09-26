import React from 'react'
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="linha">
        <div>
          <a className="marca" href="/">SiteChina</a>
        </div>
        <div>
          <a href="/carrinho">Carrinho</a>
          <a href="/entrar">Entrar</a>
        </div>
      </header>
      <main>
        <div className="linha centro">
          {
            data.produtos.map(produtos => (
              <div key={produtos._id} className="cartao">
                <a href={`/produtos/${produtos._id}`}>
                  <img className="media" src={produtos.imagem} alt={produtos.name} />
                </a>
                <div className="corpo-cartao">
                  <a href={`/produtos/${produtos._id}`}>
                    <h2>{produtos.nome}</h2>
                  </a>
                  <div className="avaliacao">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                  </div>
                  <div className="preco">${produtos.preco}</div>
                </div>
              </div>
            ))
          }

        </div>
      </main>
      <footer className="linha centro">Todos os direitos reservados</footer>
    </div>
  );
}

export default App;
