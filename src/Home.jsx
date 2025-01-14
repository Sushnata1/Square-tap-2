import * as React from "react";

import Title from "./components/Title";
import Menu from "./components/Menu";
import Help from "./components/Help";
import Credits from "./components/Credits";

//import './christmas.scss'

export default () => {
    return (
        <>
            <div className='snowfall'>
                {Array.from({ length: 28 }, (_, index) => (
                    <span key={index}></span>
                ))}
            </div>
            <div className="pad">
                <Title />
                <Menu />
                <p style={{overflow: "hidden", textAlign: "center"}}> 😊 Dedicated to all my friends from South India 😊 </p>
            </div>
            <Help />
            <Credits />
        </>
    )
}