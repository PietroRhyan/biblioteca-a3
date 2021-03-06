import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'

import './styles.css'
import api from '../../services/api'

export function SignUp() {
  async function handleSubmit(event) {
    event.preventDefault()

    const nome = event.target.nome.value
    const email = event.target.email.value
    const senha = event.target.senha.value

    try {
      const response = await api.post('/cadastro_usuario', {
        nome,
        email,
        senha,
      })
  
      if(response.data){
        window.location.assign('/signIn')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="loginContainer">
      <div className="loginInfo">
        <Logo size='1.5rem' />
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email">Nome</label>
          <input
            type='text' name='nome' id='nome' placeholder='Digite seu nome...' maxLength={150} required
          />
          <label htmlFor="senha">E-mail</label>
          <input
            type='email' name='email' id='email' placeholder='Digite seu e-mail...' maxLength={150} required
          />
          <label htmlFor="senha">Senha</label>
          <input
            type='password' name='senha' id='senha' placeholder='Digite sua senha...' maxLength={150} required
          />
          
          <div className="buttonGroup">
            <Link to='/signIn'>
              <span>Já tenho uma conta</span>
            </Link>

            <button type='submit' className='submitButton'>Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}