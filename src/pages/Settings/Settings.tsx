import SettingsItem from "../../components/SettingsItem/SettingsItem";
import "./Settings.scss";

const Settings = () => {

	const accountSettings = [
		{
			icon: "ri-home-5-fill",
			color: "blue",
			title: "Profile"
		},
		{
			icon: "ri-shield-user-fill",
			color: "orange",
			title: "Privacy"
		},
		{
			icon: "ri-shield-keyhole-fill",
			color: "cyan",
			title: "Security"
		},
		{
			icon: "ri-bank-card-fill",
			color: "yellow",
			title: "Payment Methods"
		},
		{
			icon: "ri-map-pin-user-fill",
			color: "red",
			title: "Shipping Addresses"
		},
	]

	const preferenceSettings = [
		{
			icon: "ri-notification-2-fill",
			color: "purple",
			title: "Notifications"
		},
	]

	const supportSettings = [
		{
			icon: "ri-questionnaire-fill",
			color: "green",
			title: "FAQ"
		},
		{
			icon: "ri-customer-service-line",
			color: "pink",
			title: "Contact"
		},
		{
			icon: "ri-draft-fill",
			color: "grey",
			title: "Terms of Service"
		},
		{
			icon: "ri-file-list-3-fill",
			color: "dark-grey",
			title: "Privacy Policy"
		},
	]

	return (
		<div className="settings">
			<header className="header container">
				<h3 className="header__heading">Settings</h3>
			</header>

			<div className="body">
				<section className="section">
					<h4 className="section__heading container">Account</h4>

					<ul className="section__settings">
					{accountSettings.map((setting) => (
						<SettingsItem 
							icon={setting.icon}
							color={setting.color}
							title={setting.title}
						/>
					))}
					</ul>
				</section>

				<section className="section">
					<h4 className="section__heading container">Preference</h4>

					<ul className="section__settings">
					{preferenceSettings.map((setting) => (
						<SettingsItem 
							icon={setting.icon}
							color={setting.color}
							title={setting.title}
						/>
					))}
					</ul>
				</section>

				<section className="section">
					<h4 className="section__heading container">Support</h4>

					<ul className="section__settings">
					{supportSettings.map((setting) => (
						<SettingsItem 
							icon={setting.icon}
							color={setting.color}
							title={setting.title}
						/>
					))}
					</ul>
				</section>
			</div>
		</div>
	   );
};

export default Settings;
