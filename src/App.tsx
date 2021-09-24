import { NavLink, Route, Switch } from "react-router-dom";
import Book from "./components/Book";
import "./App.css";
import ScriptureProvider from "./context/ScriptureProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Contents from "./components/Contents";

function App() {
	return (
		<>
			<header>
				<nav>
					<NavLink to="/">Home</NavLink>
				</nav>
			</header>
			<Switch>
				<Route path="/" exact>
					<ScriptureProvider>
						<div className="App">
							<Contents />
						</div>
					</ScriptureProvider>
				</Route>

				<Route path="/:bookNumber/:chapterNumber" exact>
					<Book />
				</Route>
			</Switch>
		</>
	);
}

export default App;
