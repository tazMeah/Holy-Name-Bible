import React from "react";
import { Route, Switch } from "react-router-dom";
import Book from "./components/Book";
import "./App.css";
import ScriptureProvider from "./context/ScriptureProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Contents from "./components/Contents";


function App() {
	const searchParams = new URL(document.location.href).searchParams;
	let bookName = searchParams.get("bookName"); 

	return (
		<Switch>
			<Route path="/" exact>
				<ScriptureProvider>
					<div className="App">
						<Contents />
					</div>
				</ScriptureProvider>
			</Route>
			{/* <Route path="/:bookNumber" exact>
				<Book bookName={bookName}/>
			</Route> */}
			<Route path="/:bookNumber/:chapterNumber" exact>
				<Book bookName={decodeURI(bookName as string)}/>
			</Route>
		</Switch>
	);
}

export default App;
