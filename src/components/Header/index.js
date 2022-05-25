import { useState } from 'react'

import { FiUser } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import './styles.css'

export function Header() {
  const [isLogged, setIsLogged] = useState(false)

  function handleLogin() {
    setIsLogged(!isLogged)
  }

  return(
    <header className="header">
      <h2 className="titleLogo">Biblioteca<span>A3</span></h2>

      <nav>
        <ul>
          <li>Catálogo</li>
          <li>Sobre</li>
          <button onClick={handleLogin} className="login" type='button'>
            {
              isLogged 
              ? 
              <> 
                <AiOutlineClose size={22}/>Pietro Rhyan
              </> 
              : 
              <>
                <FiUser size={22}/>Entrar
              </>
            }
          </button>
        </ul>
      </nav>
    </header>
  )
}