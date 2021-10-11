import Bible from "../services/Bible";
import { booksOfTheBible } from "../models/BooksOfTheBible";
import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

export default function SearchResults() {
	let results = false;
	const searchQuery: string =
		new URL(document.location.href).searchParams.get("query") || "";

	// color all the matching queries
    useLayoutEffect(() => {
        let regexp = new RegExp(searchQuery, "i");
        document.querySelectorAll("p").forEach(
            (p) =>
                (p.innerHTML = p.innerHTML.replace(regexp, function (text) {
                    return `<span class="highlight">${text}</span>`;
                }))
        );
    })
	// for github pages search results instead of Link tag
	const history = useHistory();
	
	// on refresh, go home. workaround for github pages
	window.onbeforeunload = function() { 
		window.setTimeout(function () { 
			window.location.href = "https://tazmeah.github.io/";
		}, 0); 
		window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
	}

	return (
		<div>
			<h1>{searchQuery}</h1>
			{Bible.map((verse, index) => {
				if (
					verse.Scripture.toLowerCase()
						.replace(/[,.!?:;]/gm, "")
						.includes(searchQuery.toLowerCase())
				) {
					results = true;
					return (
						<p
							style={{cursor: "pointer"}}
							key={index}
							onClick={() => {
								history.push(
									"/" +
										verse.Book +
										"/" +
										verse.Chapter +
										"?bookName=" +
										booksOfTheBible[verse.Book - 1].split(":")[1] +
										"#v" +
										verse.Verse
								);
							}}
						>
							{/* <Link
								key={index}
								to={{
									pathname: "/" + verse.Book + "/" + verse.Chapter,
									search:
										"bookName=" + booksOfTheBible[verse.Book - 1].split(":")[1],
									hash: "v" + verse.Verse,
								}}
							>  */}
							<span key={index} className="verseNumber">
								{booksOfTheBible[verse.Book - 1].split(":")[0]} {verse.Chapter}:
								{verse.Verse}{" "}
							</span>
							{/* </Link> */}
							&nbsp;&nbsp;{verse.Scripture}
						</p>
					);
				} else {
                    return false;
                }
			})}
			{results || <p>No results.</p>}
            
		</div>
	);
}
