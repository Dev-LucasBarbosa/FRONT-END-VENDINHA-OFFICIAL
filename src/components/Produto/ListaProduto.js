import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ListaProduto.css';

function ListaProduto() {
    const [produtos, setProdutos] = useState([]);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const fetchProdutos = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8081/api/produtos/listar'); // Altere o endpoint conforme necessário
            if (!response.ok) {
                throw new Error('Erro ao buscar produtos');
            }
            const data = await response.json();
            setProdutos(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProdutos();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div className="lista-produtos">
            <h2>Lista de Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th>Usuário</th> {/* Corrigido o título da coluna */}
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.user.name}</td> {/* Exibe o nome do usuário, se disponível */}
                            <td>
                                <button onClick={() => navigate(`/atualizar-produto/${produto.id}`)}>
                                    Atualizar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaProduto;
