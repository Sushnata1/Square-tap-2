import * as React from "react";
import JsonTable from "./JsonTable";

export default () => {

    const gameHistory = localStorage.getItem("gameHistory") || ""

    console.log(gameHistory);

    return (
        <div className="pad">
            <h2>History</h2>
            <JsonTable objarr={gameHistory}/>
        </div>
    )
}