import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroUser from './components/CadastroUser';
import ListaUser from './components/ListaUser';
import UpdateUser from './components/UpdateUser';

// Exemplo de IDs, substitua pelos valores reais conforme necessário
const usuarioIdParaAtualizar = 1; // ID do usuário a ser atualizado
const usuarioIdLogado = 1; // ID do usuário logado

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/cadastro-usuario' element={<CadastroUser />} />
          <Route path='/listagem-usuario' element={<ListaUser />} />
          <Route path='/atualizar-usuario' element={<UpdateUser userId={usuarioIdParaAtualizar} loggedUserId={usuarioIdLogado} />} />
          <Route path="/atualizar-usuario/:id" component={UpdateUser} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
