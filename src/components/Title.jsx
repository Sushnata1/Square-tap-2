import * as React from "react";
import { useState, Suspense, lazy } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import PlaceholderImage from "/placeholder.svg";

export default () => {

    const [name, setName] = useState(localStorage.getItem("name") ?? "");

    const imgSrc = "./santa.jpeg";

    const saveName = (event) => { 
        setName(event.target.value)
        console.log(event.target.value);
        localStorage.setItem("name", event.target.value)
        //console.log(localStorage);
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
            <h2>Welcome to Christmas 2024 update</h2>
            <input type="text" name="name" className="name namebox"
                value={name} onChange={saveName}/>
        </>
    )
}