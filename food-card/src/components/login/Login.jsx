import React, { useRef } from 'react';
import styles from './login.module.css'

const Login = ({authService}) => {

    const formRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const onClick = async (event)=>{
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const result = await authService.asyncSignUp(email,password)
        console.log(`signup result : ${result}`)
    }

    return (
        <form action="" ref = {formRef}>
            <input ref = {emailRef} className={styles.input} type='email' name='email' placeholder='email'/>
            <input ref = {passwordRef} className={styles.input} type="password" name='password' placeholder='password' />
            <button className='submitBtn' onClick={onClick}>Submit</button>
        </form>
    )
};

export default Login;