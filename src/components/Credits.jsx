import * as React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { credits } from "../constants";

const icons = {
    "Github": faGithub,
    "LinkedIn": faLinkedin
}

export default () => {

    const units = Object.keys(credits);

    return (
        <div className="pad">
            <h2>Credits</h2>
            <ul style={{ textAlign: "left" }}>
                {units.map((unit, i1) => <li key={i1}>
                    <b>{unit} : </b>
                    <ul style={{ textAlign: "left" }}>
                        {Object.keys(credits[unit]).map((name, i2) => <li key={i2}>
                            {name}
                            {Object.keys(credits[unit][name]).map((network, i3) => <a href={credits[unit][name][network]} target="_blank" rel="noreferrer"> +<FontAwesomeIcon key={i3} icon={icons[network]} /></a>)}
                        </li>)}
                    </ul>
                </li>)}
            </ul>
        </div>
    )
}