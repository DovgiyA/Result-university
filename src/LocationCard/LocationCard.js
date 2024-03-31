import { useParams } from "react-router-dom"
import JSONfile from '../Location/location.json';
import styles from './LocationCard.module.css';

export const LocationCard = () => {

    const {LocationId} = useParams();

    return (JSONfile[LocationId - 1] && <div className={styles.card}>
        <span>{JSONfile[LocationId - 1].name}</span>  
        <span>{JSONfile[LocationId - 1].type}</span>
        <span>{JSONfile[LocationId - 1].dimension}</span>
    </div>)
    
}