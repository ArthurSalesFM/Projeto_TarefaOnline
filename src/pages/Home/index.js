
import { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const navigate = useNavigate();

  async function handleLogin(e){

    e.preventDefault();

    if(email !== '' && password !== ''){      
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // navegar para /admin
        navigate('/admin', { replace: true } )
      })
      .catch(() => {
        alert("ERRO AO FAZER O LOGIN");
      })
    }
    else{
      alert("Preencha todos os campos!");
    }
  }

  return(
    <div className="home-container">
      
      <h1>Tarefa Online</h1>
      
      <span>Gerencie suas tarefas de forma online, fácil e gratuito.</span>

      <form className="form" onSubmit={handleLogin}>

        <input type="email" placeholder="Digite seu email..." value={email} onChange={(e) => setEmail(e.target.value) } />

        <input type="password" placeholder="Digite sua senha..." value={password} onChange={(e) => setPassword(e.target.value) } />

        <button type="submit" >Entrar</button>
      </form>

      <span>Não possui uma conta? <Link className="button-link" to="/register"> Cadastre-se</Link>. </span>      

    </div>
  )
}