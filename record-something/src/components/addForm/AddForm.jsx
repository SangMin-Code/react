import {React,useState,useCallback,useEffect,useRef} from 'react';
import styles from './addForm.module.css';
import { useHistory } from 'react-router';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const AddForm = ({authService,btn}) =>{
    // auth, records와 중복되는코드
    const history = useHistory();
    const historyState = history?.location?.state;
    // TODO Object로 Id, URL을 state로 두면 왜 오류가나는지?
    const [userId, setUserId] = useState(historyState && historyState.id);
    const [userPhotoURL , setUserPhotoURL] = useState(historyState && historyState.url);
    const onLogout = useCallback(()=>{
        authService.logout();
    },[authService]);
    useEffect(()=>{
        authService.onAuthChange(user =>{
            if(user){
                setUserId(user.uid);
                setUserPhotoURL(user.photoURL);
            }else{
                history.push('/');
            }
        })
    },[authService,history,userId,userPhotoURL])
    //----------------------------------------

    return(
        <section className={styles.maker}>
            <Header onLogout = {onLogout} btn={btn}/>
                <h1>Hello Im AddForm</h1>
            <Footer/>
        </section>
    )

};

export default AddForm;