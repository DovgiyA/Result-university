import { NavLink } from "react-router-dom"
import styles from './Header.module.css';
import { AuthStatus } from "../AuthStatus/AuthStatus";


export const Header = () => {   

    return (
        <div className={styles.header}>           
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/characters'>Герои</NavLink>
            <NavLink to='/episode'>Эпизоды</NavLink>
            <NavLink to='/location'>Локации</NavLink> 
            <AuthStatus /> 
        </div>
    )
}