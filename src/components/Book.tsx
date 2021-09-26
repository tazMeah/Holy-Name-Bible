import { useParams, useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import Bible from "../services/Bible";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./Book.css";

interface params {
	bookNumber: string;
	chapterNumber: string;
}

export default function Book() {
	// const Bible = useContext(BibleScriptures);
	const { bookNumber, chapterNumber } = useParams<params>();
	const history = useHistory();
	const bookName = new URL(document.location.href).searchParams.get("bookName");

	
	// useLayoutEffect(() => {
	// 	let scrollPoint = document.location.hash
	// 	if (scrollPoint) {
	// 		document.querySelector(scrollPoint)!.scrollIntoView();
	// 		// highlight it
	// 		document.querySelector(scrollPoint)?.classList.add("highlight");
	// 	}
	// });
	// make array of all chapters
	const allChapters: number[] = [];

	Bible.forEach((verse) => {
		if (verse.Book === +bookNumber) {
			if (!allChapters.includes(verse.Chapter)) {
				allChapters.push(verse.Chapter);
			}
		}
	});
	// for github pages search results instead of Link tag
	// const history = useHistory();
	
	// on refresh, go home. workaround for github pages
	window.onbeforeunload = function() { 
		window.setTimeout(function () { 
			window.location.href = "https://tazmeah.github.io/";
		}, 0); 
		window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
	}

	return (
		<div className="book mt-3">
			<h1>{bookName}</h1>
			<FloatingLabel
				controlId="floatingSelect"
				label="Chapter"
				className="mb-3"
			>
				<Form.Select
					value={chapterNumber}
					aria-label="Select a chapter."
					onChange={(e) => {
						const target = e.target as HTMLSelectElement;

						history.push(
							"/" + bookNumber + "/" + target.value + "?bookName=" + bookName
						);
					}}
				>
					{allChapters.map((chapterNumber, index) => {
						return (
							<option key={index} value={chapterNumber}>
								{chapterNumber}
							</option>
						);
					})}
				</Form.Select>
			</FloatingLabel>

			{Bible.map((verse: {Book: number, Chapter: number, Verse: number, Scripture: string, Footnote?: string[]}, index) => {
				return (
					verse.Book === +bookNumber &&
					verse.Chapter === +chapterNumber && (
						<p key={index} id={"v" + verse.Verse}>
							<span className="verseNumber">
								{verse.Chapter}:{verse.Verse}{" "}
							</span>
							&nbsp;&nbsp;{verse.Scripture}
						</p>
					)
				);
			})}

			<div className="footnotes">
				{Bible.map((verse, index) => {
					// footnotes
					return (
						verse.Book === +bookNumber &&
						verse.Chapter === +chapterNumber &&
						verse.Footnote && (
							verse.Footnote.map((footnote, index) => {
							return (
							<p key={index} className="footnote">
								{footnote}
							</p>
							)

							})
						)
					);
				})}
			</div>
		</div>
	);
}
