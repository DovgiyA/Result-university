import { useParams } from "react-router-dom"
import styles from './EpisodeCard.module.css';
import { useAxios } from "../useAxios";

const EpisodeCard = () => {

    const {EpisodeId} = useParams();
    const {data} = useAxios('https://rickandmortyapi.com/api/episode');

    return (data[EpisodeId - 1] && <div className={styles.card}>
        <span>{data[EpisodeId - 1].name}</span>      
        <span>{data[EpisodeId - 1].air_date}</span>
        <span>{data[EpisodeId - 1].episode}</span>       
    </div>)
    
}
export default EpisodeCard;