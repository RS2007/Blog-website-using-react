import { useState } from "react";
import {Link} from "react-router-dom"

function Navbar() {
  const [name, setName] = useState("Code Blog");

  

  return (
    <nav className="navbar">
      <div className="title">
        <h1>{name}</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/AddBlogs">Add Blogs</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
