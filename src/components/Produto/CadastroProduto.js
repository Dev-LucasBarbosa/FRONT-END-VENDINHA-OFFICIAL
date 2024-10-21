import { useState, useEffect } from 'react';
import './CadastroProduto.css';

function CadastroProduto() {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [userId, setUserId] = useState('');
    const [usuarios, setUsuarios] = useState([]); // Lista de usuários
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

    useEffect(() => {
        fetchUsuarios(); // Carrega os usuários ao montar o componente
    }, []);

    const salvar = async () => {
        if (!nome || !quantidade || !preco || !userId) {
            setErrorMessage('Por favor, preencha todos os campos.');
            return;
        }

        setErrorMessage('');

        try {
            const api = await fetch("http://localhost:8081/api/produtos", {
                method: "POST",
                body: JSON.stringify({
                    nome,
                    quantidade: Number(quantidade),
                    preco: Number(preco),
                    userId: Number(userId),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const resposta = await api.json();

            if (api.ok) {
                alert("Produto cadastrado com sucesso!");
                setNome('');
                setQuantidade('');
                setPreco('');
                setUserId('');
            } else {
                setErrorMessage('Erro ao cadastrar. Tente novamente.');
                console.log(resposta);
            }
        } catch (error) {
            setErrorMessage('Erro ao cadastrar. Tente novamente.');
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <div className="cadastro-produto-page">
            <div className="form-container">
                <form id="formulario">
                    <h2>Cadastre seu Produto</h2>
                    <label htmlFor='nome'>Nome</label>
                    <input
                        type='text'
                        name='nome'
                        id='nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <label htmlFor='quantidade'>Quantidade</label>
                    <input
                        type='number'
                        name='quantidade'
                        id='quantidade'
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />

                    <label htmlFor='preco'>Preço</label>
                    <input
                        type='number'
                        name='preco'
                        id='preco'
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />

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

                    {errorMessage && <div className="error-message">{errorMessage}</div>}

                    <input onClick={salvar} type='button' value="Cadastrar Produto" />
                </form>
            </div>
        </div>
    );
}

export default CadastroProduto;
