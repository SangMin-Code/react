import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './maker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

const Maker = ({authService}) => {
    const [cards,setCards] = useState([
        {
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
        {
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
        {
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
    ])
    
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

    const addCard = (card)=>{
        const update = [...cards,card];
        setCards(update);
    }

    return (
        <section className={styles.maker}>
            <Header onLogout = {onLogout}/>
                <div className={styles.container}>
                    <Editor cards={cards} addCard={addCard}/>
                    <Preview cards={cards}/>
                </div>
            <Footer/>

        </section>
    )
};

export default Maker;