import ErrorBoundary from '../ErrorBoundary';
import { Link } from 'react-router-dom';
import styles from './Characters.module.css';
import { useAxios } from '../useAxios';
import { useCallback, useRef, useState } from 'react';


const Characters = () => {

    const [page, setPage] = useState(1);

    const {loading, error, data, more} = useAxios('https://rickandmortyapi.com/api/character', page);
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
    {data.map(character => (<Link ref={lastNodeRef} className={styles.char} to={`/characters/${character.id}`} key={character.id}>{character.name}</Link>))}
    {(error && loading) ? <h1>Loading...</h1> : null}
    {error && <h1>Error</h1>}
    </ErrorBoundary>);
}

export default Characters;