import { useState } from 'react'

import { FiUser } from 'react-icons/fi'
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
            <FiUser size={22}/>
            {
              isLogged ? 'Pietro Rhyan' : 'Entrar'
            }
          </button>
        </ul>
      </nav>
    </header>
  )
}