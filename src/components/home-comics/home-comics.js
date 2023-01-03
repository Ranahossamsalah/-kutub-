import { useEffect, useState } from "react";
import CategorySlider from "../category-slider/category-slider";
import CircularProgress from "@mui/material/CircularProgress";

const HomeComics = () => {
  const [timer, setTimer] = useState(false);
  const [timer2, setTimer2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 2000);
    setTimeout(() => {
      setTimer2(true);
    }, 4000);
  }, []);

  return (
    <div className="book-container">
      <CategorySlider title="manga" />
      <CategorySlider title="anime" />
      <CategorySlider comic="anime" />
      {timer ? (
        <CategorySlider comic="manga" />
      ) : (
        <CircularProgress color="success" />
      )}
      {timer2 ? (
        <CategorySlider comic="characters" />
      ) : (
        <CircularProgress color="success" />
      )}
    </div>
  );
};

export default HomeComics;
