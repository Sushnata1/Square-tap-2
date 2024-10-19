import * as React from "react";
import { useState, Suspense, lazy } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import PlaceholderImage from "../assets/placeholder.svg";
import JsonTable from "./JsonTable";

export default () => {

    const [name, setName] = useState(localStorage.getItem("name") ?? "Your Name Here");

    const imgSrc = "../assets/kali.jpg";

    const saveName = (event) => { //buggy
        setName(event.target.textContent)
        localStorage.setItem("name", name)
        console.log(localStorage);
    }

    return (
        <>
            <center>
                <LazyLoadImage
                    src={imgSrc}
                    onError={(e) => {
                        e.target.onerror = null; // prevents looping
                        e.target.src = PlaceholderImage; // set fallback image
                    }}
                    width="250px"
                    height="250px"
                    style={{ margin: "50px" }}
                />
            </center>
            <h1>Square Tap 2</h1>
            <h2>Welcome to Deepawali 2024 update</h2>
            <h3 contentEditable
                onInput={saveName}
                suppressContentEditableWarning={true}
            > {name} </h3>
        </>
    )
}