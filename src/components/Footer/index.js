import { FiInstagram } from 'react-icons/fi'

import './styles.css'

export function Footer() {
  return(
    <footer className="footer">
      <h2 className="titleLogo">Biblioteca<span>A3</span></h2>

      <div className='socialMediaContainer'>
        <ul>
          <li><FiInstagram />@pietrorhyann</li>
          <li><FiInstagram />@pietrorhyann</li>
          <li><FiInstagram />@pietrorhyann</li>
          <li><FiInstagram />@pietrorhyann</li>
        </ul>
      </div>

      <p>&copy; Todos os direitos reservados.</p>
    </footer>
  )
}