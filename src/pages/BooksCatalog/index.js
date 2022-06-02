import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import './styles.css'

export function BooksCatalog() {
  return (
    <>
      <Header />

      <div className="container">
        <h1>Catálogo de livros</h1>

        <div className="booksCatalog">
          <div className="book">
            <div className='bookImage'>
              <img src="/images/arte1.jpg" alt="Capa de um livro" />
            </div>
            <a href='#'>
              <div className="bookInfo">
                <h4>Livro de artes v.1</h4>
                <p>Autor: Pietro Rhyan</p>
                <small><i>Editora: Saraiva</i></small>
              </div>
            </a>
          </div>
          <div className="book">
            <div className='bookImage'>
              <img src="/images/arte2.jpg" alt="Capa de um livro" />
            </div>
            <a href='#'>
              <div className="bookInfo">
                <h4>Livro achado no mato</h4>
                <p>Autor: Nobre, Renan</p>
                <small><i>Editora: Panini</i></small>
              </div>
            </a>
          </div>
          <div className="book">
            <div className='bookImage'>
              <img src="/images/arte3.jpg" alt="Capa de um livro" />
            </div>
            <a href='#'>
              <div className="bookInfo">
                <h4>Livro suspeito</h4>
                <p>Autor: Desconhecido</p>
                <small><i>Editora: Na esquina</i></small>
              </div>
            </a>
          </div>
          <div className="book">
            <div className='bookImage'>
              <img src="/images/arte1.jpg" alt="Capa de um livro" />
            </div>
            <a href='#'>
              <div className="bookInfo">
                <h4>Livro de artes v.1</h4>
                <p>Autor: Pietro Rhyan</p>
                <small><i>Editora: Saraiva</i></small>
              </div>
            </a>
          </div>
          <div className="book">
            <div className='bookImage'>
              <img src="/images/arte2.jpg" alt="Capa de um livro" />
            </div>
            <a href='#'>
              <div className="bookInfo">
                <h4>Livro achado no mato</h4>
                <p>Autor: Nobre, Renan</p>
                <small><i>Editora: Panini</i></small>
              </div>
            </a>
          </div>
          <div className="book">
            <div className='bookImage'>
              <img src="/images/arte3.jpg" alt="Capa de um livro" />
            </div>
            <a href='#'>
              <div className="bookInfo">
                <h4>Livro suspeito</h4>
                <p>Autor: Desconhecido</p>
                <small><i>Editora: Na esquina</i></small>
              </div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}