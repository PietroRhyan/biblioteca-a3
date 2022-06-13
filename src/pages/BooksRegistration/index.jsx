import { useEffect, useState } from 'react';
import { FiTrash, FiEdit, FiPlus } from 'react-icons/fi'

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalAddBook } from '../../components/ModalAddBook';
import { ModalEditBook } from '../../components/ModalEditBook';

import api from '../../services/api';

import './styles.css'

export function BooksRegistration() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)

  const [books, setBooks] = useState([])

  useEffect(() => {
    async function getBooks() {
      const response = await api.get('/livros')
      setBooks(response.data)
    }

    getBooks()
  }, [])

  async function handleDeleteBook(id) {
    await api.delete(`/delete_livro?id=${id}`, {
    })

    const recountBooks = books.filter(book => book.id !== id)
    setBooks(recountBooks)
  }

  function handleModalIsOpen() {
    setModalIsOpen(!modalIsOpen)
  }

  function handleEditModalIsOpen() {
    setEditModalIsOpen(!editModalIsOpen)
  }

  function sendReferenceId(id) {
    handleEditModalIsOpen()
    localStorage.setItem('@idReferenceToUpdate', id)
  }

  function shortLink(link) {
    let formatLink = link.slice(0, 27)
    formatLink = formatLink.split('')
    formatLink.push('...')

    return formatLink
  }

  return (
    <>
      <Header />
      <ModalAddBook
        isOpen={modalIsOpen}
        setIsOpen={handleModalIsOpen}
      />
      <ModalEditBook
        isOpen={editModalIsOpen}
        setIsOpen={handleEditModalIsOpen}
      />

      <div className="container">
        <div className="topContent">
          <h1>Cadastro de livros</h1>
          <p className='addBook' onClick={handleModalIsOpen}>
            <FiPlus /> Novo livro
          </p>
        </div>

        <div className="tableContent">
          <table>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Título</th>
                <th>Autor(a)</th>
                <th>Editora</th>
                <th>Link</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td className='staticInfo'>Imagem enviada</td>
                  <td>{book.titulo}</td>
                  <td>{book.autor}</td>
                  <td>{book.editora}</td>
                  <td>{book.link.length > 30 ? shortLink(book.link) : book.link}</td>
                  <td className="edit">
                    <FiEdit 
                      size={20} 
                      onClick={() => sendReferenceId(book.id)}
                      style={{
                        cursor: 'pointer',
                      }} 
                    />
                  </td>
                  <td className="delete">
                    <FiTrash 
                      size={20} 
                      onClick={() => handleDeleteBook(book.id)} 
                      style={{
                        cursor: 'pointer',
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}