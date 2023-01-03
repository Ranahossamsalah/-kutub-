import CategorySlider from "../category-slider/category-slider";

const HomeBooks = () => {
	return (
		<div className="book-container">
			<CategorySlider title="New" />
			<CategorySlider title="Popular" />
			<CategorySlider title="Science" />
			<CategorySlider title="History" />
			<CategorySlider title="Documentary" />
			<CategorySlider title="Music" />
			<CategorySlider title="Kids" />
			<CategorySlider title="Adventure" />
			<CategorySlider title="Horror" />
			<CategorySlider title="Fantasy" />
		</div>
	);
};

export default HomeBooks;
