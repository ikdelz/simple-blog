import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Ooops!</h1>
      <h3>Error: 404 Page Not Found</h3>
      <Link to='/'><small>Back to home page</small></Link>
    </div>
  );
}
 
export default NotFound;