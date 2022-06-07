import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import './styles.css'

export function AboutUs() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Sobre</h1>

        <section>
          <h2>Quem somos?</h2>
          <p>
            Somos alunos do curso de T.I. da faculdade UniAGES, que, por meio deste website, 
            buscamos auxiliar os demais estudantes a encontrar seus livros de maneira mais fácil e sem dores de cabeça.
          </p>
          <p>O grupo do projeto é formado por: David Sena, Fernando, Pietro Rhyan e Renan Nobre.</p>
          <p>Os livros encontrados em nossa página são todos de domínio público, sendo assim, livros que todos nós temos acesso gratuitamente.</p>
          <p>Aproveitem nosso projeto.</p>
          <p>A Leitura Move as Pessoas 💙</p>
        </section>
      </div>
      <Footer />
    </>
  )
}