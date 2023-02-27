import "./Product.scss"
import productImg1 from "../../assets/products/Nautilus Chronograph.svg";

const Product = () => {

	return(
		<div className="product">
			<img className="product__img" src={productImg1} />
			<p className="product__brand">Patek Phillippe</p>
			<p className="product__name">Nautilus Chronograph</p>
		</div>
	)
}

export default Product;
