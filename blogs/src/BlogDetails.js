import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { blogs, isPending, error } = useFetch(
    "http://localhost:80/blogs/" + id
  );
  
  const handleDelete = (id)=>{
	fetch('http://localhost:80/blogs/'+id,{
		method: 'DELETE'
	}).then(()=>{
		history.push('/')
	})
  }
  

  return (
    <div className="blog-head">
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {!isPending && (
        <div className="blog-head">
          {" "}
          <h2>{blogs.title}</h2>
          <p>{blogs.body}</p><br/>
		<button onClick={()=>{handleDelete(blogs.id)}}>Delete</button>
        </div>
      )}
    </div>
  );
}
export default BlogDetails;
