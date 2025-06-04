import * as React from "react";
import { useEffect } from "react";

import Title from "./components/Title";
import Menu from "./components/Menu";
import Help from "./components/Help";
import Credits from "./components/Credits";
import Decoration from "./components/Decoration";
import { sounds } from "./constants";

import './holi.scss'

export default () => {

    // useEffect(()=>{
    //     sounds.good.play();
    // })
    
    return (
        <>
            <div className="pad">
                <Title />
                <Menu />
                <h2><a href={"https://youtu.be/yzh8zmVv6UI?si=DfN6V7LRNqjJvz0-"} target="_blank" rel="noreferrer"> Help </a></h2>
            </div>
            {/* <Help /> */}
            <Credits />
            <Decoration />
        </>
    )
}