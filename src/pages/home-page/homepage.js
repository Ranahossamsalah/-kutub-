import { Outlet } from "react-router-dom";

import NavBar from "../../components/navbar/navbar";
import SearchBar from "../../common/search-bar/search-bar";
import EventPoster from "../../components/poster/poster";
import Footer from "../../components/footer/footer";

const HomePage = () => {
	return (
		<div className=" classes.homepage">
			<NavBar />
			<EventPoster />
			<SearchBar />
			<Outlet />
			<Footer />
		</div>
	);
};
export default HomePage;
