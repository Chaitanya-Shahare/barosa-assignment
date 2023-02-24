import React from "react";
// Components
import StatusBar from "../../components/StatusBar";
// Icons
import backIcon from "../../assets/icons/back-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import starIcon from "../../assets/icons/star-icon.svg";
import rightIcon from "../../assets/icons/right-icon.svg";
// Images
import findmewatchLogo from "../../assets/logos/dealers/FindmewatchLogo.svg";
import movementwatchLogo from "../../assets/logos/dealers/MovementwatchLogo.svg.svg";
import prestigeWatchLogo from "../../assets/logos/dealers/PrestigeWatchLogo.svg.svg";
import watchpolisLogo from "../../assets/logos/dealers/WatchpolisLogo.svg";
import watchsquareLogo from "../../assets/logos/dealers/WatchsquareLogo.svg";
import productImg1 from "../../assets/products/Nautilus Chronograph.svg";
import productImg2 from "../../assets/products/Heritage.svg";
import productImg3 from "../../assets/products/Frame 135-2.svg";

const SearchDefault = () => {
	const topBrands = [
		{
			name: "Rolex",
			logoSrc: "https://cdn.cdnlogo.com/logos/r/51/rolex.svg",
		},
		{
			name: "Audemars Piguet",
			logoSrc:
				"data:image/png;base64,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",
		},
		{
			name: "Patek Phillippe",
			logoSrc:
				"data:image/png;base64,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",
		},
		{
			name: "Vacheron Constantin",
			logoSrc:
				"data:image/png;base64,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",
		},
		{
			name: "Omega",
			logoSrc:
				"data:image/png;base64,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",
		},
		{
			name: "Rolex",
			logoSrc: "https://cdn.cdnlogo.com/logos/r/51/rolex.svg",
		},
		{
			name: "Audemars Piguet",
			logoSrc:
				"data:image/png;base64,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",
		},
		{
			name: "Patek Phillippe",
			logoSrc:
				"data:image/png;base64,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",
		},
		{
			name: "Vacheron Constantin",
			logoSrc:
				"data:image/png;base64,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",
		},
		{
			name: "Omega",
			logoSrc:
				"data:image/png;base64,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",
		},
	];

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
		<div className="container search-default">
			<StatusBar />

			<section className="search">
			<img src={backIcon} className="back-icon" />
			<div className="searchbar-wrapper">
			<input
				className="search__text"
				type={"text"}
				placeholder="Search for Brands, Products and..."
			/>
			<img className="search-icon" src={searchIcon} />
			</div>
			</section>

			<section className="top-brands">
			<h3 className="section__heading">TOP BRANDS</h3>
			<div className="brands-wrapper">
			{topBrands.map((brand) => (
				<div className="brand">
				<img className="brand__logo" src={brand.logoSrc} />
				<p className="brand__name">
				{brand.name.length <= 8
					? brand.name
					: brand.name.slice(0, 6) + "..."}
					</p>
					</div>
			))}
			</div>
			</section>

			<section className="featured-dealers">
			<h3 className="section__heading">FEATURED DEALERS</h3>
			<div className="dealers-wrapper">
			{/*TODO: return only if the nuber is below 6*/}
			{featuredDealers.map((dealer) => (
				<div className="dealer">
				<img className="dealer__logo" src={watchsquareLogo} />
				<div className="dealer__info">
				<p className="dealer__name">watchsquare</p>
				<div className="dealer__rating">
				<img className="star-icon" src={starIcon} />
				<span className="dealer__rating">4.7 (1800+)</span>
				</div>
				</div>
				<img className="right-icon" src={rightIcon} />
				</div>
			))}
			</div>
			</section>

			<section className="trending-products">
				<h3 className="section__heading">Trending Products on Barosa</h3>
				<div className="products__wrapper">
					<div className="product">
						<img className="product__img" src={productImg1} />
						<p className="product__brand">Patek Phillippe</p>
						<p className="product__name">Nautilus...</p>
					</div>
				</div>
			</section>
			</div>
	);
};

export default SearchDefault;