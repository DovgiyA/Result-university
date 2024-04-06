import { Link } from 'react-router-dom';
import styles from './Location.module.css';
import { useCallback, useRef, useState } from 'react';
import { useAxios } from '../useAxios';
import ErrorBoundary from '../ErrorBoundary';

const Location = () => {

    const [page, setPage] = useState(1);

    const {loading, error, data, more} = useAxios('https://rickandmortyapi.com/api/location', page);
    const observer = useRef();
    const lastNodeRef = useCallback(node => {
        if(loading) return;
        if(observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && more) {
                setPage(prevState => prevState + 20);
            }
        })

        if(node) {
            observer.current.observe(node);
        }
    }, [loading, more])

    return (<ErrorBoundary>
        {data.map(location => (<Link ref={lastNodeRef} className={styles.loc} to={`/location/${location.id}`} key={location.id}>{location.name}</Link>))}
        {(error && loading) ? <h1>Loading...</h1> : null}
        {error && <h1>Error</h1>}
        </ErrorBoundary>);
    }

export default Location;