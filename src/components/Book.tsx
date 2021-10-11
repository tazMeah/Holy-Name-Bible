import { useParams, useHistory, NavLink } from "react-router-dom";
import { useLayoutEffect } from "react";
import Bible from "../services/Bible";
import "./Book.css";
import Button from "react-bootstrap/Button";
import { booksOfTheBible } from "../models/BooksOfTheBible";

interface params {
	bookNumber: string;
	chapterNumber: string;
}

export default function Book() {
	// const Bible = useContext(BibleScriptures);
	const { bookNumber, chapterNumber } = useParams<params>();
	const history = useHistory();
	const bookName = new URL(document.location.href).searchParams.get("bookName");

	// highlight and scroll to your search query
	useLayoutEffect(() => {
		let scrollPoint = document.location.hash;
		if (scrollPoint) {
			document.querySelector(scrollPoint)!.scrollIntoView();
			// highlight it
			document.querySelector(scrollPoint)?.classList.add("highlight");
		}
	});

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
	window.onbeforeunload = function () {
		window.setTimeout(function () {
			window.location.href = "https://tazmeah.github.io/";
		}, 0);
		window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser
	};

	// pagination links
	let previousLink: string, nextLink: string;
	// console.log(allChapters);
	// nextLink
	if (+chapterNumber < allChapters.length) {
		nextLink = `/${+bookNumber}/${+chapterNumber + 1}?bookName=${bookName}`;
		// console.log("nextLink: ", nextLink)
	} else if (!(+chapterNumber === 22 && +bookNumber === 66)) {
		// console.log("chapterNumber: ", +chapterNumber);
		// console.log("bookNumber: ", +bookNumber)
		nextLink = `/${+bookNumber + 1}/1?bookName=${
			booksOfTheBible[+bookNumber].split(":")[1]
		}`;
		// console.log("nextLink: ", nextLink);
	}
	// previousLink
	const finalChapterNumbers: number[] = [
		50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150,
		31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4, 28, 16,
		24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1,
		1, 22,
	];

	if (+chapterNumber > 1) {
		previousLink = `/${+bookNumber}/${+chapterNumber - 1}?bookName=${bookName}`;
		// console.log("previousLink: ", previousLink);
	} else if (!(+chapterNumber === 1 && +bookNumber === 1)) {
		previousLink = `/${+bookNumber - 1}/${
			finalChapterNumbers[+bookNumber - 2]
		}?bookName=${booksOfTheBible[+bookNumber - 2].split(":")[1]}`;
		// console.log("previousLink: ", previousLink);
	}
	

	return (
		<div className="book mt-3">
			<h1>{bookName}</h1>
			<h5>Chapter: {chapterNumber}</h5>
			<table id="chapters" className="mb-3">
				<tbody>
					{allChapters.map((chapter, index) => (
						<tr key={index}>
							<td className="chapterLinks">
								<NavLink
									to={
										"/" + bookNumber + "/" + chapter + "?bookName=" + bookName
									}
									activeClassName="current"
								>
									{chapter}
								</NavLink>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{Bible.map(
				(
					verse: {
						Book: number;
						Chapter: number;
						Verse: number;
						Scripture: string;
						Footnote?: string[];
					},
					index
				) => {
					return (
						verse.Book === +bookNumber &&
						verse.Chapter === +chapterNumber && (
							<p key={index} id={"v" + verse.Verse}>
								<span className="verseNumber" aria-hidden="true">
									{verse.Chapter}:{verse.Verse}
								</span>
								&nbsp;&nbsp;{verse.Scripture}
							</p>
						)
					);
				}
			)}

			<div className="footnotes">
				{Bible.map((verse, index) => {
					// footnotes
					return (
						verse.Book === +bookNumber &&
						verse.Chapter === +chapterNumber &&
						verse.Footnote &&
						verse.Footnote.map((footnote, index) => {
							return (
								<p key={index} className="footnote">
									{footnote}
								</p>
							);
						})
					);
				})}
			</div>

			<div className="pagination">
				{(+bookNumber === 1 && +chapterNumber === 1) || (
					<Button
						onClick={() => {
							
							history.push(previousLink);
							window.scrollTo(0, 0);
						}}
					>
						&lt; Previous
					</Button>
				)}{" "}
				{(+bookNumber === 66 && +chapterNumber === 22) || (
					<Button
						onClick={() => {
							
							history.push(nextLink);
							window.scrollTo(0, 0);
						}}
					>
						Next &gt;
					</Button>
				)}
			</div>
		</div>
	);
}
