import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'

import './styles.css'

export function SignIn() {
  return (
    <div className="loginContainer">
      <div className="loginInfo">
        <Logo size='1.5rem' />
        <form action="">
          <label htmlFor="email">E-mail</label>
          <input
            type='email' name='email' id='email' placeholder='Digite seu e-mail...' maxLength={150} required
          />
          <label htmlFor="senha">Senha</label>
          <input
            type='password' name='senha' id='senha' placeholder='Digite sua senha...' maxLength={150} required
          />
        </form>

        <div className="buttonGroup">
          <Link to='/signUp'>
            <span>Crie sua conta</span>
          </Link>

          <button type='submit' className='submitButton'>Entrar</button>
        </div>
      </div>
    </div>
  )
}