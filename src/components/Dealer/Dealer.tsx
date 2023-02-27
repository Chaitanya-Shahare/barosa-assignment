import watchsquareLogo from "../../assets/logos/dealers/WatchsquareLogo.svg";
import "./Dealer.scss"

const Dealer = ({imgSrc, rating, reviews}: {imgSrc: string, rating: number, reviews: number}) => {

	return (
		<div className="dealer">
			<img className="dealer__logo" src={watchsquareLogo} />
			<div className="dealer__info">
				<p className="dealer__name">Watchsquare</p>
				<div className="dealer__rating">
					<i className="ri-star-line ri-lg star-icon"></i>
					<span className="dealer__rating-value">4.7 (1800+)</span>
				</div>
			</div>
			<button className="small-btn">
				<i className="ri-arrow-right-s-line ri-xl right-icon"></i>
			</button>
		</div>
	)
}

export default Dealer;
