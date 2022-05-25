import { FiInstagram } from 'react-icons/fi'

import './styles.css'

export function Footer() {
  return(
    <footer className="footer">
      <h2 className="titleLogo">Biblioteca<span>A3</span></h2>

      <div className='socialMediaContainer'>
        <ul>
          <li><i><FiInstagram  className='icon' /></i>@pietrorhyann</li>
          <li><i><FiInstagram  className='icon' /></i>@renannobres</li>
          <li><i><FiInstagram  className='icon' /></i>@davydmoreno1803</li>
          <li><i><FiInstagram  className='icon' /></i>@fernando</li>
        </ul>
      </div>

      <p>&copy; Todos os direitos reservados.</p>
    </footer>
  )
}