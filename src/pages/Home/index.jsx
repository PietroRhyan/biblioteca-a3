import { Book } from "../../components/Book"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import './styles.css'

export function Home() {
  return (
    <>
      <Header />

      <div className="container">
        <h1>Home</h1>
        
        <section>
          <div className="top-content">
            <div className="text-content">
              <h2>Bem vindos a nossa <strong>biblioteca</strong>, aqui estarão disponíveis vários livros que os ajudarão na vida <strong>acadêmica</strong>.</h2>
              <p>
                Navegue pelo catálago de livros e ache o seu livro procurado, caso não encontre, pode indicar para que seja
                adicionado, comunicando à um dos colaboradores que estão no rodapé da página.
              </p>

              <p>Logo abaixo segue a indicação dos 5 livros mais procurados da página.</p>
            </div>

            <div className="image-content">
              <img src="https://isometric.online/wp-content/uploads/2020/03/books_svg.svg" alt="Ilustração de livros" />
            </div>
          </div>

          <h2 className="section-title">Livros Indicados</h2>
          <div className="most-popular">
            <Book 
              imageLink="https://images-na.ssl-images-amazon.com/images/I/41GeyYROqTL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
              bookLink='http://www.dominiopublico.gov.br/download/texto/ua000194.pdf'
              title='Dom Casmurro'
              author='Machado de Assis'
              publishing='Domínio Público'
            />
            <Book 
              imageLink="https://images-na.ssl-images-amazon.com/images/I/515lkcCc5yL._SX258_BO1,204,203,200_QL70_ML2_.jpg"
              bookLink='http://www.dominiopublico.gov.br/download/texto/bv000215.pdf'
              title='Memorias Postumas de Bras Cubas'
              author='Machado de Assis'
              publishing='Domínio Público'
            />
            <Book 
              imageLink="https://books.google.com.br/books/publisher/content?id=CG1MEAAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0uyPBW2SCRnDGOTFhEfUl9XkbNjg&w=1280"
              bookLink='http://www.dominiopublico.gov.br/download/texto/bv000195.pdf'
              title='A Igreja do Diabo'
              author='Machado de Assis'
              publishing='Domínio Público'
            />
            <Book 
              imageLink="https://images-na.ssl-images-amazon.com/images/I/5196A1sq0CL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
              bookLink='http://www.dominiopublico.gov.br/pesquisa/DetalheObraDownload.do?select_action=&co_obra=16534&co_midia=2'
              title='O Cortiço'
              author='Aluísio Azevedo'
              publishing='Domínio Público'
            />
            <Book 
              imageLink="https://images-na.ssl-images-amazon.com/images/I/5133bBidCXL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
              bookLink='http://www.culturatura.com.br/obras/A%20moreninha.pdf'
              title='A Moreninha'
              author='Joaquim Manuel de Macedo'
              publishing='Domínio Público'
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}