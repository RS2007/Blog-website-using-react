import {Link} from 'react-router-dom'
function Oops(){
	return(
		<div>
			<h1>Oops page doesnt exist - error 404</h1>
			<Link to='/'>Back to homepage</Link>
		</div>
	)
}
export default Oops;