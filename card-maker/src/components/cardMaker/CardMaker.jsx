import React from 'react';
import styles from './cardmaker.module.css'
import CardEditForm from '../cardEditForm/CardEditForm'
import CardAddForm from '../cardAddForm/CardAddForm';

const CardMaker = ({cards,onAdd,onDelete,onEdit,FileInput}) => {

    return (
        <div className={styles.cardMaker}>
            <h1 className={styles.title}>Card Maker</h1>
            <div className={styles.container}>
                {
                    Object.keys(cards).map((key)=>(
                        <CardEditForm 
                        card={cards[key]} 
                        key={key} 
                        onDelete={onDelete}
                        onEdit = {onEdit}
                        FileInput ={FileInput}
                        />
                    ))}
                <CardAddForm  onAdd={onAdd} FileInput={FileInput}/>
            </div>
        </div>
    )
}

export default CardMaker;