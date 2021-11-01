
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './maker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CardMaker from '../cardMaker/CardMaker'
import CardPreview from '../cardPreivew/CardPreview'
import Card from '../card/Card';

const Maker = ({authService}) => {
    const history = useHistory()
    const onLogout = ()=>{
        authService.logout();
    }
    const [data, setData] = useState([
        {   
            'name':'Ellie',
            'company':'Samsung',
            'theme':'Dark',
            'job':'SoftWare Engineer',
            'email':'dreamcode@gmail.com',
            'comment':'hello',
            'fileName':'ellie',
            'fileURL':null,
            'key':'1',
        },{
            'name':'Bob',
            'company':'Uber',
            'theme':'Colorful',
            'job':'SoftWare Engineer',
            'email':'dreamcode@gmail.com',
            'comment':'hello',
            'fileName':'bob',
            'fileURL':null,
            'key':'2',
        },{
            'name':'Tom',
            'company':'Google',
            'theme':'Light',
            'job':'SoftWare Engineer',
            'email':'dreamcode@gmail.com',
            'comment':'hello hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello',
            'fileName':'tom',
            'fileURL':'tom.logo.png',
            'key':'3',
        }
    ])
    
    const cardAdd = (card)=>{
        console.log(card)
        setData([...data,card])
    }

    const cardDelete = (card)=>{
        setData([...data.filter((d)=>{return d!==card})])
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
                <CardMaker data={data} cardAdd={cardAdd} cardDelete={cardDelete}/>
                <CardPreview data={data}/>
            </section>
            <Footer/>
        </section>
    )
};

export default Maker;