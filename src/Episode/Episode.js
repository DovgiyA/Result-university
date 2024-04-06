import { Link } from 'react-router-dom';
import styles from './Episode.module.css';
import { useCallback, useRef, useState } from 'react';
import { useAxios } from '../useAxios';
import ErrorBoundary from '../ErrorBoundary';

const Episode = () => {

    const [page, setPage] = useState(1);

    const {loading, error, data, more} = useAxios('https://rickandmortyapi.com/api/episode', page);
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
        {data.map(episode => (<Link ref={lastNodeRef} className={styles.epi} to={`/episode/${episode.id}`} key={episode.id}>{episode.name}</Link>))}
        {(error && loading) ? <h1>Loading...</h1> : null}
        {error && <h1>Error</h1>}
        </ErrorBoundary>);
}

export default Episode;