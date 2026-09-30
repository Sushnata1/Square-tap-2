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
                            {objkeys.map((_,i)=><td>{item[objkeys[i]]}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
