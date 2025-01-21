import * as React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default () => {

    return (
        <div className="pad">
            <h2>Credits</h2>
            <ul>
                <li>
                    Sushnata Sarkar
                    <a href="https://github.com/Sushnata1" target="_blank" rel="noreferrer"> +
                        <FontAwesomeIcon icon={faGithub}
                            style={{ padding: '0px 5px' }}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/sushnata-sarkar-5a9752170/" target="_blank" rel="noreferrer"> +
                        <FontAwesomeIcon icon={faLinkedin}
                            style={{ padding: '0px 5px' }} />
                    </a>
                </li>
            </ul>
        </div>
    )
}