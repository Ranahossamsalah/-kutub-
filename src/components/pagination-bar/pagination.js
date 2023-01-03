import { Pagination } from "@mui/material";

const PaginationBar = ({ control }) => {
	const { setPage } = control;
	const handleChange = (paginationIndex) => {
		setPage(paginationIndex + "0");
	};
	return (
		<div className="paginate">
			<Pagination
				style={{ display: "flex", justifyContent: "center" }}
				variant="outlined"
				count={4}
				showFirstButton
				showLastButton
				onChange={(e) => handleChange(e.target.textContent)}
			/>
		</div>
	);
};

export default PaginationBar;
