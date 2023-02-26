import "./SearchBar.scss"

const SearchBar = () => {

	return(

			<section className="search">
			{/* <img src={backIcon} className="back-icon" /> */}
			<button className="back-btn small-btn">
				<i className="ri-arrow-left-line back-icon ri-xl"></i>
			</button>
			<div className="searchbar-wrapper">
			<input
				className="search__text"
				type={"text"}
				placeholder="Search for Brands, Products and..."
			/>
			{/*<img className="search-icon" src={searchIcon} />*/}
			<button className="search-btn small-btn">
				<i className="ri-search-line search-icon ri-xl"></i>
			</button>
			</div>
			</section>
	)
}

export default SearchBar;
