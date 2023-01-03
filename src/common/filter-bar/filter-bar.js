import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FilterBar = (props) => {
	const { setNewestValue, setPrintValue, setFreeValue, setPaidValue } =
		props.control;
	return (
		<FormGroup className="filter-control">
			<FormControlLabel
				control={
					<Checkbox
						onChange={(event) => {
							if (event.target.checked) {
								setPrintValue(event.target.value);
							} else {
								setPrintValue("");
							}
						}}
						color="secondary"
						{...label}
					/>
				}
				label="Type"
				value="&#38;printType=magazines"
			/>
			<FormControlLabel
				control={
					<Checkbox
						onChange={(event) => {
							if (event.target.checked) {
								setNewestValue(event.target.value);
							} else {
								setNewestValue("");
							}
						}}
						color="secondary"
						{...label}
					/>
				}
				label="Newest"
				value="&#38;orderBy=newest"
			/>
			<FormControlLabel
				control={
					<Checkbox
						onChange={(event) => {
							if (event.target.checked) {
								setFreeValue(event.target.value);
							} else {
								setFreeValue("");
							}
						}}
						color="secondary"
						{...label}
					/>
				}
				label="Free"
				value="&#38;filter=free-ebooks"
			/>
			<FormControlLabel
				control={
					<Checkbox
						onChange={(event) => {
							if (event.target.checked) {
								setPaidValue(event.target.value);
							} else {
								setPaidValue("");
							}
						}}
						color="secondary"
						{...label}
					/>
				}
				label="Paid"
				value="&#38;filter=paid-ebooks"
			/>
		</FormGroup>
	);
};
export default FilterBar;
