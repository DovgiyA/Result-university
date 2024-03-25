import { Link } from 'react-router-dom';
import JSONfile from './location.json';
import styles from './Location.module.css';

export const Location = () => {

    return (<>{JSONfile.map(location => (<Link className={styles.loc} to={`/location/${location.id}`} key={location.id}>{location.name}</Link>))}</>);
}