import * as React from "react";
import { images } from "../constants.js"
import Image from "../components/Image.jsx"

export default () => {
    return (
        <>
            <div className="pad">
                <h2>Help cum Gameplay</h2>
                <iframe width="315" height="560"
                    src="https://youtube.com/embed/yzh8zmVv6UI?si=YfBKo7K6UB0Ee9Fq"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen />
            </div>
        </>
    )
}