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

	// highlight and scroll to your search query
	useLayoutEffect(() => {
		let scrollPoint = document.location.hash
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
	window.onbeforeunload = function() { 
		window.setTimeout(function () { 
			window.location.href = "https://tazmeah.github.io/";
		}, 0); 
		window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
	}

	// pagination links
	let previousLink:string, nextLink:string;
	// console.log(allChapters);
	// nextLink
	if (+chapterNumber < allChapters.length){
		nextLink =`/${+bookNumber}/${+chapterNumber + 1}?bookName=${bookName}`;
		// console.log("nextLink: ", nextLink)
	} else if (!(+chapterNumber === 22 && +bookNumber === 66)) {
		// console.log("chapterNumber: ", +chapterNumber);
		// console.log("bookNumber: ", +bookNumber)
		nextLink =`/${+bookNumber + 1}/1?bookName=${booksOfTheBible[+bookNumber].split(":")[1]}`;
		// console.log("nextLink: ", nextLink);
	}
	// previousLink
	const finalChapterNumbers:number[] = [50,40,27,36,34,24,21,4];

	if (+chapterNumber > 1) {
		previousLink = `/${+bookNumber}/${+chapterNumber - 1}?bookName=${bookName}`;
		// console.log("previousLink: ", previousLink);
	} else if(!(+chapterNumber === 1 && +bookNumber === 1)) {
		previousLink = `/${+bookNumber - 1}/${finalChapterNumbers[+bookNumber - 2]}?bookName=${booksOfTheBible[+bookNumber - 2].split(":")[1]}`;
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
					
						<Button onClick={()=>{history.push(previousLink); window.scrollTo(0,0)}}>&lt; Previous</Button>
					
				)}{" "}
				{(+bookNumber === 66 && +chapterNumber === 22) || (
					
						<Button onClick={() => {history.push(nextLink); window.scrollTo(0,0)}}>Next &gt;</Button>
					
				)}
			</div>
		</div>
	);
}
