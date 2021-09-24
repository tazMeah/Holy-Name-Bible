import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchForm() {
	const [searchQuery, setSearchQuery] = useState<string>("");
    const history = useHistory();
	return (
		<form onSubmit={(e) => {
            e.preventDefault();
            console.log(searchQuery);
            history.push({pathname:"/searchResults", search: "query=" + searchQuery});

        }}>
			<InputGroup className="mt-3 mb-3">
				<Button variant="outline-secondary" id="button-addon1" type="submit">
					Search
				</Button>
				<FormControl
                    required
					aria-label="Example text with button addon"
					aria-describedby="basic-addon1"
					value={searchQuery}
					onChange={(e) => {
						setSearchQuery(e.target.value);
					}}
				/>
			</InputGroup>
		</form>
	);
}
