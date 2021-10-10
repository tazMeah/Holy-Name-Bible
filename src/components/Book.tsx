import { useParams, useHistory, NavLink, Link } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import Bible from "../services/Bible";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
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
	const [isPlaying, setIsPlaying] = useState(false);

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

	

	/* speech synthesis code from https://codersblock.com/blog/javascript-text-to-speech-and-its-many-quirks/*/
	

	// set text
	const chapterElementArray: Element[] = Array.from(
		document.querySelectorAll("[id^='v']")
	);
	const chapterTextArray: string[] = chapterElementArray.map(
		(el) => el.textContent!.split(/\d+/)[2]
	);
	const chapterText = chapterTextArray.toString();
	console.log(chapterText);

	

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
			{/* play and pause buttons */}
			{/* <div className="audioContainer mb-3">
				{!isPlaying ? (
					<Button
						variant="dark"
						size="sm"
						className="play"
						onClick={() => {
							
						}}
					>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="play-circle"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							className="svg-inline--fa fa-play-circle fa-w-16 fa-3x"
						>
							<path
								fill="currentColor"
								d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
								className=""
							></path>
						</svg>
					</Button>
				) : (
					<Button variant="dark" size="sm">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="pause-circle"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							className="svg-inline--fa fa-pause-circle fa-w-16 fa-3x"
						>
							<path
								fill="currentColor"
								d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"
								className=""
							></path>
						</svg>
					</Button>
				)}
			</div> */}

			{/* <FloatingLabel
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
			</FloatingLabel> */}

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
