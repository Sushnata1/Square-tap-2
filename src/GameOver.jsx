import * as React from "react";
import { Link } from "react-router-dom";

import History from "./components/History";
import Decoration from "./components/Decoration";

export default () => {

    const name = localStorage.getItem("name") || "Player"
    const score = localStorage.getItem("score") || "Cleared"

    return (
        <>
            <Decoration />
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