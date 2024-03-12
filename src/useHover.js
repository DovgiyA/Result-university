import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react"


export const useHover = () => {

    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
       
            element.addEventListener('mouseover', setHovered(true));
            element.addEventListener('mouseout', setHovered(false));        

        return () => {
            element.removeEventListener('mouseover', setHovered(true));
            element.removeEventListener('mouseout', setHovered(false));
        }

    }, []);    

    return {hovered, ref};
}