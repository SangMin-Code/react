import React, { useRef } from 'react';
import styles from './cardEditForm.module.css';
import Button from '../button/Button';
import FileInputButton from '../fileInputButton/FileInputButton';

const CardEditForm = ({card,onDelete,onEdit}) => {
    const { name,company,theme,job,email,comment,fileName,fileURL} = card 
    
    const nameRef = useRef()
    const companyRef = useRef()
    const themeRef = useRef()
    const jobRef = useRef()
    const emailRef = useRef()
    const commentRef = useRef()
    
    
    const onClick = (e)=>{
        e.preventDefault()
        onDelete(card)
    }

    const editHandler = (e)=>{
        const {name,value} = e.target
        card[name] = value 
        onEdit(card)
    }

    return (
        <form className={styles.form}>
            <input ref={nameRef} onChange={editHandler} className={styles.name} type="text" name="name" defaultValue={name} />
            <input ref={companyRef} onChange={editHandler} className={styles.company} type="text" name="company" defaultValue={company}/>
            <select ref={themeRef} onChange={editHandler} className={styles.theme} name="theme" defaultValue={theme}>
                <option value="Dark">Dark</option>
                <option value="Light">Light</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input ref={jobRef} onChange={editHandler} className={styles.job} type="text" name="job" defaultValue={job}/>
            <input ref={emailRef} onChange={editHandler} className={styles.email} type="text" name="email" defaultValue={email}/>
            <textarea ref={commentRef} onChange={editHandler} className={styles.comment} name="comment" defaultValue={comment}></textarea>
            <div className={styles.fileInputContainer}>
                <FileInputButton/>
            </div>
            <Button name='Delete' onClick = {onClick}/>
        </form>
    )
};

export default CardEditForm;