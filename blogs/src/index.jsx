import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import AddBlog from "./AddBlog"
import BlogDetails from "./BlogDetails"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Oops from "./Oops";



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navbar />
    <Switch>
      <Route exact path='/'>
    <Home />
    </Route>
    <Route path='/AddBlogs'>
    <AddBlog />
    </Route>
    <Route path='/blogs/:id'>
      <BlogDetails/>
    </Route>
    <Route path='*'>
      <Oops />
    </Route>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
