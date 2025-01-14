import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sketch from './game/Sketch';

export default () => {

    const [count,setCount] = useState(0)
    const navigate = useNavigate();

    const level = localStorage.getItem("level") || ""

    const navigateToGameOver = () => {
        var end_time = new Date(Date.now());
        var start_time = Date.parse(localStorage.getItem("start_time"));
        var time_taken = end_time - start_time;
        var level = JSON.parse(localStorage.getItem("level"))["name"];
        var gameHistory = JSON.parse(localStorage.getItem("gameHistory")) ?? [];
        var s = {
            score : count,
            level : level,
            time_taken : time_taken+" ms",
            recorded_at : end_time.toString(),
        };
        gameHistory.push(s);
        gameHistory = Array.from(new Set(gameHistory));//remove duplicates
        gameHistory.reverse();
        localStorage.setItem("gameHistory",JSON.stringify(gameHistory));
        localStorage.setItem("score",count)
        navigate("/game-over")
        console.log(localStorage);
        
    }

    return (
        <div className="full-screen">
            <h1>Game</h1>
            <Sketch increment={()=>setCount(count+1)} gameOver={navigateToGameOver}/>
            <h2>{count}</h2>
        </div>
    )
}