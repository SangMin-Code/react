import React from 'react';
import styles from './cardmaker.module.css'
import CardInputForm from '../cardInputForm/CardInputForm'

const CardMaker = ({data,cardAdd,cardDelete}) => {

    const emptyCard ={
        name:'',
        company:'',
        theme:'Dark',
        job:'',
        email:'',
        comment:'',
        fileName:'',
        fileURL:''
    }


    return (
        <div className={styles.cardMaker}>
            <h1 className={styles.title}>Card Maker</h1>
            <div className={styles.container}>
                {data.map((card,index)=>(
                    <CardInputForm card={card} key={index} type={'read'} onBtn={cardDelete}/>
                    ))}
                <CardInputForm card ={emptyCard} type={'add'} onBtn={cardAdd}/>
            </div>
        </div>
    )
}

export default CardMaker;