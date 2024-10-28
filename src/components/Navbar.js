import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showProductDropdown, setShowProductDropdown] = useState(false);
    const [showSaleDropdown, setShowSaleDropdown] = useState(false);

    const handleUserMouseEnter = () => {
        setShowUserDropdown(true);
    };

    const handleUserMouseLeave = () => {
        setShowUserDropdown(false);
    };

    const handleProductMouseEnter = () => {
        setShowProductDropdown(true);
    };

    const handleProductMouseLeave = () => {
        setShowProductDropdown(false);
    };

    const handleSaleMouseEnter = () => {
        setShowSaleDropdown(true);
    };

    const handleSaleMouseLeave = () => {
        setShowSaleDropdown(false);
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li 
                    onMouseEnter={handleUserMouseEnter} 
                    onMouseLeave={handleUserMouseLeave}
                >
                    <button className="dropdown-button">
                        Usuários
                    </button>
                    {showUserDropdown && (
                        <ul className="dropdown">
                            <li>
                                <Link to="/cadastro-usuario">Cadastrar</Link>
                            </li>
                            <li>
                                <Link to="/listagem-usuario">Listar</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li 
                    onMouseEnter={handleProductMouseEnter} 
                    onMouseLeave={handleProductMouseLeave}
                >
                    <button className="dropdown-button">
                        Produtos
                    </button>
                    {showProductDropdown && (
                        <ul className="dropdown">
                            <li>
                                <Link to="/cadastro-produto">Cadastrar</Link>
                            </li>
                            <li>
                                <Link to="/listagem-produto">Listar</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li 
                    onMouseEnter={handleSaleMouseEnter} 
                    onMouseLeave={handleSaleMouseLeave}
                >
                    <button className="dropdown-button">
                        Vendas
                    </button>
                    {showSaleDropdown && (
                        <ul className="dropdown">
                            <li>
                                <Link to="/cadastro-venda">Cadastrar</Link>
                            </li>
                            <li>
                                <Link to="/listagem-venda">Listar</Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
