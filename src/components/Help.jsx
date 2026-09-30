import * as React from "react";
import {images} from "../constants.js"
import Image from "../components/Image.jsx"

export default () => {
    return (
        <>
            <div className="pad">
                <h2>Help</h2>
                <p>The aim of this game is to hover (for PCs) on the coloured squares (like '<Image src={images.good} typ="goodsquare" size="20" />' ) Or tap (for mobile devices) on them to get 1 point.
                    If a white square (like '<Image src={images.bad} size="20" />' ) is tapped or hovered, the game is over.
                    
                    Press on <span className="name">dark red box</span> to change your name.
                    If the history size becomes too large, Press on <span className="button">CLEAR</span> on the game over page.</p>
            </div>
        </>
    )
}