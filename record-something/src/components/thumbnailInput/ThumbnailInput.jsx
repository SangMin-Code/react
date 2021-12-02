import { async } from '@firebase/util';
import React, { useState,useRef } from 'react';
import styles from './thumbnailInput.module.css';

const ThumbnailInput = ({imageUploader,name,onFileChange}) => {

    const [loading, setLoading] = useState(false);
    const [fileURL, setFileURL] =  useState('default.png');
    const inputRef = useRef();
    const onButtonClick =(event)=>{
        event.preventDefault();
        inputRef.current.click();
    }
    
    const onChange = async (event)=>{
        setLoading(true);
        const uploaded =  await imageUploader.upload(event.target.files[0])
        setLoading(false);

        onFileChange({
            name:uploaded.original_filename,
            url:uploaded.url,
          })
        setFileURL(uploaded.url)
    
    }
    return (
        <div className={styles.container}>
            <input 
                ref={inputRef}
                className={styles.input}
                type="file"
                accept='image/*'
                name="file" 
                onChange ={onChange}
            />
            {!loading &&
                (
                    <>
                        <button 
                        className={`${styles.button}`}
                        onClick = {onButtonClick}>
                                {name||'No file'} 
                        </button>
                        <img src={fileURL} alt="thumbnail" className={styles.thumbnail} />
                    </>
                )
            }
            {loading && <div className={styles.loading}></div>}   
        </div>      
    )


};

export default ThumbnailInput;