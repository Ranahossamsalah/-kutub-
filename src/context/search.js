import { createContext, useState } from "react";
export const searchContext = createContext();

const SearchContextProvider = ({ children }) => {
	const [searchResults, setSearchResults] = useState([]);
	const [searchKey, setSearchKey] = useState("");

	return (
		<searchContext.Provider
			value={{
				searchKey,
				setSearchKey,
				searchResults,
				setSearchResults,
			}}
		>
			{children}
		</searchContext.Provider>
	);
};
export default SearchContextProvider;
