import {Link} from "react-router-dom";
import "./TitleBar.scss";

interface IProps {
	title: string
}

const TitleBar = ({title}: IProps) => {

	return (
	<div className="titlebar">
		<Link to="/">
			<button className="titlebar__back btn small-btn">
			<i className="ri-arrow-left-line back-icon ri-lg"></i>
			</button>
		</Link>

		<h3 className="titlebar__heading">{title}</h3>
	</div>
	);
};

export default TitleBar;
