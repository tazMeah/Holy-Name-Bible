import Bible from "../services/Bible";

export default function SearchResults() {
    const searchQuery: string = new URL(document.location.href).searchParams.get(
			"query"
		) || "";

    
    return (
        <>
            {Bible.map((verse, index) => {
                if (verse.Scripture.includes(searchQuery)){
                    return (                
                        <div>
                        <h5>book name</h5>
											<p key={index}>
												<span className="verseNumber">
													{verse.Chapter}:{verse.Verse}{" "}
												</span>
												&nbsp;&nbsp;{verse.Scripture}
											</p>

                        </div>
										);
                }
            })}
        </>
    )
}