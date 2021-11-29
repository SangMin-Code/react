import {React,useState,useCallback,useEffect,useRef} from 'react';
import styles from './addForm.module.css';
import Button from '../Button/Button';

const AddForm = (props) =>{
    return(
        <form className={styles.form}>
            <div className={styles.inputContainer}>
                    <label className={styles.label} for='title'>제목</label> 
                    <input type="text" name='title' />
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} for='tags'>태그</label> 
                    <input type="text" name='tags'/>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} for='comment'>내용</label> 
                    <textarea name='comment'></textarea>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} for='address'>주소</label> 
                    <input type="text" name="address"/>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} for='thumbnail'>thumbnail</label> 
                    <input type="file" name='thumbnail'/>
            </div>
            <Button name={'Save'}/>
        </form>

    )

};

export default AddForm;