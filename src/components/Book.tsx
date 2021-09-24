import { useParams, useHistory } from "react-router";
import { useContext, useState, useLayoutEffect } from "react";
import { BibleScriptures } from "../context/ScriptureProvider";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

interface params {
	bookNumber: string;
}

export default function Book({ bookName }: { bookName: string | null }) {
	const { bookNumber } = useParams<params>(); // e.g. (book) "2" (Exodus)
	const Bible = useContext(BibleScriptures);
	const history = useHistory();
	const [currentChapter, setCurrentChapter] = useState<number>(1);
	const searchParams = new URL(document.location.href).searchParams;
	bookName = searchParams.get("bookName");

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});
	// make array of all chapters
	const allChapters: number[] = [];

	Bible.map((verse) => {
		if (verse.Book === +bookNumber) {
			if (!allChapters.includes(verse.Chapter)) {
				allChapters.push(verse.Chapter);
			}
		}
	});

	return (
		<div className="book container">
			<h1>{bookName}</h1>
			<FloatingLabel controlId="floatingSelect" label="Chapter" className="mb-3">
				<Form.Select
					aria-label="Select a chapter."
					onChange={(e) => {
						const target = e.target as HTMLSelectElement;
						setCurrentChapter(+target.value);
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
					verse.Chapter === currentChapter && (
						<p key={index}>
							{verse.Chapter}:{verse.Verse} {verse.Scripture}
						</p>
					)
				);
			})}
		</div>
	);
}
