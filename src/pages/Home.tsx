import Slider from "../components/Slider";
import classes from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={classes.container}>
      <Slider />
    </div>
  );
};

export default Home;
