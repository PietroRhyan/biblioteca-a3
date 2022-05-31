import { Modal } from '../Modal'

import './styles.css'

export function ModalAddBook({ isOpen, setIsOpen, handleAddBook }) {
  function cleanForms() {
    window.alert('Apagado')
  }

  const handleSubmit = async (data) => {
    handleAddBook(data)
    setIsOpen()
  }

  return(
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form action="" onSubmit={handleSubmit} className='modalForm'>
        <label htmlFor="titulo">Título</label>
        <input type='text' name='titulo' id='titulo' maxLength={100} placeholder='Digite um título para o livro' required/>

        <label htmlFor="autor">Nome do autor</label>
        <input type='text' name='autor' id='autor' maxLength={100} placeholder='Digite o nome do autor(a)' required/>

        <label htmlFor="editora">Editora</label>
        <input type='text' name='editora' id='editora' maxLength={100} placeholder='Digite o nome da editora' required/>

        <label htmlFor="imagem">Link da Imagem</label>
        <input type='url' name='imagem' id='imagem' placeholder='Cole aqui o link da imagem'/>

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