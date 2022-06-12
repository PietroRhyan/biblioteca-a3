import { FiUser } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import { isAuthenticated } from '../../auth'

import { Link } from 'react-router-dom'

import { Logo } from '../Logo'

import './styles.css'

export function Header() {
  function handleLogin() {
    //
  }

  return (
    <header className="header">
      <Logo size='1.8rem' />

      <nav>
        <ul>
          <Link to='/catalogo'><li>Catálogo</li></Link>
          <Link to='/sobre'><li>Sobre</li></Link>
          {
            isAuthenticated()
            ?
            <>
              <Link to='/cadastro-de-livros'><li>Cadastrar livros</li></Link>  
              <button onClick={handleLogin} className="login" type='button'>
                <AiOutlineClose size={22} />Pietro Rhyan
              </button>
            </>
            :
            <>
              <Link to='/signIn'>
                <button className="login" type='button'>
                  <FiUser size={22} />Entrar
                </button>
              </Link>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}