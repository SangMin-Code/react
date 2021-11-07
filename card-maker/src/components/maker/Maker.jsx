
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './maker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CardMaker from '../cardMaker/CardMaker'
import CardPreview from '../cardPreivew/CardPreview'

const Maker = ({authService,FileInput}) => {
    const history = useHistory()
    const onLogout = ()=>{
        authService.logout();
    }

    const [cards,setCards] = useState({
        '1':{
            id:'1',
            name:'Ellie',
            company:'Samsung',
            title:'Software Engineer',
            theme:'Light',
            email:'ellie@gmail.com',
            comment:'go for it',
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
            comment:'go for it',
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
            comment:'go for it',
            fileName:'mike',
            fileURL:null
        }
    })
    
    const onDelete = (card)=>{
        setCards((cards)=>{
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    }


    const createOrUpdateCard = (card)=>{
        setCards((cards)=>{
            const updated = {...cards};
            updated[card.id]=card;
            return updated;
        });
    }

    useEffect(()=>{
        authService.onAuthChange(user =>{
            if(!user){
                history.push('/')
            }
        })
    })

    

    return (
        <section className={styles.maker}>
            <Header onLogout = {onLogout}/>
            <section className={styles.content}>
                <CardMaker cards={cards} onAdd={createOrUpdateCard} onDelete={onDelete} onEdit={createOrUpdateCard} FileInput={FileInput}/>
                <CardPreview cards={cards}/>
            </section>
            <Footer/>
        </section>
    )
};

export default Maker;