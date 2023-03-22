import React, { useState } from "react";
import "./App.scss";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchDefault from "./pages/SearchDefault/SearchDefault";
import AuthCertificate from "./pages/AuthCertificate/AuthCertificate";
import SearchKeyword from "./pages/SearchKeyword/SearchKeyword";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Home from "./pages/Home/Home";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import SearchResultItems from "./pages/SearchResultItems/SearchResultItems";
import Settings from "./pages/Settings/Settings";

function App() {
	return (
		<div className={`App `} id="App">
			<BrowserRouter>
				{/* <ColorPicker/> */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/verify" element={<VerifyEmail />} />
					<Route path="/search" element={<SearchDefault />} />
					<Route path="/search-keyword" element={<SearchKeyword />} />
					<Route path="/certificate" element={<AuthCertificate />} />
					<Route path="/product-detail" element={<ProductDetail />} />
					<Route path="/search-result-items" element={<SearchResultItems />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
