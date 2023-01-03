import classes from "./categoryList.module.scss";
import { useEffect, useState, useContext } from "react";
import { categoryContext } from "../../context/categories";
import Card from "../../components/card/card";
import SideBar from "../../common/sidebar/sidebar";
import PaginationBar from "../../components/pagination-bar/pagination";
import SearchBar from "../../common/search-bar/search-bar";
import NavBar from "../../components/navbar/navbar";
import EventPoster from "../../components/poster/poster";
import IntroComponentAnimation from "../../common/containers/animation/intro-animation/IntroComponentAnimation";

const Categorylist = () => {
  const { category, change } = useContext(categoryContext);

  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

  const url = `https://www.googleapis.com/books/v1/volumes?q=${category}&startIndex=${page}&orderBy=newest`;

  useEffect(() => {
    const fetchcards = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCards(data.items);
      } catch (error) {
        console.log("Error occured is :", error.message);
      }
    };
    fetchcards();
  }, [url]);

  return (
    <>
      <NavBar />
      <EventPoster />
      <div className={classes.container}>
        <div>
          <SideBar />
        </div>
        <IntroComponentAnimation isVisible={change}>
          <div className={classes.cardlist}>
            <SearchBar />
            <h2 className={classes.headline}> {category}</h2>

            <div className={classes.cardlistflex}>
              {cards ? (
                cards.map((item, index) => {
                  return <Card key={index} item={item} />;
                })
              ) : (
                <h1>Loading ...</h1>
              )}
            </div>
            <PaginationBar control={{ page, setPage }} />
          </div>
        </IntroComponentAnimation>
      </div>
    </>
  );
};
export default Categorylist;
