import { useState } from "react"
import { TextInput } from "./TextInput";
import { IconAt } from '@tabler/icons-react';
import styles from './SignIn.module.css'



export const SignIn = (onSubmit) => {

    const [form, setForm] = useState({email: '', password: ''});
   
    const handleChange = (event) => {
        setForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleClick = (event) => {
        event.preventDefault();
        onSubmit(form);
    }

    return (
        <div className={styles.container}>
            <form
                onChange={handleChange}
                onSubmit={handleClick}
            >
                <TextInput 
                    label='email'
                    type="email"
                    name="email"
                    placeholder="email"                 
                    icon ={ <IconAt size = "0.8rem" />}                  
                />
                <TextInput 
                    label='password'
                    type="password"
                    name="password"
                    placeholder="password"                  
                />
               <button type="submit" >Войти</button>
            </form>
        </div>
    )
}