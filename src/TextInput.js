import classNames from 'classnames'
import styles from './TextInput.module.css'

export const TextInput = (props) => {

    const inputStyles = classNames(styles.input, {
        [styles.iconInput]: props.icon,
        [styles.errorInput]: props.error,
        [styles.filled]: props.variant === 'filled',
        [styles.unstyled]: props.variant === 'unstyled',
        [styles.xs]: props.size === 'xs',
        [styles.md]: props.size === 'mg',
        [styles.lg]: props.size === 'lg',
        [styles.xl]: props.size === 'xl',
        [styles.xsRad]: props.radius === 'xsRad',
        [styles.mdRad]: props.radius === 'mdRad',
        [styles.lgRad]: props.radius === 'lgRad',
        [styles.xlRad]: props.radius === 'xlRad',
    })
    


    return (<div className={styles.el}>
        
        <label className={styles.label} htmlFor={props.name}>{props.label + `${props.withAsterisk ? props.withAsterisk : ''}`}</label>
       {props.discription && <div className={styles.description}>{props.discription}</div>}
       <div>
        <span className={styles.icon}>{props.icon}</span>
        <input 
            className={inputStyles}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            id={props.id}
            required={props.required}
            disabled={props.disabled}
            onChange={props.onChange}
        >           
        </input>
        {props.error && <div className={styles.error} >{props.error}</div>}
        </div>
        </div>)
}