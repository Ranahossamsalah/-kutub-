import styles from "./FeaturesContainer.module.scss";
import ComicsContainer from "./comicsContainer/ComicsContainer";
import RatContainer from "./ratContainer/RatContainer";
import ReadingCircle from "./readingCircle/ReadingCircle";
import GirlOnBooks from "./girlOnBooks/GirlOnBooks";
import Exchange from "./exchange/Exchange";
import Airpods from "./airpods/Airpods";
import Feather from "./feather/Feather";
import Record from "./record/Record";
import Tablet from "./tablet/Tablet";
const FeaturesContainer = () => {
  return (
    <section className={styles.container}>
      <ComicsContainer />
      <RatContainer />
      <GirlOnBooks />
      <ReadingCircle />
      <Exchange />
      <Airpods />
      <Feather />
      <Record />
      <Tablet />
    </section>
  );
};
export default FeaturesContainer;
