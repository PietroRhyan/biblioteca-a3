import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import './styles.css'

export function Home() {
  return (
    <>
      <Header />

      <div className="container">
        <section>
          <h1>Home</h1>
          
          <h3>Bem vindos a nossa biblioteca, aqui estarão disponveis varios livros que o ajudarão na vida academica</h3>
          <h4>Navegue pelo catalago de livros e ache o seu livro procurado, caso não encontre, pode indicar para que seja adcionado comunicando um dos colaboradores que estao no rodape da pagina</h4>
          <h4>Logo Abaixo segue a idnicação dos 5 livros mais procurados da pagina</h4>
        </section>
        <h2>Livros Indicados</h2>
        <ol>
        <a href="http://www.dominiopublico.gov.br/download/texto/ua000194.pdf" target="_blank">
      <li> Dom Casmurro</li>
      </a>
      <a href="http://www.dominiopublico.gov.br/download/texto/bv000215.pdf" target="_blank">
      <li> Memorias Postumas de Bras Cubas</li>
      </a>
      <a href="http://www.dominiopublico.gov.br/download/texto/bv000195.pdf" target="_blank">
      <li> A Igreja do Diabo</li>
      </a>
      <a href="http://www.dominiopublico.gov.br/pesquisa/DetalheObraDownload.do?select_action=&co_obra=16534&co_midia=2" target="_blank">
      <li> O Cortiço</li>
      </a>
      <a href="http://www.culturatura.com.br/obras/A%20moreninha.pdf" target="_blank">
      <li> A Moreninha</li>
      </a>
      
        </ol>

      </div>

      <Footer />
    </>
  )
}