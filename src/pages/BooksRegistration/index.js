import { FiTrash, FiEdit, FiPlus } from 'react-icons/fi'

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import './styles.css'

export function BooksRegistration() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="topContent">
          <h1>Cadastro de livros</h1>
          <p className='addBook'>
            <FiPlus /> Novo livro
          </p>
        </div>
        <div className="tableContent">
          <table>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Editora</th>
                <th>Link</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Imagem enviada</td>
                <td>Livro de artes</td>
                <td>Pietro Rhyan</td>
                <td>Saraiva</td>
                <td>https://www.teste.com</td>
                <td className="edit">
                  <FiEdit size={20} style={{
                    cursor: 'pointer',
                  }} />
                </td>
                <td className="delete">
                  <FiTrash size={20} style={{
                    cursor: 'pointer',
                  }} />
                </td>
              </tr>
              <tr>
                <td>Imagem enviada</td>
                <td>O Leviatã</td>
                <td>Thomas Hobbes</td>
                <td>Martin Claret</td>
                <td>https://www.pdfpublico.com</td>
                <td className="edit">
                  <FiEdit size={20} style={{
                    cursor: 'pointer',
                  }} />
                </td>
                <td className="delete">
                  <FiTrash size={20} style={{
                    cursor: 'pointer',
                  }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}