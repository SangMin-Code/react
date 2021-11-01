import React from 'react';
import styles from './cardInputForm.module.css';
import Button from '../button/Button';
import FileInputButton from '../fileInputButton/FileInputButton';

const CardInputForm = ({card}) => {

    const {name,company,theme,job,email,comment,fileName,fileURL } = card 
    const onClick = ()=>{} 
    return (
        <form className={styles.form}>
            <input className={styles.name} type="text" name="name" defaultValue={name} />
            <input className={styles.company} type="text" name="company" defaultValue={company}/>
            <select className={styles.theme} name="theme" defaultValue={theme}>
                <option value="Dark">Dark</option>
                <option value="Light">Light</option>
                <option value="Colorful">Colorful</option>
            </select>
            <input className={styles.job} type="text" name="job" defaultValue={job}/>
            <input className={styles.email} type="text" name="email" defaultValue={email}/>
            <textarea className={styles.comment} name="comment" defaultValue={comment}></textarea>
            <div className={styles.fileInputContainer}>
                <FileInputButton/>
            </div>
            <Button name="Delete" onClick = {onClick}/>
        </form>
    )
};

export default CardInputForm;