import React from 'react';
import logo from './logo.svg';
import './App.scss';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SearchDefault from './pages/SearchDefault/SearchDefault';
import AuthCertificate from './pages/AuthCertificate/AuthCertificate';
import SearchKeyword from './pages/SearchKeyword/SearchKeyword';

function App() {
  return (
    <div className="App">
		{/* <VerifyEmail/> */}
		<BrowserRouter>
			<Routes>
				<Route path='/verify' element={<VerifyEmail/>}/>
				<Route path='/search' element={<SearchDefault/>}/>
				<Route path='/search-keyword' element={<SearchKeyword/>}/>
				<Route path='/certificate' element={<AuthCertificate/>}/>
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
