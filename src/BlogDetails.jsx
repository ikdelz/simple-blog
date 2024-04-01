import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const redirect = useHistory()
  const { id } = useParams()
  const { data:blog, isLoading, error } = useFetch(`http://localhost:5000/blogs/${id}`)

  // Delete Button
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/blogs/${blog.id}`, {
      method: 'DELETE'
    }).then(() => {
      redirect.push('/')
    })
  }

  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p><i>Written by {blog.author}</i></p>
          <div><small>{ blog.body }</small></div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;