import Bible from "../services/Bible";
import { booksOfTheBible } from "../models/BooksOfTheBible";

interface Verses {
    Book: number,
    Chapter: number,
    Verse: number,
    Scripture: string,
    Footnote?: string[]
}

export default function WholeBible() {
    return (
    <div className="WholeBible">
        {booksOfTheBible.map((title, index) => {
            return (
            <div className="title" key={index}>
                <h1>{decodeURI(title.split(":")[1])}</h1>
                {Bible.map(verse => {
                    if (index === verse.Book - 1) {
                        return ( <p key={"hnb-" + index + ":" + verse.Chapter + ":" + verse.Verse}>{verse.Chapter}:{verse.Verse} {verse.Scripture}</p>)
                    }
                })}
            </div>
            )
        })}
    </div>
    )
}