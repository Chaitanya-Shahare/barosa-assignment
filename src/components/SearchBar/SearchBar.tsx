import {useState} from "react";
import "./SearchBar.scss"

const SearchBar = () => {

	const [searchWord, setSearchWord] = useState("");

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
				value={searchWord}
				onChange={(event) => {setSearchWord(event.target.value)}}
			/>
			{/*<img className="search-icon" src={searchIcon} />*/}
			<button className="search-btn small-btn">
				
				{
				searchWord === "" 
					? <i className="ri-search-line search-icon ri-xl"></i>
					: <i className="ri-close-line close-icon ri-xl"></i>
				}
			</button>
			</div>
			</section>
	)
}

export default SearchBar;
