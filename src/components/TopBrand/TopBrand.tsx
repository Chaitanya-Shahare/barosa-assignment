
import "./TopBrand.scss";

const TopBrand = () => {

	return(

		<div className="top-brand">
			<img className="top-brand__logo" src={ "https://cdn.cdnlogo.com/logos/r/51/rolex.svg" }/>
			<div className="top-brand__info">
				<p className="top-brand__name">Rolex</p>
				<p className="top-brand__products-no">3411 Products</p>
			</div>
			<button className="small-btn">
				<i className="ri-list-check-2 ri-xl"></i>
			</button>
		</div>
	)
}

export default TopBrand;
