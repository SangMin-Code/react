import {React,useRef, useState} from 'react';
import styles from './editForm.module.css';
import Button from '../Button/Button';

const EditForm = ({record,editRecord,onDelete,ThumbnailFileInput,PicturesFileInput}) => {


    const {title, tags, comment, id,fileName,fileURL} =record
    const titleRef = useRef();
    const tagsRef = useRef();
    const commentRef = useRef();
    const addressRef = useRef();
    const formRef = useRef(); 
    const [file, setFile] = useState({fileName:fileName, fileURL:fileURL})
    const [pictures, setPictures] = useState(record.pictures ? record.pictures : [])

    const onSave = (event)=>{
        event.preventDefault();
        
        const record = {
                id:id,
                title:titleRef.current.value||'',
                tags:convertTags(tagsRef.current.value)||'',
                comment:commentRef.current.value||'',
                address:addressRef.current.value||'',
                fileName:file.fileName ||'',
                fileURL:file.fileURL||'',
                pictures:JSON.stringify(pictures)||'',
        }
        // formRef.current.reset();
        // setFile({fileName:null,fileURL:null})
        editRecord(record)
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

    const onRecordDelete = ()=>{
        onDelete(record)
    }


    
        return(
        <form ref={formRef} className={styles.form}>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >제목</label> 
                    <input ref = {titleRef} className={styles.input}  type="text" name='title' defaultValue={title} />
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >태그</label> 
                    <input ref = {tagsRef} className={styles.input} type="text" name='tags' defaultValue={ tags && (tags.reduce((tag,current)=>(tag+` #${current.tag}`),''))}/>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >내용</label> 
                    <textarea ref={commentRef}  name='comment' defaultValue={comment}></textarea>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >주소</label> 
                    <input ref = {addressRef} className={styles.input} type="text" name="address" defaultValue={comment}/>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >썸네일</label> 
                    <ThumbnailFileInput file={file} name={file.fileName} onFileChange ={onFileChange} />

            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >사진</label> 
                    <PicturesFileInput pictures={pictures} onPicturesChange={onPicturesChange}/>
            </div>
            <Button name={'Save'} onBtn={onSave} />
            <Button name={'Delete'} onBtn={onRecordDelete} />
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

export default EditForm