import * as React from "react";

import test from '../test.json';

export default ({ objarr }) => {
    objarr = objarr ?? test
    // var objkeys = objarr ? Object.keys(objarr[0]) : [];            
    //         var output = <table> <tr></tr>;
    //         output += objkeys.map(k=><th>{k}</th>).join();
    //         output += </tr>
    //         output += <tr>;
    //         for(obj of objarr){
    //             output += <tr>
    //             output += Object.values(obj).map(val => <td>{val}</td>).join();
    //             output += </tr>
    //         }
    //         output += </tr>
    //         output += </table>
    //         console.log(output);
    //         return output;
    objarr = JSON.stringify(objarr);
    return <p>{objarr}</p>
}