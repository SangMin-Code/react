
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './maker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CardMaker from '../cardMaker/CardMaker'
import CardPreview from '../cardPreivew/CardPreview'

const Maker = ({authService}) => {
    const history = useHistory()
    const onLogout = ()=>{
        authService.logout();
    }
    const [data, setData] = useState([
        {   
            'id':1,
            'name':'Ellie',
            'company':'Samsung',
            'theme':'Dark',
            'job':'SoftWare Engineer',
            'email':'dreamcode@gmail.com',
            'comment':'hello',
            'fileName':'ellie',
            'fileURL':null,
        },{
            'id':2,
            'name':'Bob',
            'company':'Uber',
            'theme':'Colorful',
            'job':'SoftWare Engineer',
            'email':'dreamcode@gmail.com',
            'comment':'hello',
            'fileName':'bob',
            'fileURL':null,
        },{
            'id':3,
            'name':'Tom',
            'company':'Google',
            'theme':'Light',
            'job':'SoftWare Engineer',
            'email':'dreamcode@gmail.com',
            'comment':'hello hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello',
            'fileName':'tom',
            'fileURL':'tom.logo.png',
        }
    ])
    
    const onAdd = (card)=>{
        const update = [...data,card]
        setData(update)
    }

    const onDelete = (card)=>{
        const update = data.filter((d)=>{return d!==card})
        console.log(update)
        setData(update)
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
                <CardMaker data={data} onAdd={onAdd} onDelete={onDelete}/>
                <CardPreview data={data}/>
            </section>
            <Footer/>
        </section>
    )
};

export default Maker;