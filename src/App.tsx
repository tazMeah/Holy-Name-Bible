import { NavLink, Route, Switch } from "react-router-dom";
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
								Please note the cancellation of our Zoom meetings on the
								following days: Friday, October 22, 2021 Sunday, October 24,
								2021 Wednesday, November 17, 2021 Friday, November 19, 2021
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
