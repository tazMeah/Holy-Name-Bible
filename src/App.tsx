import { NavLink, Route, Switch } from "react-router-dom";
import Book from "./components/Book";
import "./App.css";
import ScriptureProvider from "./context/ScriptureProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Contents from "./components/Contents";

import SearchForm from "./SearchForm";

function App() {
	return (
		<div className="container pt-3">
			<header>
				<nav>
					<NavLink to="/" className="mb-3" exact>Home</NavLink>
					<SearchForm/>
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
		</div>
	);
}

export default App;
