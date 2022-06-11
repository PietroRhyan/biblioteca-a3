import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { Book } from '../../components/Book'
import { useEffect, useState } from 'react'
import api from '../../services/api'

import './styles.css'

export function BooksCatalog() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function getBooks() {
      const response = await api.get('/livros')
      setBooks(response.data)
    }

    getBooks()
  }, [])

  return (
    <>
      <Header />

      <div className="container">
        <h1>Catálogo de livros</h1>

        <div className="booksCatalog">
          {books.map((book) => (
            <Book 
              key={book.id}
              imageLink={book.linkimagem}
              bookLink={book.link}
              title={book.titulo}
              author={book.autor}
              publishing={book.editora}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}