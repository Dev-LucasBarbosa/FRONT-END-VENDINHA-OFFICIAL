// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; 
// import './UpdateUser.css';



// function UpdateUser() {
//     const { id } = useParams(); // Obtém o ID do usuário da URL
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [cpf_cnpj, setCpfCnpj] = useState('');
//     const [senha, setSenha] = useState('');
//     const [isActive, setIsActive] = useState(true);
//     const [errorMessage, setErrorMessage] = useState('');

//     useEffect(() => {
//         if (id) {
//             fetchUserData(id);
//         }
//     }, [id]);

//     const fetchUserData = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:8081/api/usuario/${id}`);
//             if (!response.ok) {
//                 throw new Error('Erro ao buscar dados do usuário.');
//             }
//             const data = await response.json();
//             setName(data.name);
//             setEmail(data.email);
//             setCpfCnpj(data.cpf_cnpj);
//             setIsActive(data.is_active);
//         } catch (error) {
//             setErrorMessage(error.message);
//             console.error('Erro ao buscar dados do usuário:', error);
//         }
//     };

//     const validarEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const atualizar = async () => {
//         setErrorMessage(''); // Limpa mensagens de erro anteriores

//         // Validação de entrada
//         if (!id) {
//             setErrorMessage('Por favor, insira o ID do usuário.');
//             return;
//         }

//         // Validação de campos
//         if (!name || !email || !cpf_cnpj) {
//             setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
//             return;
//         }

//         // Validação de email
//         if (!validarEmail(email)) {
//             setErrorMessage('Por favor, insira um email válido.');
//             return;
//         }

//         try {
//             const response = await fetch(`http://localhost:8081/api/usuario/${id}`, {
//                 method: 'PUT',
//                 body: JSON.stringify({
//                     name,
//                     email,
//                     password: senha,
//                     is_active: isActive ? 1 : 0,
//                     cpf_cnpj,
//                 }),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             const resultado = await response.json();
//             if (response.ok) {
//                 alert('Atualização realizada com sucesso!');
//             } else {
//                 setErrorMessage('Erro ao atualizar usuário: ' + (resultado.message || 'Verifique os dados e tente novamente.'));
//                 console.error('Erro ao atualizar usuário:', resultado);
//             }
//         } catch (error) {
//             setErrorMessage('Erro ao atualizar usuário: ' + error.message);
//             console.error('Erro ao atualizar usuário:', error);
//         }
//     };

//     return (
//         <div className="atualiza-usuario-page">
//             <div className="form-container">
//                 <form id="formulario">
//                     <h2>Atualizar Cadastro</h2>
//                     <input
//                         type="hidden"
//                         name="userId"
//                         id="userId"
//                         value={id}
//                     />

//                     <label htmlFor="name">Nome</label>
//                     <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />

//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />

//                     <label htmlFor="cpf_cnpj">CPF / CNPJ</label>
//                     <input
//                         type="text"
//                         name="cpf_cnpj"
//                         id="cpf_cnpj"
//                         value={cpf_cnpj}
//                         onChange={(e) => setCpfCnpj(e.target.value)}
//                     />

//                     <label htmlFor="senha">Senha</label>
//                     <input
//                         type="password"
//                         name="senha"
//                         id="senha"
//                         value={senha}
//                         onChange={(e) => setSenha(e.target.value)}
//                     />

//                     <input
//                         type="checkbox"
//                         checked={isActive}
//                         onChange={(e) => setIsActive(e.target.checked)}
//                     />
//                     <label htmlFor="is_active">Ativo</label>

//                     {errorMessage && <div className="error-message">{errorMessage}</div>}

//                     <input
//                         onClick={atualizar}
//                         type="button"
//                         value="Atualizar"
//                     />
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default UpdateUser;
