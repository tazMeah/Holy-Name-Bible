import Bible from "../services/Bible";
import { booksOfTheBible } from "../models/BooksOfTheBible";
import { Link } from "react-router-dom";

export default function SearchResults() {
	const searchQuery: string =
		new URL(document.location.href).searchParams.get("query") || "";
    

	return (
		<>
			{Bible.map((verse, index) => {
				if (
					verse.Scripture.toLowerCase()
						.replace(/[,.!?:;]/gm, "")
						.includes(searchQuery.toLowerCase())
				) {
					return (
						
							<p key={index}>
								<Link key={index} to={{pathname: "/" + verse.Book + "/" + verse.Chapter,search:"bookName=" + booksOfTheBible[verse.Book - 1].split(":")[1], hash: "v" +verse.Verse}}>
								{/* <Link to={"/" + verse.Book + "/" + verse.Chapter + "/#" + verse.Verse}> */}
									<span key={index} className="verseNumber">
										{booksOfTheBible[verse.Book - 1].split(":")[0]} {verse.Chapter}:
										{verse.Verse}{" "}
									</span>
								</Link>
								&nbsp;&nbsp;{verse.Scripture}
							</p>
						
					);
				}
			})}
		</>
	);
}
