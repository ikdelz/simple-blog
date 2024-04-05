import BlogList from './blogList'
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isLoading, error } = useFetch('http://localhost:5000/blogs')
  return (
    <div className="home">
      {error && <div>{ error }</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList  blogs = {blogs} title = "All blogs"/>}
    </div>
  );
}
// Manual handle delete function in readme
export default Home;