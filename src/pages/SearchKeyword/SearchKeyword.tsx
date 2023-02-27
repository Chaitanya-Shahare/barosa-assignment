import Dealer from "../../components/Dealer/Dealer";
import SearchBar from "../../components/SearchBar/SearchBar";
import StatusBar from "../../components/StatusBar";
import "./SearchKeyword.scss";
import watchpolisLogo from "../../assets/logos/dealers/WatchpolisLogo.svg";
import TopBrand from "../../components/TopBrand/TopBrand";
import ProductFullWidth from "../../components/ProductFullWidth/ProductFullWidth";


const SearchKeyword = () => {

	const featuredDealers = [
		{
			name: "Watchsquare",
			img: watchpolisLogo,
			rating: 4.7,
			reviews: 3500,
		},
		{
			name: "Watchsquare",
			img: watchpolisLogo,
			rating: 4.7,
			reviews: 3500,
		},
		{
			name: "Watchsquare",
			img: watchpolisLogo,
			rating: 4.7,
			reviews: 3500,
		},
		{
			name: "Watchsquare",
			img: watchpolisLogo,
			rating: 4.7,
			reviews: 3500,
		},
		{
			name: "Watchsquare",
			img: watchpolisLogo,
			rating: 4.7,
			reviews: 3500,
		},
	];

	return (
		<div className="search-keyword">
			{/* <StatusBar/> */}
			<SearchBar/>

			<section className="top-brands">
				<h3 className="section__heading">TOP BRANDS</h3>
				<TopBrand/>
			</section>

			<section className="products">
				<h3 className="section__heading">PRODUCTS</h3>
				<ul className="products__wrapper">
					{[...Array(5)].map((product) => (
						<ProductFullWidth/>
					))}
				</ul>
			</section>

			<section className="deals">
				<h3 className="section__heading">DEALS IN ROLEX</h3>
				<div className="dealers-wrapper">
					{/*TODO: return only if the nuber is below 6*/}
					{featuredDealers.map((dealer) => (
						<Dealer imgSrc={dealer.img} rating={dealer.rating} reviews={dealer.reviews}/>
					))}
				</div>
			</section>
		</div>
	)
}

export default SearchKeyword;
