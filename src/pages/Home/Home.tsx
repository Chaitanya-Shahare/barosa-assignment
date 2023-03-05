import {Link} from "react-router-dom";
import "./Home.scss"


const Home = () => {

	// var icon = document. getElementById ("icon");
	// icon.onclick = function () {
	// document.body.classList.toggle ("dark-theme");
	// }

	return (
		<div className={ `home home-wrapper page-wrapper ` }>

			<button className="btn" 
				onClick={() => {
						document.body.classList.toggle("dark-theme");
				}}
			>Darkmode</button>

			<Link to="/search" className="btn btn--green">
				Search Default
			</Link>
			<Link to="/search-keyword" className="btn btn--green">
				Search keyword
			</Link>
			<Link to="/certificate" className="btn btn--green">
				Authentication Certificate
			</Link>
			<Link to="/product-detail" className="btn btn--green">
				Product Detail
			</Link>
			<Link to="/verify" className="btn btn--green">
				Verify Email
			</Link>
		</div>
	)
}

export default Home;
