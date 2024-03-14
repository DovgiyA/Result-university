import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";


export const useViewportSize = () => {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

   useWindowEvent('resize', (e) => {
    setWidth(() => e.target.innerWidth);     
    });

    useWindowEvent('resize', (e) => {
        setHeight(() => e.target.innerHeight);       
    });    

    return { height, width };
}