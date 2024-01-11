import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e){
    e.preventDefault();

    if(email === '' || password === '' || confirmPassword === ''){
      alert("Preencha todos os campos!");
    }
    if(password !== confirmPassword){
      alert("As senhas não estão  iguais.");
    }
    else{
      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Usuário cadastrado com Sucesso!')
        navigate('/', { replace: true });
      })
      .catch(() => {
        console.log("ERRO AO FAZER O CADASTRO");
      })
    }
}

  return(

    <div className="home-container">
      
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta!</span>

      <form className="form" onSubmit={handleRegister}>

        <input type="text" placeholder="Digite seu email..." value={email} onChange={(e) => setEmail(e.target.value) } />

        <input type="password" placeholder="Digite a senha..." value={password} onChange={(e) => setPassword(e.target.value) } />

        <input type="password" placeholder="Confirme a senha..." value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value) } />

        <button type="submit" >Cadastrar</button>

      </form>

      <span>Já possui uma conta? <Link className="button-link" to="/"> Faça login</Link>.</span>
      

    </div>
  )
}