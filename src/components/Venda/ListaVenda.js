import { useState, useEffect } from 'react';
import './ListaVenda.css';

function ListaVenda() {
    const [vendas, setVendas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchVendas = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8081/api/vendas/listar');
            if (!response.ok) {
                throw new Error('Erro ao buscar vendas');
            }
            const data = await response.json();
            setVendas(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVendas();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div className="lista-vendas">
            <h2>Lista de Vendas</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuário</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {vendas.map((venda) => (
                        <tr key={venda.id}>
                            <td>{venda.id}</td>
                            <td>{venda.user.name}</td>
                            <td>{venda.venda}</td>
                            <td>{venda.quantity}</td>
                            <td>{venda.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaVenda;
