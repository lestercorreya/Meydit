import "./Home.css"

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="welcomeSection">
        <div className="welcomeText">
          Welcome
          <div className="underline"></div>
        </div>
      </div>
      <div className="buttonsSection">
        <Link className="button1" to="/enterDetails">
          I'm a Maker
        </Link>
        <Link className="button2" to="/enterDetails">
          I'm a Consumer
        </Link>
      </div>
    </div>
  );
};

export default Home;