import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvder.js';
import {TextInput} from '../TextInput/TextInput.js';
import style from './LoginPage.module.css'

export const LoginPage = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)

        const username = formData.get('user');

        auth.login(username, () => {
            navigate(from, {
                replace: true,
            });
        })
        
    }

    return (
        <form className={style.input} onSubmit={handleSubmit}>
            <TextInput
                name='user'
                type='text'
                placeholder='Login'
                label='Login'
                size='xl'
            ></TextInput>
            <button type='submit'>Submit</button>
        </form>
    )
}