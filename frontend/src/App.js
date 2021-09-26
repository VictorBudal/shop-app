import React from 'react'
import data from './data';
import Produto from './components/Produto'

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
            data.produtos.map((produto) => (
              <Produto key={produto._id} produto={produto}/>
            ))
          }

        </div>
      </main>
      <footer className="linha centro">Todos os direitos reservados</footer>
    </div>
  );
}

export default App;
