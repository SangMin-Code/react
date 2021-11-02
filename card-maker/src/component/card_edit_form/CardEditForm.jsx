import React, { useRef } from 'react';
import Button from '../button/Button';
import ImageFileInput from '../image_file_input/ImageFileInput';
import styles from './cardEditForm.module.css';


const CardEditForm = ({card,updateCard,deleteCard}) => {
    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL} = card
    
    const nameRef = useRef()
    const companyRef = useRef()
    const titleRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const themeRef = useRef()

    
    const onChange = (event)=>{
        if(event.currentTarget == null){
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]:event.currentTarget.value
        })
    }
    const onSubmit = (event)=>{
        deleteCard(card)
    }

    return (
        <form className={styles.form}>
            <input 
                className={styles.input}
                type="text" 
                ref={nameRef} 
                name="name" 
                value={name}
                onChange ={onChange}
             />
            <input 
                className={styles.input} 
                type="text" 
                ref={companyRef} 
                name="company" 
                value={company}
                onChange ={onChange}
            />
            <select 
                className={styles.select} 
                ref={themeRef} 
                name="theme" 
                select ={theme}
                onChange ={onChange}
            >
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input 
                className={styles.input} 
                type="text" 
                ref={titleRef} 
                name="title" 
                value={title}
                onChange ={onChange} 
            />
            <input 
                className={styles.input} 
                type="text" 
                ref={emailRef} 
                name="email" 
                value={email}
                onChange ={onChange} 
            />
            <textarea 
                className={styles.textarea} 
                ref={messageRef} 
                name="message"
                onChange ={onChange}
            >
                {message}
            </textarea>
            <div className={styles.fileInput}>
                <ImageFileInput/>
            </div>
                <Button name="Delete" onClick ={onSubmit}/>
        </form>
    )
};

export default CardEditForm;