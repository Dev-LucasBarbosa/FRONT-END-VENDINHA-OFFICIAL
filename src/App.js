import './App.css';
import Navbar from './components/Navbar';


function App() {
  return(
    <div className="App"> 
      <Navbar /> 
      <h3 id='title'>Bem-vindo ao Supermercado 'Extra'!</h3>
      <p>
        No Supermercado 'Extra', você encontra tudo para a sua casa em um só lugar! 
        Desde frutas e verduras frescas até produtos de limpeza e eletrônicos, 
        temos uma ampla variedade para atender todas as suas necessidades.
      </p>
      <p>
        Aproveite nossas promoções diárias e ofertas especiais em diversas categorias, 
        incluindo alimentos, bebidas, cuidados pessoais e muito mais. 
        Nossa missão é garantir a melhor qualidade a preços acessíveis.
      </p>

      <p>
        Faça suas compras de forma prática e rápida, seja na loja ou pelo nosso site. 
        Cadastre-se e receba ofertas exclusivas e novidades diretamente no seu e-mail!
      </p>

      <p>
        Leia mais em: <a href='https://www.extra.com.br'>Extra Supermercado</a>
      </p>
    </div>
  );
}

export default App;
