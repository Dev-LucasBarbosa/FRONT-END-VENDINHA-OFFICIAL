import { useState } from 'react';
import './CadastroUser.css';

function CadastroUser() {
    const [email, SetEmail] = useState('');
    const [name, SetName] = useState('');
    const [cpf_cnpj, SetCpf_cnpj] = useState('');
    const [senha, SetSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validarEmail = (email) => {
        // Verifica se o email contém exatamente um '@'
        const atSymbolCount = (email.match(/@/g) || []).length;
        return atSymbolCount === 1;
    };

    async function salvar() {
        // Validação de email
        if (!validarEmail(email)) {
            setErrorMessage('Por favor, insira um email válido com exatamente um "@".');
            return;
        }

        let api = await fetch("http://localhost:8081/api/usuario", {
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": senha,
                "is_active": 1,
                "cpf_cnpj": cpf_cnpj
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        let resposta = await api.json();

        if (api.ok) {
            console.log(resposta);
            alert("Cadastro realizado com sucesso!");
            SetEmail('');
            SetName('');
            SetCpf_cnpj('');
            SetSenha('');
            setErrorMessage(''); // Limpa mensagem de erro
            return;
        }
        console.log(resposta);
        setErrorMessage('Erro ao cadastrar. Tente novamente.'); // Mensagem de erro genérica
    }

    return (
        <div className="cadastro-usuario-page">
            <div className="form-container">
                <form id="formulario">
                    <h2> Cadastre-se </h2>
                    <label htmlFor='name'>Nome</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={name}
                        onChange={(e) => SetName(e.target.value)}
                    />

                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={email}
                        onChange={(e) => SetEmail(e.target.value)}
                    />

                    <label htmlFor='cpf_cnpj'>CPF / CNPJ</label>
                    <input
                        type='text'
                        name='cpf_cnpj'
                        id='cpf_cnpj'
                        value={cpf_cnpj}
                        onChange={(e) => SetCpf_cnpj(e.target.value)}
                    />

                    <label htmlFor='senha'>Senha</label>
                    <input
                        type='password'
                        name='senha'
                        id='senha'
                        value={senha}
                        onChange={(e) => SetSenha(e.target.value)}
                    />

                    {errorMessage && <div className="error-message">{errorMessage}</div>}

                    <input onClick={salvar} type='button' value="Cadastre-se" />
                </form>
            </div>
        </div>
    );
}

export default CadastroUser;
