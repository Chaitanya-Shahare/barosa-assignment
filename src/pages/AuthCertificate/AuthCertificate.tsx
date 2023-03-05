import React from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import qrIcon from "../../assets/icons/qr-icon.svg";
import productImg from "../../assets/products/watch.svg";
import {Link} from "react-router-dom";
import "./AuthCertificate.scss";
import StatusBar from "../../components/StatusBar/StatusBar";

const AuthCertificate = () => {

	return (
		<div className="page-wrapper auth-certificate">
			{/* <StatusBar/> */}
			<section className="header">
				<Link to="/">
				<img className="back-icon" src={backIcon}/>
				</Link>
				<p className="header__heading">Authentication Certificate</p>
				<img className="qr-icon" src={qrIcon}/>
			</section>

			<section className="main">
				<div className="image-wrapper">
				<img className="main__image" src={productImg}/>
				</div>
				<h3 className="main__heading">Certificate of Authenticity</h3>
				<p className="main__para">
					This is to certify that 
					<span className="text--bold">
					Rolex Submariner (1166113LB)
					</span>
					wrist watch with serial number 
					<span className="text--bold">
					23475382 
					</span>
					evidenced by this certificate is authentic.
				</p>

				<table className="basic-info info-table">
					<tr>
						<td>Brand</td>
						<td>Rolex</td>
					</tr>
					<tr>
						<td>Model Number</td>
						<td>1166113LB</td>
					</tr>
					<tr>
						<td>Serial Number</td>
						<td>23475382</td>
					</tr>
				</table>

				<p className="section__heading">WATCH DETAILS</p>

				<table className="watch-details info-table">
					<tr>
						<td>SKU</td>
						<td>4756540</td>
					</tr>
					<tr>
						<td>Reference Number</td>
						<td>116611LB-0002</td>
					</tr>
					<tr>
						<td>Manufactured in</td>
						<td>Switzerland</td>
					</tr>
					<tr>
						<td>Year</td>
						<td>21 Dec 2022</td>
					</tr>
					<tr>
						<td>Gender</td>
						<td>Men</td>
					</tr>
					<tr>
						<td>Style</td>
						<td>Casual, Dress, Sport</td>
					</tr>
				</table>

				<p className="section__heading">CASE AND DIAL</p>

				<table className="case-dial-info info-table">
					<tr>
						<td>Case Size</td>
						<td>41mm</td>
					</tr>
					<tr>
						<td>Case Material</td>
						<td>Stainless steel</td>
					</tr>
					<tr>
						<td>Dial Color</td>
						<td>Blue</td>
					</tr>
					<tr>
						<td>Hours Marks</td>
						<td>Dot, Index</td>
					</tr>
					<tr>
						<td>Caseback</td>
						<td>Solid</td>
					</tr>
					<tr>
						<td>Case Shape</td>
						<td>Round</td>
					</tr>
					<tr>
						<td>Water Resistance</td>
						<td>300m</td>
					</tr>
				</table>

				<table>
					<tr>
						<td>Minting Date</td>
						<td>21 Dec 2022</td>
					</tr>
				</table>

			</section>

			<section className="footer">
				<div className="blockchain-btn">
					See on BlockChain
				</div>
				<p className="footer__certification">CERTIFIED BY <span className="font--moon-dance">WatchSquare</span></p>
			</section>
		</div>
	)
}

export default AuthCertificate;
