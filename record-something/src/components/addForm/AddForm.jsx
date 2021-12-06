import {React,useRef, useState} from 'react';
import styles from './addForm.module.css';
import Button from '../Button/Button';

const AddForm = ({createRecord,ThumbnailFileInput,PicturesFileInput}) =>{
    const titleRef = useRef();
    const tagsRef = useRef();
    const commentRef = useRef();
    const addressRef = useRef();
    const formRef = useRef(); 
    const [file, setFile] = useState({fileName:null, fileURL:null})
    const [pictures, setPictures] = useState([])

    const onSubmit = (event)=>{
        event.preventDefault();
        
        const record = {
                id:Date.now(),
                title:titleRef.current.value||'',
                tags:convertTags(tagsRef.current.value)||'',
                comment:commentRef.current.value||'',
                address:addressRef.current.value||'',
                fileName:file.fileName ||'',
                fileURL:file.fileURL||'',
                pictures:pictures||'',
        }
        // formRef.current.reset();
        // setFile({fileName:null,fileURL:null})
        createRecord(record)
    }

    const onFileChange =(file)=>{
        setFile({
            fileName:file.name,
            fileURL:file.url
        })
    }

    const onPicturesChange = (files)=>{
            setPictures(files)
    }


    
        return(
        <form ref={formRef} className={styles.form}>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >제목</label> 
                    <input ref = {titleRef} className={styles.input}  type="text" name='title' />
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >태그</label> 
                    <input ref = {tagsRef} className={styles.input} type="text" name='tags'/>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >내용</label> 
                    <textarea ref={commentRef}  name='comment'></textarea>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >주소</label> 
                    <input ref = {addressRef} className={styles.input} type="text" name="address"/>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >썸네일</label> 
                    <ThumbnailFileInput name={file.fileName} onFileChange ={onFileChange} />

            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >사진</label> 
                    <PicturesFileInput onPicturesChange={onPicturesChange}/>
            </div>
            <Button name={'Save'} onBtn={onSubmit} />
        </form>

    )

};

function convertTags (tags){
        if(tags.indexOf('#') === -1){
                return null
        }
        const tagList = tags.split('#')
        const convert = tagList.filter((tag)=> tag!=='' ).map((tag)=>({tag}))
        return JSON.stringify(convert)
}

export default AddForm;