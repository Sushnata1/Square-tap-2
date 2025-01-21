import * as React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';

import { images } from "../constants.js";
import Image from "../components/Image.jsx"

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
                <Image
                    src={images.good}
                    size="250"
                    typ="goodsquare"
                />
            </center>
            <h1>Square Tap 2</h1>
            <h2>Welcome to Saraswati Puja 2025 update</h2>
            <input type="text" name="name" className="name namebox"
                value={name} onChange={saveName} />
        </>
    )
}