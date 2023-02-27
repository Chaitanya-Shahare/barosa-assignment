import "./Brand.scss"

const Brand = ({logoSrc, name}: {logoSrc:string, name:string}) => {

	return(

				<div className="brand">
				<img className="brand__logo" src={logoSrc} />
				<p className="brand__name">
				{name.length <= 8
					? name
					: name.slice(0, 6) + "..."}
					</p>
					</div>
	)
}

export default Brand;
