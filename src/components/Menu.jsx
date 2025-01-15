import * as React from "react";
import { useNavigate } from "react-router-dom";

export default () => {

  const navigate = useNavigate();

  const setLevel = (level) => {
    var lvl = {};
    switch (level) {
      case "EASY":
        lvl = {
          name: "EASY",
          size: 100,
          delay: 140,
          number: 5
        };
        break;

      case "MEDIUM":
        lvl = {
          name: "MEDIUM",
          size: 80,
          delay: 100,
          number: 10
        };
        break;

      case "HARD":
        lvl = {
          name: "HARD",
          size: 50,
          delay: 80,
          number: 20
        };
    }
    var str = JSON.stringify(lvl);
    var start_time = new Date(Date.now());
    localStorage.setItem("start_time",start_time);
    localStorage.setItem("level", str);
    navigate('/game')
    console.log(localStorage);   
  }

    return (
    <>
    <ul>
      <li>Let's Play<br/></li>
      <li>
        <button className="button" onClick={()=>setLevel("EASY")}>EASY</button>
        <button className="button" onClick={()=>setLevel("MEDIUM")}>MEDIUM</button>
        <button className="button" onClick={()=>setLevel("HARD")}>HARD</button>
      </li>
    </ul>
    </>
    )
}