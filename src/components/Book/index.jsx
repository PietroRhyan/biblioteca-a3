import './styles.css'

export function Book(props) {
  return (
    <div className="book" >
      <div className='bookImage'>
        <img src={props.imageLink} alt={props.title} />
      </div>
      <a href={props.bookLink} target='_blank'>
        <div className="bookInfo">
          <h4>{props.title}</h4>
          <p>{`Autor(a): ${props.author}`}</p>
          <small><i>{`Editora: ${props.publishing}`}</i></small>
        </div>
      </a>
    </div >
  )
}