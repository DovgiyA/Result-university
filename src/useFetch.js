import { useState } from "react";
import { useEffect } from "react"



export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

   useEffect(() => {
       
            const FetchData = async () => {
                try {
                    const responce = await fetch(url);
                    const json = await responce.json();
                    setData(json);
            
                    setIsLoading(false);

                } catch (err) {
                    setError(err);
                    setIsLoading(false);
                }
            }   

    FetchData();

}, [url]);

const refetch = async (params) => {

    setIsLoading(true);

    try {
        const responce = await fetch(url, params);
        const json = await responce.json();
        setData(json);

        setIsLoading(false);

    } catch (err) {
        setError(err);
        setIsLoading(false);
    }
}   

    return {data, isLoading, error, refetch};
};

