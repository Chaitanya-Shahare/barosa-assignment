import "./ProductFullWidth.scss"

const ProductFullWidth = () => {


	return(

					<li className="product product-full">
						<img className="product__img" src={"https://cdn2.chrono24.com/images/uhren/26081138-depd2q3ehox9sn4fsgy1x3t1-ExtraLarge.jpg"}/>
						<div className="product__info">
							<p className="product__name">GMT-Master II</p>
							<p className="product__brand">Rolex</p>
						</div>
						<button className="small-btn">
							<i className="ri-arrow-right-up-line ri-xl"></i>
						</button>
					</li>
	)
}

export default ProductFullWidth;
