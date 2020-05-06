// o react sempre começa a rodar por esse arquivo

// dom é a arvore de elementos da aplicação

// react render é usado uma unica vez 

// componenete é uma função que retorna um conteudo html
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
