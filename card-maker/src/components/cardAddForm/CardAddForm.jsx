import React, { useRef } from 'react';
import styles from './cardAddForm.module.css';
import Button from '../button/Button';
import FileInputButton from '../fileInputButton/FileInputButton';

const CardAddForm = ({onAdd}) => {
    
    const nameRef = useRef()
    const companyRef = useRef()
    const themeRef = useRef()
    const jobRef = useRef()
    const emailRef = useRef()
    const commentRef = useRef()
    const formRef = useRef()


    const onClick = (e)=>{
        e.preventDefault()

        const newCard = {
            id:Date.now(),
            name:nameRef.current.value || '',
            company:companyRef.current.value || '',
            theme:themeRef.current.value || 'Dark',
            job:jobRef.current.value || '',
            email:emailRef.current.value || '',
            comment:commentRef.current.value || '',
            fileName:'',
            fileURL:'',
        }
        
        formRef.current.reset();

        onAdd(newCard)
    }

    return (
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.name} type="text" name="name" placeholder='' />
            <input ref={companyRef} className={styles.company} type="text" name="company" placeholder=''/>
            <select ref={themeRef} className={styles.theme} name="theme" placeholder=''>
                <option value="Dark">Dark</option>
                <option value="Light">Light</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input ref={jobRef} className={styles.job} type="text" name="job" placeholder=''/>
            <input ref={emailRef} className={styles.email} type="text" name="email" placeholder=''/>
            <textarea ref={commentRef} className={styles.comment} name="comment" placeholder=''></textarea>
            <div className={styles.fileInputContainer}>
                <FileInputButton/>
            </div>
            <Button name='Add' onClick = {onClick}/>
        </form>
    )
};

export default CardAddForm;