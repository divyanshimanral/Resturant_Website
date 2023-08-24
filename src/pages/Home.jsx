import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";
import Banner from "../assets/images/Banner.jpg";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="headerContainer">
        <h1>Food Website</h1>
        <p>Best food in India</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
