import { useState } from 'react'

import { FiUser } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import { Link } from 'react-router-dom'

import { Logo } from '../Logo'

import './styles.css'

export function Header() {
  const [isLogged, setIsLogged] = useState(false)

  function handleLogin() {
    setIsLogged(!isLogged)
  }
  
  return (
    <header className="header">
      <Logo size='1.8rem' />

      <nav>
        <ul>
          <Link to='/catalogo'><li>Catálogo</li></Link>
          <Link to='/sobre'><li>Sobre</li></Link>
          {
            isLogged
            ?
            <>
              <Link to='/cadastro-de-livros'><li>Cadastrar livros</li></Link>  
              <button onClick={handleLogin} className="login" type='button'>
                <AiOutlineClose size={22} />Pietro Rhyan
              </button>
            </>
            :
            <button onClick={handleLogin} className="login" type='button'>
              <FiUser size={22} />Entrar
            </button>
          }
        </ul>
      </nav>
    </header>
  )
}