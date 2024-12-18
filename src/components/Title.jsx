import * as React from "react";
import { useState, Suspense, lazy } from "react";

import images from "../imageurls.js";
import './imageovrlay.scss'

export default () => {

    const [name, setName] = useState(localStorage.getItem("name") ?? "");


    const saveName = (event) => { 
        setName(event.target.value)
        console.log(event.target.value);
        localStorage.setItem("name", event.target.value)
        //console.log(localStorage);
    }

    return (
        <>
            <center>
                <img
                    src={images.good}
                    width="250px"
                    height="250px"
                    className="goodsquare"
                />
            </center>
            <h1>Square Tap 2</h1>
            <h2>Welcome to Christmas 2024 update</h2>
            <input type="text" name="name" className="name namebox"
                value={name} onChange={saveName}/>
        </>
    )
}