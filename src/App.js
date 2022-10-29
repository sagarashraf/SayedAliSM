import logo from "./logo.svg";
import "./App.css";
import { SponserList } from "./components/SponserList/SponserList";
import { WhySmarter } from "./components/WhySmarter.js/WhySmarter";
import { Container } from "react-bootstrap";
import { MatchedOffer } from "./components/MatchedOffer/MatchedOffer";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ClientReviews } from "./components/ClientReviews/ClientReviews";
import { GetInTouch } from "./components/GetInTouch/GetInTouch";
import { ClientCount } from "./components/ClientCount/ClientCount";
import { TermsText } from "./components/Policy/TermsText";
import { Privacy } from "./components/Policy/Privacy/Privacy";
import { NavBar } from "./components/NavBar/NavBar";
import { RoutesPath } from "./components/RoutesPath";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div>
			{/* <NavBar /> */}

			<Container fluid>
				<Routes>
					<Route path='/' element={<RoutesPath />} />
					<Route path='/Terms-Conditions' element={<TermsText />} />
					<Route path='/Privacy-Policy' element={<Privacy />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
