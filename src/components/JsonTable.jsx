import * as React from "react";

export default ({ objarr }) => {

    var objkeys = Object.keys(objarr[0]) || []

    return (
        <table>
            <thead>
                <tr>
                    {objkeys.map((value,index)=>(<th key={index}>{value}</th>))}
                </tr>
            </thead>
            <tbody>
                {objarr.map((item, index) => (
                    <tr key={index}>
                        <td>{item.score}</td>
                        <td>{item.level}</td>
                        <td>{item.time_taken}</td>
                        <td>{item.recorded_at}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}