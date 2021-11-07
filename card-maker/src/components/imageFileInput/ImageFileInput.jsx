import { async } from '@firebase/util';
import React, { useRef } from 'react';
import styles from './imageFileInput.module.css';


const ImageFileInput = ({name,fileUploader,onFileChange}) => {

    const inputRef = useRef();

    const onChange = async (event)=>{
        const uploaded = await fileUploader.upload(event.target.files[0])
        onFileChange({
            name:uploaded.original_filename,
            url:uploaded.url
        })
    }

    const onButtonClick = (event)=>{
        event.preventDefault();
        inputRef.current.click();
    }
    return (

        <div className={styles.container}>
            <input 
                type="file"
                ref = {inputRef}
                className = {styles.input}
                accept = 'image/*'
                name = 'file'
                onChange = {onChange}
                />
            <button
                className = {styles.button} onClick={onButtonClick}
            >
                {name || 'No File'}
            </button>
        </div>
    )




}

export default ImageFileInput;