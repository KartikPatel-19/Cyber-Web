import { Routes, Route } from "react-router";

import Home from "./pages/home";
import Quiz from "./pages/quiz"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/quiz/" element={<Quiz />} />
			</Routes>

			<footer>
				&copy; {new Date().getFullYear()} Team No 13 (Kartik Patel - 24BRS1383 &amp; V Srivatsan - 24BRS1381). All Rights Reserved.
			</footer>
		</>
	);
}

export default App;
