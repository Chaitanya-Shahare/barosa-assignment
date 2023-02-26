import React from "react";
import componseEmail from "../../assets/compose-email/Compose email 1.svg";
import StatusBar from "../../components/StatusBar";

const VerifyEmail = () => {
	return (
		<div className="verify-email page-wrapper">
			<StatusBar />

			<header className="header">
				<h2 className="header__heading">Verify your Email</h2>

				<p className="header__para">
					You need to verify your email before you can buy or sell anything
				</p>
			</header>

			<main className="main">
				<div className="logo-wrapper">
					<img className="logo-wrapper__logo" src={componseEmail} />
				</div>
				<p className="main__para">
					We have sent a verification link to
					<span className="main__para--black">xyz@gmail.com</span>
				</p>
				<p className="main__para">
					Didn't recieve email? <a href="#">Resend</a>
				</p>
			</main>

			<footer className="footer">
				<div className="btn btn--grey">Skip For Now</div>
			</footer>
		</div>
	);
};

export default VerifyEmail;
