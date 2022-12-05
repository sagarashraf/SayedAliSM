import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Drawer } from "./Components/Home/Drawer";
import { OverView } from "./Components/OverView/OverView";

function App() {
	return (
		<div>
			{/* <NavBar /> */}

			<Container fluid>
				{/* <Drawer /> */}
				<Routes>
					<Route path='/' element={<OverView />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
