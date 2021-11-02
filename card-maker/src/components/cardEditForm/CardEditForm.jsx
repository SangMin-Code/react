import React, { useRef } from 'react';
import styles from './cardEditForm.module.css';
import Button from '../button/Button';
import FileInputButton from '../fileInputButton/FileInputButton';

const CardEditForm = ({card,onDelete}) => {
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

    return (
        <form className={styles.form}>
            <input ref={nameRef} className={styles.name} type="text" name="name" defaultValue={name} />
            <input ref={companyRef} className={styles.company} type="text" name="company" defaultValue={company}/>
            <select ref={themeRef} className={styles.theme} name="theme" defaultValue={theme}>
                <option value="Dark">Dark</option>
                <option value="Light">Light</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input ref={jobRef} className={styles.job} type="text" name="job" defaultValue={job}/>
            <input ref={emailRef} className={styles.email} type="text" name="email" defaultValue={email}/>
            <textarea ref={commentRef} className={styles.comment} name="comment" defaultValue={comment}></textarea>
            <div className={styles.fileInputContainer}>
                <FileInputButton/>
            </div>
            <Button name='Delete' onClick = {onClick}/>
        </form>
    )
};

export default CardEditForm;