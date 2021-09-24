import { useParams, useHistory } from "react-router-dom";
import { useContext, useLayoutEffect } from "react";
import { BibleScriptures } from "../context/ScriptureProvider";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./Book.css";

interface params {
	bookNumber: string;
	chapterNumber: string;
}

export default function Book() {
	
	const Bible = useContext(BibleScriptures);
	const {bookNumber, chapterNumber} = useParams<params>();
	const history = useHistory();
	const bookName = new URL(document.location.href).searchParams.get("bookName");

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
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

	return (
		<div className="book container mt-3">
			<h1>{bookName}</h1>
			<FloatingLabel controlId="floatingSelect" label="Chapter" className="mb-3">
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

			{Bible.map((verse, index) => {
				return (
					verse.Book === +bookNumber &&
					verse.Chapter === +chapterNumber && (
						<p key={index}>
							<span className="verseNumber">
								{verse.Chapter}:{verse.Verse}{" "}
							</span>
							&nbsp;&nbsp;{verse.Scripture}
						</p>
					)
				);
			})}
		</div>
	);
}
