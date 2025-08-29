import * as React from "react";
import { useEffect } from "react";

import Title from "./components/Title";
import Menu from "./components/Menu";
import Help from "./components/Help";
import Credits from "./components/Credits";
import Decoration from "./components/Decoration";
import { sounds } from "./constants";

import './themes/holi.scss'

export default () => {

    // useEffect(()=>{
    //     sounds.good.play();
    // })
    
    return (
        <>
            <div className="pad">
                <Title />
                <Menu />
            </div>
            <Help />
            <Credits />
            <Decoration />
        </>
    )
}