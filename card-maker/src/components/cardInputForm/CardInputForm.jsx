import React, { useRef } from 'react';
import styles from './cardInputForm.module.css';
import Button from '../button/Button';
import FileInputButton from '../fileInputButton/FileInputButton';

const CardInputForm = ({card,type,onBtn}) => {
    const { name,company,theme,job,email,comment,fileName,fileURL} = card 
    
    const nameRef = useRef()
    const companyRef = useRef()
    const themeRef = useRef()
    const jobRef = useRef()
    const emailRef = useRef()
    const commentRef = useRef()
    
    const onClick = (e)=>{
        e.preventDefault()
        const newCard = {
            name:nameRef.current.value,
            company:companyRef.current.value,
            theme:themeRef.current.value,
            job:jobRef.current.value,
            email:emailRef.current.value,
            comment:commentRef.current.value,
        }
        type==='read' ? onBtn(card) : onBtn(newCard)
    }

    const btnName = type ==='read' ? 'Delete' : 'Add'
    
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
            <Button name={btnName} onClick = {onClick}/>
        </form>
    )
};

export default CardInputForm;