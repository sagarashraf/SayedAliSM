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

function App() {
	return (
		<Container fluid>
			<SponserList />
			<WhySmarter />
			<ClientCount />
			<MatchedOffer />
			<AboutUs />
			<ClientReviews />
			<GetInTouch />
		</Container>
	);
}

export default App;
