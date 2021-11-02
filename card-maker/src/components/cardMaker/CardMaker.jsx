import React from 'react';
import styles from './cardmaker.module.css'
import CardEditForm from '../cardEditForm/CardEditForm'
import CardAddForm from '../cardAddForm/CardAddForm';

const CardMaker = ({data,onAdd,onDelete,onEdit}) => {

    return (
        <div className={styles.cardMaker}>
            <h1 className={styles.title}>Card Maker</h1>
            <div className={styles.container}>
                {data.map((card)=>(
                    <CardEditForm 
                        card={card} 
                        key={card.id} 
                        onDelete={onDelete}
                        onEdit = {onEdit} />
                    ))}
                <CardAddForm  onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default CardMaker;