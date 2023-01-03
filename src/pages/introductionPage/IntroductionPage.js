import FeaturesContainer from "../../components/featuresContainer/FeaturesContainer";
import IntroNavBar from "../../components/introNavBar/IntroNavBar";
import styles from "./IntroductionPage.module.scss";
const IntroductionPage = () => {
  return (
    <div className={styles.container}>
      <IntroNavBar />
      <FeaturesContainer />
    </div>
  );
};
export default IntroductionPage;
