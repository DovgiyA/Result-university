import { useParams } from "react-router-dom"
import JSONfile from '../Episode/episode.json';
import styles from './EpisodeCard.module.css';

export const EpisodeCard = () => {

    const {EpisodeId} = useParams();

    return (JSONfile[EpisodeId - 1] && <div className={styles.card}>
        <span>{JSONfile[EpisodeId - 1].name}</span>      
        <span>{JSONfile[EpisodeId - 1].air_date}</span>
        <span>{JSONfile[EpisodeId - 1].episode}</span>       
    </div>)
    
}