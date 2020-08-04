import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/Home';

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import PageNotFound from './pages/PageNotFound';
import EditarCategoria from './pages/editar/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/editar/categoria/:id" component={EditarCategoria} />
      <Route component={PageNotFound} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
