import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {

  
const {blogs,isPending,error} = useFetch('http://localhost:80/blogs/')
  return (
    <div className="container">
      <h2>Container</h2>
      {error&& <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {blogs && (
        <BlogList blogs={blogs} title="Blogs"/>
      )}
    </div>
  );
}
export default Home;
