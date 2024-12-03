import * as React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './icons.scss'

export default () => {

    return (
        <div className="pad">
            <h2>Credits</h2>
            <ul>
                <li>
                    <b>Development : </b> Sushnata Sarkar
                    <a href="https://github.com/Sushnata1" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub}
                            style={{ padding: '0px 5px' }} /*shake*/
                             />
                    </a>
                    <a href="https://www.linkedin.com/in/sushnata-sarkar-5a9752170/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}
                            style={{ padding: '0px 5px' }} />
                    </a>
                </li>
                <li>
                    <b>Graphics : </b> Sayantanee Sarkar
                    <a href="https://github.com/sayariya" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub}
                            style={{ padding: '0px 5px' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/sayantanee-sarkar-474766227/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}
                            style={{ padding: '0px 5px' }} />
                    </a>
                </li>
            </ul>
        </div>
    )
}