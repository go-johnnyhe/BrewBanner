import { useNavigate } from "react-router-dom";

const LearnAdvertise = () => {
  const navigateTo = useNavigate();

  function handleOnclick() {
    navigateTo("/soon");
  }

  return (
    <>
      <h1
        style={{ textAlign: "center", paddingTop: "80px" }}
        className="header-galaxy"
      >
        Brew Up Your Brand On Our Unique Platform
      </h1>
      <p className="smallText promote-subtitle">On average, every cup gets</p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {/* <div className="LearnAdvertise-container"> */}
        <div className="LearnAdvertiseBox">
          <p className="bigNum">15</p>
          <p className="mediumText">impressions</p>
          <p className="smallText">on each potential customer</p>
        </div>

        <div className="LearnAdvertiseBox">
          <p className="bigNum bigNumMargin">30</p>
          <p className="mediumText">minutes</p>
          <p className="smallText">of personal connection</p>
        </div>

        <div className="LearnAdvertiseBox">
          <p className="bigNum">20</p>
          <p className="mediumText">exposures</p>
          <p className="smallText">as a mini mobile billboard</p>
        </div>
        {/* </div> */}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        <button className="learn-more" onClick={handleOnclick}>
          Learn More
        </button>
      </div>
    </>
  );
};

export default LearnAdvertise;
