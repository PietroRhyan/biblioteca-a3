import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import './styles.css'

import { Book } from '../../components/Book'

export function BooksCatalog() {
  return (
    <>
      <Header />

      <div className="container">
        <h1>Catálogo de livros</h1>

        <div className="booksCatalog">
          <Book 
            imageLink="/images/arte1.jpg"
            bookLink='#'
            title='Livro de artes'
            author='Pietro Rhyan'
            publishing='Saraiva'
          />
          <Book 
            imageLink="/images/arte2.jpg"
            bookLink='#'
            title='Livro de Loucuras'
            author='Renan Nobre'
            publishing='Panini'
          />
          <Book 
            imageLink="/images/arte3.jpg"
            bookLink='#'
            title='Livro de Sagacidade'
            author='David Sena'
            publishing='Kindle ?'
          />
          <Book 
            imageLink="/images/arte1.jpg"
            bookLink='#'
            title='Livro de Teste de fidelidade'
            author='Fernando'
            publishing='Saraiva'
          />
          <Book 
            imageLink="/images/arte2.jpg"
            bookLink='#'
            title='O conto do louco'
            author='Renan Nobre'
            publishing='Saraiva'
          />
        </div>
      </div>

      <Footer />
    </>
  )
}