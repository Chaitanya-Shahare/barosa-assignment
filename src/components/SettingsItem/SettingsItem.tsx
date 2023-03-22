import "./SettingsItem.scss";

interface IProps {
	icon: string;
	color: string;
	title: string;
}

const SettingsItem = ({icon, color, title} : IProps) => {

	return(
		<li className="settings-item container">
			<div 
				className={ `settings-item__icon-wrapper settings-item__icon-wrapper--${color}` }
			>
				<i className={icon}></i>
			</div>

			<span className="settings-item__title">
				{title}
			</span>

			<button className="icon-button">
				<i className="ri-arrow-right-s-line ri-xl right-icon"></i>
			</button>
		</li>
	)
}

export default SettingsItem;
