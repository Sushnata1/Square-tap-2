import * as React from "react";
import { Link } from "react-router-dom";

import History from "./History";

export default () => {

    const name = localStorage.getItem("name") || "Player"
    const score = localStorage.getItem("score") || "Cleared"

    return (
        <>
            <div className="pad">
                <h1>Game Over</h1>
                <h3>{name}</h3>
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