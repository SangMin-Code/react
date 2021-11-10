import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './maker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Maker = ({FileInput,authService,cardRepository}) => {
    const history = useHistory();
    const historyState = history?.location?.state;
    const [cards,setCards] = useState({})
    const [userId, setUserId] = useState(historyState && historyState.id);
    
    
    const onLogout = ()=>{
        authService.logout();
    }

    useEffect(()=>{
        authService.onAuthChange(user =>{
            if(user){
                setUserId(user.uid);
                console.log(userId);
            }else{
                history.push('/');
            }

        })
    })

    const createOrUpdateCard = (card)=>{
        setCards((cards)=>{
            const updated = {...cards};
            updated[card.id]=card;
            return updated;
        });
        cardRepository.saveCard(userId,card);
    }

    const deleteCard = (card)=>{
        setCards((cards)=>{
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId,card);
    }

    return (
        <section className={styles.maker}>
            <Header onLogout = {onLogout}/>
                <div className={styles.container}>
                    <Editor FileInput ={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard ={deleteCard} />
                    <Preview cards={cards}/>
                </div>
            <Footer/>

        </section>
    )
};

export default Maker;