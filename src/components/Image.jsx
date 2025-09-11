import * as React from "react";

import './image.scss'

export default ({src,size, typ}) => {
    return (
        <>
        <img src={src} height={`${size}px`} width={`${size}px`} className={typ}/>
        </>
    )
}