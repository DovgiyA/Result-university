import axios from 'axios';
import { useEffect, useState } from "react"


export const useAxios = (url, page = 1) => {

    const [loading, setLoaiding] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [more, setMore] = useState(false);

    useEffect(() => {

        setLoaiding(true);
        setError(false);

        axios({
            method: 'GET',
            url: url,
            params: {page}
        }).then((res) => {
            setData(prevState => {
                    const uniq = new Set([...prevState, ...res.data.results].map(e => JSON.stringify(e)));
                    const result = Array.from(uniq).map(e => JSON.parse(e));
                    return result;
                });
            setMore(res.data.results.length > 0)
            setLoaiding(false);
        }).catch(e => {
            setError(false);
            console.error(e);
        });
    }, [page, url]);

    return {
        loading,
        error,
        data,
        more
    };
}