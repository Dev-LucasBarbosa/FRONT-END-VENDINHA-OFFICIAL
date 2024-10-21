// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import './ListaUser.css';

// function ListaUsuarios() {
//     const [usuarios, setUsuarios] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const history = useNavigate(); // Cria uma instância do history

//     const fetchUsuarios = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch('http://localhost:8081/api/usuario/lista');
//             if (!response.ok) {
//                 throw new Error('Erro ao buscar usuários');
//             }
//             const data = await response.json();
//             setUsuarios(data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchUsuarios();
//     }, []);

//     if (loading) {
//         return <div>Carregando...</div>;
//     }

//     if (error) {
//         return <div>Erro: {error}</div>;
//     }

//     return (
//         <div className="lista-usuarios">
//             <h2>Lista de Usuários</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Nome</th>
//                         <th>Email</th>
//                         <th>CPF/CNPJ</th>
//                         <th>Senha</th>
//                         <th>Status</th>
//                         <th>Ação</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {usuarios.map((usuario) => (
//                         <tr key={usuario.id}>
//                             <td>{usuario.id}</td>
//                             <td>{usuario.name}</td>
//                             <td>{usuario.email}</td>
//                             <td>{usuario.cpf_cnpj}</td>
//                             <td>{usuario.password}</td>
//                             <td>{usuario.is_active ? 'Ativo' : 'Inativo'}</td>
//                             <td>
//                                 <button onClick={() => history(`/atualizar-usuario/${usuario.id}`)}>
//                                     Atualizar
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ListaUsuarios;
