import * as React from "react";
import { Link } from "react-router-dom";

import History from "./History";

export default () => {

    const name = localStorage.getItem("name") || "Player"
    const score = localStorage.getItem("score") || "Cleared"

    return (
        <>
            <div className='snowfall'>
                {Array.from({ length: 28 }, (_, index) => (
                    <span key={index}></span>
                ))}
            </div>
            <div className="pad">
                <h1>Game Over</h1>
                <p className="name namebox">{name}</p>
                <h2><i>Score : </i>{score}</h2>
                <nav>
                    <ul>
                        <li><Link to="/game">Play again</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </div>
            <History />
        </>
    )
}