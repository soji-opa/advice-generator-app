import React from "react";
import { useState } from "react";
import Main from "./component/Main";

function App() {
  const url = "https://api.adviceslip.com/advice";
  const [adviceSlip, setAdviceSlip] = useState({
    id: 117,
    text: "It is easy to sit up and take notice, what's difficult is getting up and taking action",
  });

  function handleClick() {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setAdviceSlip({
          id: data.slip.id,
          text: data.slip.advice,
        })
      );
  }

  return (
    <div className="App">
      <Main
        advice={adviceSlip.text}
        num={adviceSlip.id}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
