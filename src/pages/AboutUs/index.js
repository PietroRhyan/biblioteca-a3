import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function AboutUs() {
  return(
    <>
      <Header />
      <div className="container">
        <h1>Sobre</h1>
        <h2>Quem somos?: 
          Somos alunos do cruso de TI da faculdade AGES, que por meio desse programa, buscamos auxiliar os demais estudantes a encontrar seus livros de maneira mais facil de sem virus.
        </h2>
        <h3>O grupo do projeto é formado por, David Sena, Fernando, Pietro Rhyan e Renan Nobre</h3>
        <p>Os Livros encontrados em nossa pagina são todos de dominio publico, sendo assim livros que todos nós temos acesso gratuitamente.</p>
        <h5>Aproveitem nossa Pagina</h5>
        <h5>A leitura Move as Pessoas</h5>
      </div>
      <Footer />
    </>
  )
}