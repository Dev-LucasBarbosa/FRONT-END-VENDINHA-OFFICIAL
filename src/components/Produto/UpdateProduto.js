import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import './UpdateProduto.css';

function UpdateProduto() {
    const { id } = useParams(); // Obtém o ID do produto da URL
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (id) {
            fetchProdutoData(id);
        }
    }, [id]);

    const fetchProdutoData = async (id) => {
        try {
            const response = await fetch(`http://localhost:8081/api/produtos/${id}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar dados do produto.');
            }
            const data = await response.json();
            setNome(data.nome);
            setQuantidade(data.quantidade);
            setPreco(data.preco);
        } catch (error) {
            setErrorMessage(error.message);
            console.error('Erro ao buscar dados do produto:', error);
        }
    };

    const atualizar = async () => {
        setErrorMessage(''); // Limpa mensagens de erro anteriores

        if (!nome || !quantidade || !preco) {
            setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8081/api/produtos/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    nome,
                    quantidade: Number(quantidade),
                    preco: Number(preco),
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const resultado = await response.json();
            if (response.ok) {
                alert('Atualização realizada com sucesso!');
            } else {
                setErrorMessage('Erro ao atualizar produto: ' + (resultado.message || 'Verifique os dados e tente novamente.'));
                console.error('Erro ao atualizar produto:', resultado);
            }
        } catch (error) {
            setErrorMessage('Erro ao atualizar produto: ' + error.message);
            console.error('Erro ao atualizar produto:', error);
        }
    };

    return (
        <div className="atualiza-produto-page">
            <div className="form-container">
                <form id="formulario" onSubmit={(e) => e.preventDefault()}>
                    <h2>Atualizar Cadastro do Produto</h2>
                    <input
                        type="hidden"
                        name="produtoId"
                        id="produtoId"
                        value={id}
                    />
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <label htmlFor="quantidade">Quantidade</label>
                    <input
                        type="number"
                        name="quantidade"
                        id="quantidade"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />
                    <label htmlFor="preco">Preço</label>
                    <input
                        type="number"
                        name="preco"
                        id="preco"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <input onClick={atualizar} type="button" value="Atualizar" />
                </form>
            </div>
        </div>
    );
}

export default UpdateProduto;
