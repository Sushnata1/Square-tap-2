import * as React from "react";

export default ({src,size, typ}) => {
    return (
        <>
        <img src={src} height={`${size}px`} width={`${size}px`} className={typ}/>
        </>
    )
}