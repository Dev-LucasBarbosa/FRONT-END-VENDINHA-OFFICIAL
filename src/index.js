import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroUser from './components/Usuario/CadastroUser';
import ListaUser from './components/Usuario/ListaUser';
import UpdateUser from './components/Usuario/UpdateUser';
import CadastroProduto from './components/Produto/CadastroProduto';
import ListaProduto from './components/Produto/ListaProduto';
import UpdateProduto from './components/Produto/UpdateProduto';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/cadastro-usuario' element={<CadastroUser />} />
          <Route path='/listagem-usuario' element={<ListaUser />} />
          <Route path="/atualizar-usuario/:id" element={<UpdateUser />} />
          <Route path='/cadastro-produto' element={<CadastroProduto />} />
          <Route path='/listagem-produto' element={<ListaProduto />} />
          <Route path="/atualizar-produto/:id" element={<UpdateProduto />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
