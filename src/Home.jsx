import * as React from "react";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Help from "./components/Help";
import Credits from "./components/Credits";

export default () => {
    return (
        <>
            <div className="pad">
                <Title />
                <Menu />
            </div>
            <Help />
            <Credits/>
        </>
    )
}