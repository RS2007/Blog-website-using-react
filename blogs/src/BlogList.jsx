import { Link } from "react-router-dom";

const BlogList = (prop) => {
  const blogs = prop.blogs;
  const title = prop.title;
  

  return (
    <div className="cons">
      <h3>{title}</h3>
      {blogs.map((blog) => {
        return (
          <div className="blog-div" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h3>{blog.title}</h3>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default BlogList;
