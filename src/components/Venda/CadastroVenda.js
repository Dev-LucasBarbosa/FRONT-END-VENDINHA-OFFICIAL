import { useState, useEffect } from 'react';
import './CadastroVenda.css';

function CadastroVenda() {
    const [userId, setUserId] = useState('');
    const [usuarios, setUsuarios] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [produtoId, setProdutoId] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Função para buscar a lista de usuários
    const fetchUsuarios = async () => {
        try {
            const response = await fetch("http://localhost:8081/api/usuario/lista");
            const data = await response.json();
            if (response.ok) {
                setUsuarios(data);
            } else {
                console.error("Erro ao buscar usuários:", data);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    };

    // Função para buscar produtos do usuário selecionado
    const fetchProdutos = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8081/api/produtos/listar/${userId}`);
            const data = await response.json();

            if (response.ok) {
                if (Array.isArray(data)) {
                    setProdutos(data);
                } else {
                    console.error("Dados de produtos não são um array:", data);
                    setProdutos([]); // Limpa os produtos se não for um array
                }
            } else {
                console.error("Erro ao buscar produtos:", data);
                setProdutos([]); // Limpa os produtos em caso de erro
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            setProdutos([]); // Limpa os produtos em caso de erro
        }
    };
    
    useEffect(() => {
        fetchUsuarios(); // Carrega os usuários ao montar o componente
    }, []);

    useEffect(() => {
        if (userId) {
            fetchProdutos(userId); // Busca produtos quando um usuário é selecionado
        } else {
            setProdutos([]); // Limpa os produtos se nenhum usuário for selecionado
        }
    }, [userId]);

    const salvar = async () => {
        if (!produtoId || !quantidade || !userId) {
            setErrorMessage('Por favor, preencha todos os campos.');
            return;
        }

        setErrorMessage('');

        try {
            const api = await fetch("http://localhost:8081/api/vendas", {
                method: "POST",
                body: JSON.stringify({
                    user_id: Number(userId),     // Altera para 'user_id'
                    product_id: Number(produtoId), // Altera para 'product_id'
                    quantity: Number(quantidade),  // Mantém como 'quantity'
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const resposta = await api.json();
            console.log(resposta);

            if (api.ok) {
                alert("Venda realizada com sucesso!");
                setQuantidade('');
                setProdutoId('');
                setUserId('');
                setProdutos([]);
            } else {
                setErrorMessage('Erro ao realizar a venda. Tente novamente.');
                console.log(resposta);
            }
        } catch (error) {
            setErrorMessage('Erro ao realizar a venda. Tente novamente.');
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <div className="cadastro-venda-page">
            <div className="form-container">
                <form id="formulario">
                    <h2>Realizar Venda</h2>
                    
                    <label htmlFor='userId'>Usuário</label>
                    <select
                        name='userId'
                        id='userId'
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    >
                        <option value="">Selecione um usuário</option>
                        {usuarios.map((usuario) => (
                            <option key={usuario.id} value={usuario.id}>
                                {usuario.name} (ID: {usuario.id})
                            </option>
                        ))}
                    </select>

                    <label htmlFor='produtoId'>Produto</label>
                    <select
                        name='produtoId'
                        id='produtoId'
                        value={produtoId}
                        onChange={(e) => setProdutoId(e.target.value)}
                    >
                        <option value="">Selecione um produto</option>
                        {produtos.length > 0 ? (
                            produtos.map((produto) => (
                                <option key={produto.id} value={produto.id}>
                                    {produto.nome} (ID: {produto.id})
                                </option>
                            ))
                        ) : (
                            <option disabled>Sem produtos disponíveis</option>
                        )}
                    </select>

                    <label htmlFor='quantidade'>Quantidade</label>
                    <input
                        type='number'
                        name='quantidade'
                        id='quantidade'
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />

                    {errorMessage && <div className="error-message">{errorMessage}</div>}

                    <input onClick={salvar} type='button' value="Realizar Venda" />
                </form>
            </div>
        </div>
    );
}

export default CadastroVenda;
