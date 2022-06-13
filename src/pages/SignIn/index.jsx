import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import api from '../../services/api'

import './styles.css'

export function SignIn() {
  const [missingInfo, setMissingInfo] = useState(false)

  async function handleSubmit(event){
    event.preventDefault()
    
    const email = event.target.email.value
    const senha = event.target.senha.value

    const response = await api.get(`/login?email=${email}&senha=${senha}`, {
    })

    if(!response.data[0]){
      setMissingInfo(true)
      return ;
    }

    setMissingInfo(false)

    const { nome } = response.data[0]
    localStorage.setItem('@nomeLogin', nome)
    window.location.assign('/')
  }

  return (
    <div className="loginContainer">
      <div className="loginInfo">
        <Logo size='1.5rem' />
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type='email' name='email' id='email' placeholder='Digite seu e-mail...' maxLength={150} required
          />
          <label htmlFor="senha">Senha</label>
          <input
            type='password' name='senha' id='senha' placeholder='Digite sua senha...' maxLength={150} required
          />
          { missingInfo && <small>E-mail ou senha incorretos!</small>}
          <div className="buttonGroup">
            <Link to='/signUp'>
              <span>Crie sua conta</span>
            </Link>

            <button type='submit' className='submitButton'>Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}