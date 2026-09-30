import * as React from "react";
import { useNavigate } from "react-router-dom";

import {levels} from "../constants.js"

export default () => {

  const navigate = useNavigate();

  const setLevel = (level) => {
    var lvl = {name:level, ...levels[level]};
    var str = JSON.stringify(lvl);
    var start_time = new Date(Date.now());
    localStorage.setItem("start_time",start_time);
    localStorage.setItem("level", str);
    navigate('/game');
    console.log(localStorage);   
  }

  const levelNames = Object.keys(levels);

    return (
    <h3>
      Let's Play <br/>
      {levelNames.map((name,index)=><button key={index} className="button" onClick={()=>setLevel(name)}>{name}</button>)}
    </h3>
    )
}