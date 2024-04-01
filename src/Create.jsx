import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [ title, setTitle ] = useState('')
  const [ content, setContent ] = useState('')
  const [ author, setAuthor ] = useState('Elise')
  const [ isLoading, setIsLoading ] = useState(false)
  const redirect = useHistory()

  // function redirect() {
  //   window.location.href='/';
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {
      title,
      author,
      body: content
    }
    // Adding a loading state
    setIsLoading(true)

    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New blog added')
      setIsLoading(false)
      redirect.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input
          type="text" required value={title} onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Elise">Elise</option>
          <option value="Kalisa">Kalisa</option>
          <option value="Keza">Keza</option>
        </select>

        <label>Blog Content: </label>
        <textarea 
          rows="6" value={content} onChange={(e) => setContent(e.target.value)} required>
        </textarea>

        { !isLoading ? <button>Add Blog</button> : <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}
 
export default Create;