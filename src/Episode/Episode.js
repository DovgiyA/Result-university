import { Link } from 'react-router-dom';
import JSONfile from './episode.json';
import styles from './Episode.module.css';

export const Episode = () => {

    return (<>{JSONfile.map(episode => (<Link className={styles.epi} to={`/episode/${episode.id}`} key={episode.id}>{episode.name}</Link>))}</>);
}