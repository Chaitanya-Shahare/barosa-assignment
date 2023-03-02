import StatusBar from "../../components/StatusBar";
import WolverineImg from "../../assets/images/Wolverine.png";
import "./ProductDetail.scss";
import {Link} from "react-router-dom";


const ProductDetail = () => {

	let productOptions = [
		{
			title: "Messages",
			subTitle: "",
			iconClass: "ri-question-answer-line"
		},
		{
			title: "Blockchain Certificate",
			subTitle: "Get Certificate",
			iconClass: "ri-price-tag-2-line"
		},
		{
			title: "Shipping History",
			subTitle: "",
			iconClass: "ri-inbox-unarchive-line"
		},
		{
			title: "Contract",
			subTitle: "",
			iconClass: "ri-draft-line"
		},
	]

	return(
		<div className="product-detail">
			{/* <StatusBar/> */}

			<header className="header">
				<button className="small-btn">
					<Link to="/">
					<i className="ri-arrow-left-line ri-xl"></i>
					</Link>
				</button>
				<h3 className="header__heading">Product Detail</h3>
				<button className="small-btn">
					<i className="ri-share-box-line ri-xl"></i>
				</button>
				<button className="small-btn">
					<i className="ri-more-2-fill ri-xl"></i>
				</button>
			</header>

			<main className="main">
				<img className="main__img" src={WolverineImg}/>
				<div className="main__headings">
					<h4 className="main__heading main__heading--small">Marvel Comics</h4>
					<h3 className="main__heading main__heading--large">Wolverine Limited Series</h3>
				</div>
				<p className="main__para">
					Issue Number 1 (Sep 1982) Come on, make Logan's day. He dares you. Frank Miller, artist extraordinaire, shows off Wolverine's shiny claws and winning smile in the feral mutant's first limited series.
				</p>
			</main>

			<ul className="footer">
				{productOptions.map((link) => (
				<li className="link">
					<button className="small-btn small-btn--grey-rounded">
						<i className={ `${link.iconClass} ri-lg` }></i>
					</button>
					<div className="link__info">
						<p className="link__title">{link.title}</p>
						{ link.subTitle !== "" &&
						<p className="link__sub-title">{link.subTitle}</p>
					}
					</div>
					<button className="small-btn">
						<i className="ri-arrow-right-s-line ri-xl"></i>
					</button>
				</li>
				))}
			</ul>
		</div>
	)
}

export default ProductDetail;
