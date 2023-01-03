import books from "../../assets/imgs/books.jpg";
import comics from "../../assets/imgs/comics.jpg";
import background1 from "../../assets/imgs/background 1.png";
import background2 from "../../assets/imgs/background 6.png";
import "./option.scss";

import { useNavigate } from "react-router-dom";
import OptionNavBar from "../../components/option-navbar/option-navbar";

const Options = () => {
	const navigateTo = useNavigate();
	return (
		<>
			<OptionNavBar />
			<div className="main-container">
				<h1 className="title">Choose your favorite category!</h1>

				<div className="container">
					<div className="category" onClick={() => navigateTo("/home/books")}>
						<img src={books} alt="books" />
						<div className="overlay">
							<p>Books</p>
						</div>
					</div>
					<div className="category" onClick={() => navigateTo("/home/comics")}>
						<img src={comics} alt="comics" />
						<div className="overlay">
							<p>comics and manga</p>
						</div>
					</div>
					<img className="back1" src={background1} alt="" />
					<img className="back2" src={background2} alt="" />
				</div>
			</div>
		</>
	);
};
export default Options;
