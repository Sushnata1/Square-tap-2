import * as React from "react";

import '../index.scss'

export default (err) => {
    const sadFace = "🥺"
    //console.log(err);
    return (
        <div className="pad">
        <h2>{sadFace}</h2>
        <p>{JSON.stringify(err)}</p>
        </div>
    )
}