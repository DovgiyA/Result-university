import { useState } from "react"

const getLocalValue = () => {

    const saveValue = JSON.parse(localStorage.getItem('token'));

    return saveValue;
}


export const useLocalStorage = (token) => {

    const [value, setValue] = useState(token);

    const setItem = (newToken) => {

        localStorage.setItem('token', JSON.stringify(newToken));
        setValue(() => getLocalValue());        
    }    

    const removeItem = () => {

        localStorage.setItem('token', '');
        setValue();        
    }
    
    token = value;

    return [token, {setItem, removeItem}]
}