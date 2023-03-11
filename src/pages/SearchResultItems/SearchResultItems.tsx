import SearchResultItem from "../../components/SearchResultItem/SearchResultItem";
import StatusBar from "../../components/StatusBar/StatusBar";
import TitleBar from "../../components/TitleBar/TitleBar";
import "./SearchResultItems.scss"

const SearchResultItems = () => {

	const imgSrc = "https://watchbox-cdn.imgix.net/posted-product-images/638046221341694942_ROLE304220_4647426_84681_40-1-2.jpg";

	return(
	<div className="result-items">
		<StatusBar/>
		<div className="result-items__header">
			<TitleBar title="Rolex"/>
			<i className="ri-filter-3-line ri-lg filter-icon"></i>
			<div className="filter-count">2</div>
		</div>

		<div className="items">



		{
		[...Array(10)].map(() => (
			<SearchResultItem 
				imgSrc={"https://watchbox-cdn.imgix.net/posted-product-images/638046221341694942_ROLE304220_4647426_84681_40-1-2.jpg"}
				brand={"Rolex"}
				name={"Submariner"}
				price={35000}
				seller={"Box & Papers"}
			/>
		))
		}


		</div>
	</div>

	)
}

export default SearchResultItems;
