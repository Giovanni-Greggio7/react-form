import { useState } from 'react'
import ArticleTitles from './data/array'

const App = () => {
  const [articles, setArticles] = useState(ArticleTitles)
  const [newArticle, setNewArticle] = useState("")

  const addArticle = (e) => {
    e.preventDefault()

    if (newArticle.trim() === "") return 

    setArticles([...articles, newArticle.trim()])
    setNewArticle("")
  }

  return (
    <>
      <div className="container text-center">
        <h1>Articoli di oggi!</h1>
      </div>
      <div className='container'>
        <ul className='list-group'>
          {articles.map((title, index) => (
            <li className='list-group-item' key={index}>{title}</li>
          ))}
        </ul>

        <form onSubmit={ addArticle }>
          <input
            type="text"
            className='form-control'
            placeholder="Che articolo vuoi aggiungere?"
            value={ newArticle }
            onChange={ (e) => setNewArticle(e.target.value) }
          />
          <button type="submit" className="btn btn-primary mt-2">Aggiungi</button>
        </form>
      </div>
    </>
  )
}

export default App