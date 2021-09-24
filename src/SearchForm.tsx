import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export default function SearchForm() {
	return (
		<InputGroup className="mt-3 mb-3">
			<Button variant="outline-secondary" id="button-addon1">
				Search
			</Button>
			<FormControl
				aria-label="Example text with button addon"
				aria-describedby="basic-addon1"
			/>
		</InputGroup>
	);
}
