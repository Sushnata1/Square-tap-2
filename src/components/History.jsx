import * as React from "react";
import JsonTable from "./JsonTable";
import { useNavigate } from "react-router-dom";

export default () => {

    const navigate = useNavigate();

    const gameHistory = JSON.parse(localStorage.getItem("gameHistory")) || []

    const clearHistory = () => {
        console.log("Cleaning history . . .");
        localStorage.removeItem("gameHistory");
        console.log(localStorage);
        console.log("Done");
        navigate("/")
    }

    return (
        <div className="pad">
            <h2>History <button onClick={clearHistory}>Clear</button></h2>
            <JsonTable objarr={gameHistory} />
        </div>
    )
}