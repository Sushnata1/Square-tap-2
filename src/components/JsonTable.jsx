import * as React from "react";

import './JsonTable.scss';

export default ({ objarr }) => {

    var objkeys = Object.keys(objarr[0]) || []

    return (
        <div style={{overflow:"scroll"}}>
            <table>
                <thead>
                    <tr>
                        {objkeys.map((value, index) => (<th key={index}>{value}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {objarr.map((item, index) => (
                        <tr key={index}>
                            <td>{item[objkeys[0]]}</td>
                            <td>{item[objkeys[1]]}</td>
                            <td>{item[objkeys[2]]}</td>
                            <td>{item[objkeys[3]]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
