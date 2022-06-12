import api from '../../services/api'
import { Modal } from '../Modal'

import './styles.css'

export function ModalAddBook({ isOpen, setIsOpen }) {
  function cleanForms() {
    const forms = document.querySelectorAll('input')

    forms.forEach((form) => {
      form.value = ''
    })
  }

  const handleSubmit = async (event) => {
    const titulo = event.target.titulo.value
    const autor = event.target.autor.value
    const editora = event.target.editora.value
    const linkLivro = event.target.linkLivro.value
    const linkImagem = event.target.linkImagem.value

    await api.post('/cadastro_livros', {
      titulo,
      autor,
      editora,
      "link": linkLivro,
      "linkimagem": linkImagem,
    })

    setIsOpen()
  }

  return(
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form action="" onSubmit={handleSubmit} className='modalForm'>
        <label htmlFor="titulo">Título</label>
        <input type='text' id='titulo' maxLength={100} placeholder='Digite um título para o livro' required/>

        <label htmlFor="autor">Nome do autor</label>
        <input type='text' id='autor' maxLength={100} placeholder='Digite o nome do autor(a)' required/>

        <label htmlFor="editora">Editora</label>
        <input type='text' id='editora' maxLength={100} placeholder='Digite o nome da editora' required/>

        <label htmlFor="linkLivro">Link do livro</label>
        <input type='text' id='linkLivro' placeholder='Cole aqui o link do livro' required/>

        <label htmlFor="linkImagem">Link da Imagem</label>
        <input type='text' id='linkImagem' placeholder='Cole aqui o link da imagem'/>

        <div className='modalButtonGroup'>
          <button type='button' className='cancelButton' onClick={cleanForms}>
            Cancelar
          </button>
          <button type='submit' className='confirmButton'>
            Confirmar
          </button> 
        </div>
      </form>
    </Modal>
  )
}