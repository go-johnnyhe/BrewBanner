import React from "react";

export default function Soon() {
  const style = {
    height: "94vh",
    maxHeight: "94vh",
    background:
      "url('/assets/images/bg8.jpg') no-repeat center center / 100% fixed",
    // backgroundSize: "100%",
  };

  const style2 = {
    height: "94vh",
    // width: "100vw",
    maxHeight: "94vh",
    background:
      "url('/assets/images/bg12.jpg') no-repeat center center / 100% fixed",
    // backgroundSize: "100%",
  };

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  function resizeWindow() {
    setWindowWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, [windowWidth]);

  return (
    // <div className="soon-container">
    <div style={windowWidth > 700 ? style : style2}>
      <div className="soon-text">
        <h1>Under Construction</h1>
      </div>
    </div>
  );
}
