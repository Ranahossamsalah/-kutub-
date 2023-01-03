import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux";

import CategoryContextProvider from "./context/categories";
import SearchContextProvider from "./context/search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<SearchContextProvider>
				<CategoryContextProvider>
					<App />
				</CategoryContextProvider>
			</SearchContextProvider>
		</Provider>
	</React.StrictMode>
);
