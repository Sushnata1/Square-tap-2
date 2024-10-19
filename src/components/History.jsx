import * as React from "react";
import JsonTable from "./JsonTable";

export default () => {

    const gameHistory = JSON.parse(localStorage.getItem("gameHistory")) || []

    return (
        <div className="pad">
            <h2>History</h2>
            <JsonTable objarr={gameHistory}/>
        </div>
    )
}