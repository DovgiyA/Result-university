import { useParams, Navigate } from "react-router-dom"
import JSONfile from '../Characters/characters.json';
import styles from './CharacterCard.module.css';


export const CharacterCard = () => {

    const {CharactersId} = useParams();
      

    return JSONfile[CharactersId - 1] ? (<div className={styles.card}>
        <span>{JSONfile[CharactersId - 1].name}</span>
        <span>{JSONfile[CharactersId - 1].status}</span>
        <span>{JSONfile[CharactersId - 1].species}</span>
        <span>{JSONfile[CharactersId - 1].type}</span>
        <span>{JSONfile[CharactersId - 1].gender}</span>
        <img className={styles.img} src={JSONfile[CharactersId - 1].image} alt="1"></img>
    </div>) : (<Navigate to='/' />);
    
}