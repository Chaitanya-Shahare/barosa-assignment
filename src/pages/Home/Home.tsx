import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import DropdownInput from "../../components/DropdownInput/DropdownInput";
import "./Home.scss"


const Home = () => {

	const [colorTheme, setColorTheme] = useState("green");

	const handleColorTheme = (event: any) => {
		setColorTheme(event.target.value);
	}

	useEffect(() => {

		if (colorTheme === "red"){
			document.body.classList.remove("green")
			document.body.classList.remove("yellow")
			document.body.classList.add("red")
		}
		else if (colorTheme === "green") {
			document.body.classList.remove("red")
			document.body.classList.remove("yellow")
			document.body.classList.add("green")
		} else if (colorTheme === "yellow") {
			document.body.classList.remove("red")
			document.body.classList.remove("green")
			document.body.classList.add("yellow")
		}

	}, [colorTheme])

	return (
		<div className={ `home home-wrapper page-wrapper ` }>

			<form>
				<input 
					type="radio" 
					name="theme"
					value="green"
					onChange={handleColorTheme}
					defaultChecked={true}
				/> Green
				<input 
					type="radio" 
					name="theme"
					value="red"
					onChange={handleColorTheme}
				/> Red
				<input 
					type="radio" 
					name="theme"
					value="yellow"
					onChange={handleColorTheme}
				/> Yellow
			</form>

			<button className="theme-btn" 
				onClick={() => {
						document.body.classList.toggle("dark-theme");
				}}
			>Darkmode</button>

			<Link to="/settings" className="btn btn--green">
				Settings
			</Link>
			<Link to="/search-result-items" className="btn btn--green">
				Search Result Items
			</Link>
			<Link to="/search" className="btn btn--green">
				Search Default
			</Link>
			<Link to="/search-keyword" className="btn btn--green">
				Search keyword
			</Link>
			<Link to="/certificate" className="btn btn--green">
				Authentication Certificate
			</Link>
			<Link to="/product-detail" className="btn btn--green">
				Product Detail
			</Link>
			<Link to="/verify" className="btn btn--green">
				Verify Email
			</Link>
			<DropdownInput options={[{name: "abc", icon: "ri-arrow-down-s-line"}]} isIcons={true} placeholder={"xyz"}/>
		</div>
	)
}

export default Home;
