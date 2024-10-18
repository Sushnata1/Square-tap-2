import * as React from "react";
import { useState } from "react";

export default () => {

    const [name, setName] = useState(localStorage.getItem("name") ?? "Your Name Here");

    const saveName = (event) => { //buggy
        setName(event.target.textContent)
        localStorage.setItem("name",name)
        console.log(localStorage);
        
    }

    return (
        <>
            <center><img src="assets\Durga_puja_2024\kali.jpeg" height="256" width="256" alt="Durga" /></center>
            <h1>Square Tap 2</h1>
            <h2>Welcome to Deepawali 2024 update</h2>
            <h3 contentEditable
                onInput={saveName}
                suppressContentEditableWarning={true}
            > {name} </h3>
        </>
    )
}