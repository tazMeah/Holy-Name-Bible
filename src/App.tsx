import { BrowserRouter as Router,NavLink, Route, Switch, Link } from "react-router-dom";
import Book from "./components/Book";
import "./App.css";
import ScriptureProvider from "./context/ScriptureProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Contents from "./components/Contents";

import SearchForm from "./SearchForm";
import SearchResults from "./components/SearchResults";

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
							<SearchForm />
							{/* <p>
							REMINDER: The Zoom meetings for the following dates have been cancelled.<br></br> Friday, April 8, 2022 &nbsp;
							<input type="date" value="2022-04-08"/>,  Sunday, April 10, 2022 &nbsp;
							<input type="date" value="2022-04-10"/>
							</p> */}
						</nav>
					</header>
					<ScriptureProvider>
						<div className="App">
							<Contents />
						</div>
					</ScriptureProvider>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
