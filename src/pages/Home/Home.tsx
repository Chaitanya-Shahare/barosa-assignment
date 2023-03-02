import {Link} from "react-router-dom";
import "./Home.scss"

const Home = () => {

	return (
		<div className="home home-wrapper page-wrapper">
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
		</div>
	)
}

export default Home;
