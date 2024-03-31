import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvder";
import styles from './AuthStatus.module.css'

export const AuthStatus = () => {

    const auth = useAuth();
    const navigate = useNavigate();


    const logoutHandler = () => {
        auth.logout(() => {
            navigate('/')
        })
    }

    return (
        <div className={styles.login}>
            <NavLink to='/login'>Логин</NavLink> 
            {auth?.user ? (<><span>{auth.user}</span><button onClick={logoutHandler}>Logout</button></>) : <span>Пользователь не авторизирован</span>}               
        </div>  
    )
}