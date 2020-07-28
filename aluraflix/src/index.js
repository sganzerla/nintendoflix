import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={() => (<div>Página 404</div>)} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

