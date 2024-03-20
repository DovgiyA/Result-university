import { TextInput } from "./TextInput";
import styles from './SingUp.module.css';
import { useState } from "react";
import { IconAt } from '@tabler/icons-react';

export const SignUp = (onSubmit) => {

    const [form, setForm] = useState({email: '', password: ''});
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState();
    
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

    console.log(form)

    return (
        <div className={styles.container}>
            <form
                onChange={handleChange}
                onSubmit={handleClick}
            >
                <TextInput 
                    label='name'
                    type="text"
                    name="name"
                    placeholder="name" 
                />
                <TextInput 
                    label='nickname'
                    type="text"
                    name="nickname"
                    placeholder="nickname"                  
                />
                  <TextInput 
                    label='email'
                    type="email"
                    name="email"
                    placeholder="email"                 
                    icon ={ <IconAt size = "0.8rem" />}                  
                />
                 <span className={styles.sex}>
                    <TextInput 
                        label='male'
                        type="radio"
                        name="sex"
                        value='male'
                        placeholder="male"              
                    />                
                     <TextInput 
                        label='female'
                        type="radio"
                        name="sex"
                        value='female'
                        placeholder="female"                   
                    />
                </span>
                <TextInput 
                    label='password'
                    type="password"
                    name="password"
                    placeholder="password" 
                    onChange={(e) => setValue(e.target.value)}                 
                />
                {value === value2 ? (<TextInput 
                    label='repeat password'
                    type="password"
                    name="repeat_password"
                    placeholder="repeat password"    
                    onChange={(e) => setValue2(e.target.value)}            
                />) : (<TextInput 
                    label='repeat password'
                    type="password"
                    name="repeat_password"
                    placeholder="repeat password"    
                    onChange={(e) => setValue2(e.target.value)} 
                    error={value2}           
                />)}
               {value === value2 ? (<button type="submit" >Войти</button>) : (<button type="submit" disabled >Войти</button>)}
            </form>
        </div>
    )
}