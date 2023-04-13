import "./Home.css"

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="header">
        <div className="logo"></div>
        Meyd.it
      </div>
      <div className="body">
        <div className="welcomeSection">
          <div className="welcomeText">
            Welcome
            <div className="underline"></div>
          </div>
        </div>
        <div className="buttonsSection">
          <div className="button1">
            I'm a Maker
          </div>
          <div className="button2">
            I'm a consumer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;