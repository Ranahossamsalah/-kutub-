import "./search-result.scss";
import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { searchContext } from "../../context/search";

import SearchBar from "../../common/search-bar/search-bar";
import FilterBar from "../../common/filter-bar/filter-bar";

const SearchResult = () => {
	const { searchKey, searchResults, setSearchResults } =
		useContext(searchContext);

	const [newestValue, setNewestValue] = useState("");
	const [printValue, setPrintValue] = useState("");
	const [freeValue, setFreeValue] = useState("");
	const [paidValue, setPaidValue] = useState("");

	const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchKey}${printValue}${newestValue}${freeValue}${paidValue}`;

	useEffect(() => {
		if (searchKey) {
			const getResults = async () => {
				try {
					const response = await fetch(baseUrl);
					const data = await response.json();
					setSearchResults(data.items);
				} catch (error) {
					console.log(error.message);
				}
			};
			getResults();
		}
	}, [baseUrl, searchKey, setSearchResults]);

	return (
		<>
			<div className="header">
				<h1>Search Results for: {searchKey}</h1>
				<SearchBar />
				<FilterBar
					control={{
						setNewestValue,
						setPrintValue,
						setFreeValue,
						setPaidValue,
					}}
				/>
			</div>
			<div className="results">
				{searchResults ? (
					searchResults.map((result, i) => (
						<h1 key={i}>{result.volumeInfo.title}</h1>
					))
				) : (
					<h1>No search results for this keyword</h1>
				)}
			</div>
		</>
	);
};
export default SearchResult;
