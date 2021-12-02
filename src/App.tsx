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
							<p>
								Note: The video <strong><em>What's Going On?</em></strong> will be shared during the December 5, 2021 Zoom meeting.
							</p>
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
