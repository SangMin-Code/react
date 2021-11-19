import styles from './login.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer'
import { useHistory } from 'react-router';
import { useEffect } from 'react';


const Login = ({authService}) => {
   
    const history = useHistory();
    const goToMaker = (user)=>{
            history.push({
                pathname:'/records',
                state:{id:user.uid, url:user.photoURL},
            })
    };

    const onLogin = (event)=>{
        authService
        .login()
        .then(data=>goToMaker(data.user))
    }

    useEffect(()=>{
        authService
            .onAuthChange(user =>{
                console.log(user)
                user && goToMaker(user)
            })
    })



    return (
        <section className={styles.login}>
            <Header/>
                <section>
                    <h1>Login</h1>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <button className={styles.button} onClick={onLogin}>
                                Google
                            </button>
                        </li>   
                    </ul>
                </section>
            <Footer/>
        </section>

    )
};

export default Login;