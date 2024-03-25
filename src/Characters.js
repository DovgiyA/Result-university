
import { Link } from 'react-router-dom';
import JSONfile from './characters.json';
import styles from './Characters.module.css';


export const Characters = () => {

    return (<>{JSONfile.map(character => (<Link className={styles.char} to={`/characters/${character.id}`} key={character.id}>{character.name}</Link>))}</>);
}