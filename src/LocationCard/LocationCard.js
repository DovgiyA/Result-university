import { useParams } from "react-router-dom"
import styles from './LocationCard.module.css';
import { useAxios } from "../useAxios";

const LocationCard = () => {

    const {LocationId} = useParams();
    const {data} = useAxios('https://rickandmortyapi.com/api/location');

    return (data[LocationId - 1] && <div className={styles.card}>
        <span>{data[LocationId - 1].name}</span>  
        <span>{data[LocationId - 1].type}</span>
        <span>{data[LocationId - 1].dimension}</span>
    </div>)
    
}

export default LocationCard;