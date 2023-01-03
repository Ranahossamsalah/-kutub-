import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./sidebar.module.scss";
import { categoryContext } from "../../context/categories";

function SideBar() {
  const value = useContext(categoryContext);
  const [active, setactive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickHandler = (text) => {
    value.filterItemHandler();
    if (text === "All") {
      value.setCategory("All");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[0] = true;
        return temp;
      });
    }
    if (text === "Music") {
      value.setCategory("Music");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[1] = true;
        return temp;
      });
    }
    if (text === "Thriller") {
      value.setCategory("Thriller");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[2] = true;
        return temp;
      });
    }
    if (text === "Romantic") {
      value.setCategory("Romantic");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[3] = true;
        return temp;
      });
    }
    if (text === "Adventure") {
      value.setCategory("Adventure");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[4] = true;
        return temp;
      });
    }
    if (text === "Crime") {
      value.setCategory("Crime");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[5] = true;
        return temp;
      });
    }
    if (text === "ScienceFiction") {
      value.setCategory("ScienceFiction");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[6] = true;
        return temp;
      });
    }
    if (text === "Scientific") {
      value.setCategory("Scientific");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[7] = true;
        return temp;
      });
    }
    if (text === "Detective") {
      value.setCategory("Detective");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[8] = true;
        return temp;
      });
    }
    if (text === "Historical") {
      value.setCategory("Historical");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[9] = true;
        return temp;
      });
    }
    if (text === "Suspense") {
      value.setCategory("Suspense");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[10] = true;
        return temp;
      });
    }
    if (text === "Literary") {
      value.setCategory("Literary");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[11] = true;
        return temp;
      });
    }
    if (text === "Poetry") {
      value.setCategory("Poetry");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[12] = true;
        return temp;
      });
    }
    if (text === "Horror") {
      value.setCategory("Horror");
      setactive((prev) => {
        let temp = prev.map((item) => false);
        temp[13] = true;
        return temp;
      });
    }
  };

  return (
    <>
      <div className={classes.sidebar}>
        <Link to="/category">
          <li
            className={`${active[0] ? classes.active : ""}`}
            onClick={() => onClickHandler("All")}
          >
            Home
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("Music")}
            className={`${active[1] ? classes.active : ""}`}
          >
            music
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("Thriller")}
            className={`${active[2] ? classes.active : ""}`}
          >
            Thriller
          </li>
        </Link>

        <Link to="/category">
          <li
            onClick={() => onClickHandler("Romantic")}
            className={`${active[3] ? classes.active : ""}`}
          >
            Romantic
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("Adventure")}
            className={`${active[4] ? classes.active : ""}`}
          >
            Adventure
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("Crime")}
            className={`${active[5] ? classes.active : ""}`}
          >
            Crime
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("ScienceFiction")}
            className={`${active[6] ? classes.active : ""}`}
          >
            ScienceFiction
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("Scientific")}
            className={`${active[7] ? classes.active : ""}`}
          >
            Scientific
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("Detective")}
            className={`${active[8] ? classes.active : ""}`}
          >
            Detective
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("Historical")}
            className={`${active[9] ? classes.active : ""}`}
          >
            Historical
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("Suspense")}
            className={`${active[10] ? classes.active : ""}`}
          >
            Suspense
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("Literary")}
            className={`${active[11] ? classes.active : ""}`}
          >
            Literary
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("Poetry")}
            className={`${active[12] ? classes.active : ""}`}
          >
            Poetry
          </li>
        </Link>
        <Link to="/category">
          <li
            onClick={() => onClickHandler("Horror")}
            className={`${active[13] ? classes.active : ""}`}
          >
            Horror
          </li>
        </Link>
        {/* <Link
          onClick={() => onClickHandler("Adventure")}
          className={`${active[4] ? classes.active : ""}`}
          style={{ backgroundImage: `url(../../assets/icons/horror.png)` }}
        >
          <li>Adventure</li>{" "}
        </Link>
        <Link
          onClick={() => onClickHandler("Crime")}
          className={`${active[5] ? classes.active : ""}`}
          style={{ backgroundImage: `url(../../assets/icons/horror.png)` }}
        >
          <li>Crime</li>
        </Link>
        <Link
          onClick={() => onClickHandler("ScienceFiction")}
          className={`${active[6] ? classes.active : ""}`}
          style={{ backgroundImage: `url(../../assets/icons/horror.png)` }}
        >
          <li>Science Fiction</li>
        </Link>
        <Link
          onClick={() => onClickHandler("Scientific")}
          className={`${active[7] ? classes.active : ""}`}
          style={{ backgroundImage: `url(../../assets/icons/horror.png)` }}
        >
          <li>Scientific</li>
        </Link>
        <Link
          onClick={() => onClickHandler("Detective")}
          className={`${active[8] ? classes.active : ""}`}
          style={{ backgroundImage: `url(../../assets/icons/horror.png)` }}
        >
          <li>Detective</li>{" "}
        </Link>
        <Link
          onClick={() => onClickHandler("Historical")}
          className={`${active[9] ? classes.active : ""}`}
          style={{ backgroundImage: `url(../../assets/icons/horror.png)` }}
        >
          <li>Historical</li>
        </Link>
        <Link
          onClick={() => onClickHandler("Suspense")}
          className={`${active[10] ? classes.active : ""}`}
          style={{ backgroundImage: `url(../../assets/icons/horror.png)` }}
        >
          <li>Suspense</li>
        </Link>
        <Link
          onClick={() => onClickHandler("Literary")}
          className={`${active[11] ? classes.active : ""}`}
          style={{ backgroundImage: `url(../../assets/icons/horror.png)` }}
        >
          <li>Literary</li>
        </Link>
        <Link
          onClick={() => onClickHandler("Poetry")}
          className={`${active[12] ? classes.active : ""}`}
          style={{ backgroundImage: `url(../../assets/icons/horror.png)` }}
        >
          <li>Poetry</li>
        </Link>
        <Link
          onClick={() => onClickHandler("Horror")}
          className={`${active[13] ? classes.active : ""}`}
          style={{ backgroundImage: `url(../../assets/icons/horror.png)` }}
        >
          <li>Horror</li>
        </Link> */}
      </div>
    </>
  );
}

export default SideBar;
