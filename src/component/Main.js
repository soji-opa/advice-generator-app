import React from "react";
import pattern from "../images/pattern-divider-mobile.svg";
import dice from "../images/icon-dice.svg";

export default function Main(props) {
  return (
    <div className="main">
      {/* <p className="adviceNo">{`Advice #${props.num}`}</p> */}
      <p className="adviceNo">Advice #{props.num}</p>
      <p className="advice">{props.advice}</p>

      <img src={pattern} className="divider" alt="pattern divider" />

      <button className="btn" onClick={props.handleClick}>
        <img src={dice} className="dice-img" alt="dice button" />
      </button>
    </div>
  );
}
