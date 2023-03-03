import { BrowserRouter as Router, NavLink, Route, Switch, Link } from "react-router-dom";
import Book from "./components/Book";
import "./App.css";
import ScriptureProvider from "./context/ScriptureProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Contents from "./components/Contents";

import SearchForm from "./SearchForm";
import SearchResults from "./components/SearchResults";
import WholeBible from "./components/WholeBible";

function App() {

	return (
		<div className="container pt-3">

			<Switch>
				<Route path="/:bookNumber/:chapterNumber">
					<header>
						<nav>
							<NavLink to="/" className="mb-3" exact>
								The Holy Name Bible
							</NavLink>
							<NavLink to="/" className="mb-3" exact>
								Elohim the Archetype (Original) Pattern of the Universe
							</NavLink>
							<SearchForm />
						</nav>
					</header>
					<Book />
				</Route>
				<Route path="/searchResults">
					<header>
						<nav>
							<NavLink to="/" className="mb-3" exact>
								The Holy Name Bible
							</NavLink>
							{/* <SearchForm /> */}
						</nav>
					</header>
					<SearchResults />
				</Route>
				<Route path="/" exact>
					<header>
						<nav>
							<NavLink to="/" className="mb-3" exact>
								The Holy Name Bible
							</NavLink>
							<NavLink to="/all" className="mb-3" id="all" exact>
								All
							</NavLink>
							<SearchForm />
							{/* <p>
								REMINDER: The Zoom meetings for the following dates have been cancelled.<br></br>
								<input type="date" value="2022-06-03" />
								<input type="date" value="2022-06-05" />
								<input type="date" value="2022-06-08" />
								<input type="date" value="2022-06-22" />
								<input type="date" value="2022-06-24" />
								<input type="date" value="2022-06-26" />
								<input type="date" value="2022-06-29" />
								

							</p> */}
						</nav>
					</header>
					<ScriptureProvider>
						<div className="App">
							<Contents />
						</div>
					</ScriptureProvider>
				</Route>
				<Route path="/all" exact>
					<WholeBible />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
