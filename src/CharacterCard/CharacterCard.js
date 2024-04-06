import { useParams } from "react-router-dom";
import styles from './CharacterCard.module.css';
import { useAxios } from "../useAxios";


const CharacterCard = () => {

    const {CharactersId} = useParams();
    const {data} = useAxios('https://rickandmortyapi.com/api/character');
      

    return data[CharactersId - 1] && (<div className={styles.card}>
        <span>{data[CharactersId - 1].name}</span>
        <span>{data[CharactersId - 1].status}</span>
        <span>{data[CharactersId - 1].species}</span>
        <span>{data[CharactersId - 1].type}</span>
        <span>{data[CharactersId - 1].gender}</span>
        <img className={styles.img} src={data[CharactersId - 1].image} alt="1"></img>
    </div>);
    
}

export default CharacterCard;