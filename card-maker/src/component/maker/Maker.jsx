import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './maker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Maker = ({authService}) => {
    const [cards,setCards] = useState({
        '1':{
            id:'1',
            name:'Ellie',
            company:'Samsung',
            title:'Software Engineer',
            theme:'Light',
            email:'ellie@gmail.com',
            message:'go for it',
            fileName:'ellie',
            fileURL:null
        },
        2:{
            id:'2',
            name:'Bob',
            company:'Uber',
            title:'Software Engineer',
            theme:'Dark',
            email:'bob@gmail.com',
            message:'go for it',
            fileName:'bob',
            fileURL:'bob.png'
        },
        3:{
            id:'3',
            name:'Mike',
            company:'Google',
            title:'Software Engineer',
            theme:'Colorful',
            email:'mike@gmail.com',
            message:'go for it',
            fileName:'mike',
            fileURL:null
        }
    })

    
    
    const history = useHistory()
    const onLogout = ()=>{
        authService.logout();
    }

    useEffect(()=>{
        authService.onAuthChange(user =>{
            if(!user){
                history.push('/')
            }
        })
    })

    const createOrUpdateCard = (card)=>{
        setCards((cards)=>{
            const updated = {...cards};
            updated[card.id]=card;
            return updated;
        });
    }

    const deleteCard = (card)=>{
        setCards((cards)=>{
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    }

    return (
        <section className={styles.maker}>
            <Header onLogout = {onLogout}/>
                <div className={styles.container}>
                    <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard ={deleteCard} />
                    <Preview cards={cards}/>
                </div>
            <Footer/>

        </section>
    )
};

export default Maker;