import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import TelaHome from './screens/TelaHome';
import TelaProduto from './screens/TelaProduto';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/produto/:id" component={TelaProduto}/>
          <Route path="/" component={TelaHome} exact/>
          
        </main>
        <footer className="linha centro">Todos os direitos reservados</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
