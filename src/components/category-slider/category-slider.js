import "./category-slider.scss";

import { categoryContext } from "../../context/categories";
import { useContext } from "react";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const CategorySlider = ({ title, comic }) => {
  const { setCategory } = useContext(categoryContext);
  const navigate = useNavigate();

  const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=${title}&orderBy=newest&printType=books&maxResults=25`;
  const comicUrl = `https://api.jikan.moe/v4/top/${comic}`;

  const [books, setBooks] = useState([]);
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch(title ? bookUrl : comicUrl);
        const data = await response.json();
        setBooks(title ? data.items : data.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getBooks();
  }, [bookUrl, comicUrl]);

  useEffect(() => {
    if (books.length > 0) {
      setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }
  }, [books.length]);

  const goToCategory = () => {
    setCategory(title);
    navigate("/category");
  };

  return (
    <>
      {books.length > 0 ? (
        <motion.div
          ref={slider}
          className="slider"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.h1
            className="headLine"
            onClick={goToCategory}
            animate={{ x: 50 }}
          >
            {title ? title : comic}
          </motion.h1>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-slider"
          >
            {books ? (
              books.map((book, i) => {
                return (
                  <motion.div key={i} className="item">
                    <img
                      src={
                        title
                          ? book.volumeInfo.imageLinks?.thumbnail
                          : book.images.jpg.image_url
                      }
                      alt=""
                    />
                  </motion.div>
                );
              })
            ) : (
              <h1>NO response</h1>
            )}
            <motion.div className="item">
              <Link onClick={() => setCategory(title)} to="/category">
                Click for more..
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
};

export default CategorySlider;
