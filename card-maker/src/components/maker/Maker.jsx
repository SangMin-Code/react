
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './maker.module.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CardMaker from './CardMaker'
import CardPreview from './CardPreview'

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
            'profile':'/images/default_logo.png',
            'key':'1',
        },{
            'name':'Bob',
            'company':'Uber',
            'theme':'Colorful',
            'job':'SoftWare Engineer',
            'email':'dreamcode@gmail.com',
            'comment':'hello',
            'profile':'/images/default_logo.png',
            'key':'2',
        },{
            'name':'Ellie',
            'company':'Google',
            'theme':'Light',
            'job':'SoftWare Engineer',
            'email':'dreamcode@gmail.com',
            'comment':'hello',
            'profile':'/images/default_logo.png',
            'key':'3',
        }
    ])
    
    const [option,setOption] = useState([])

    const options = ['Light','Dark','Colorful']

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
                <CardMaker data={data} options={options}/>
                <CardPreview data={data}/>
            </section>
            <Footer/>
        </section>
    )
};

export default Maker;