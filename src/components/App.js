import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const paraRef = useRef(null);

  function handleClick() {
    if (paraRef.current) {
      const paragraph = paraRef.current;
      if (paragraph.classList.contains("hide")) {
        paragraph.classList.remove("hide");
        paragraph.classList.add("show");
      } else {
        paragraph.classList.remove("show");
        paragraph.classList.add("hide");
      }
    }
  }

  return (
    <div className="App" id="main">
      <p id="para" className="hide" ref={paraRef}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
      <button id="click" onClick={handleClick}></button>
    </div>
  );
};

export default App;
