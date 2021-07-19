import {useState} from "react";
import {useHistory} from "react-router-dom";

function AddBlog(){
	const [title,setTitle] = useState('')
	const [author,setAuthor] = useState('')
	const [body,setBody] = useState('')
	const history = useHistory();
	const handleSubmit = (e)=>{
		e.preventDefault();
		let blogs = {title,author,body}
		console.log(blogs);
		fetch('http://localhost:80/blogs',{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body:JSON.stringify(blogs),
		}).then(()=>{
			setTitle('');
			setAuthor('');
			setBody('');
			history.push('/');
		})
	}
		return(
		<div className="form">
			<h4>Add a new blog</h4>
			<form onSubmit={handleSubmit}>
			<label htmlFor="title">Title</label><br/>
			<input type="text" name="title" id="title" value = {title} onChange={(e)=>{setTitle(e.target.value)}} required/><br/>
			<label htmlFor="author">Author</label><br/>
			<input type="text" name="author" id="author" value = {author} onChange={(e)=>{setAuthor(e.target.value)}} required /><br/>
			<label htmlFor="textarea">Blog</label><br/>
			<textarea name="textarea" value = {body} onChange={(e)=>{setBody(e.target.value)}} required></textarea><br/>
			<button>Add Blog</button><br/>
			</form>
			<div className="val"><ul><li>{title}</li>
			<li>{author}</li>
			<li>{body}</li>
			</ul>
			</div>
		</div>
	)
}
export default AddBlog;
