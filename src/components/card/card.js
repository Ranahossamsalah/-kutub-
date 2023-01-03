import classes from "./card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <>
      <Link
        to={`/home/${item.id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <div className={classes.container}>
          <div className={classes.info}></div>
          <figure>
            <img src={item.volumeInfo.imageLinks?.thumbnail} alt="" />
          </figure>
          <div className={classes.icons}>
            <div className={classes.fav}> </div>
            <div className={classes.record}></div>
            <div className={classes.cart}></div>
            <div className={classes.events}></div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
