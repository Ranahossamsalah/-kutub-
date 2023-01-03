import LibraryFilterItem from "./libraryFilterItem/LibraryFilterItem";
import comics from "../../../../assets/icons/superhero.png";
import books from "../../../../assets/icons/books.png";
import favorite from "../../../../assets/icons/favorite.png";
import lent from "../../../../assets/icons/lent.png";
import Borrowed from "../../../../assets/icons/Borrowed.png";
import rated from "../../../../assets/icons/rated.png";
import summary from "../../../../assets/icons/summary.png";
import attack from "../../../../assets/imgs/attackCover.jpg";
import styles from "./Library.module.scss";
import ProfileBookCard from "../../../../common/profileBookCard/ProfileBookCard";
import IntroComponentAnimation from "../../../../common/containers/animation/intro-animation/IntroComponentAnimation";
import { useState } from "react";
const Library = () => {
  const filterMenu = [
    { bg: comics, title: "comics" },
    { bg: books, title: "Books" },
    { bg: favorite, title: "Favorite" },
    { bg: lent, title: "Lent" },
    { bg: Borrowed, title: "Borrowed" },
    { bg: rated, title: "Reviewed" },
    { bg: summary, title: "Summarized" },
  ];
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  const [change, setChange] = useState(true);
  const filterItemHandler = (item) => {
    setData(item);
    setChange(false);
    setTimeout(() => {
      setChange(true);
    }, 680);
  };

  return (
    <>
      <ul className={styles.navContainer}>
        {filterMenu.map((item) => (
          <LibraryFilterItem
            key={item.bg}
            bg={item.bg}
            title={item.title}
            onClick={() => filterItemHandler([item.title])}
          />
        ))}
      </ul>
      <IntroComponentAnimation isVisible={change > 0}>
        <main className={styles.main}>
          {data &&
            data.map((item, i) => <ProfileBookCard key={i} bg={attack} />)}
        </main>
      </IntroComponentAnimation>
    </>
  );
};
export default Library;
