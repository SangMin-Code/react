import {React,useRef} from 'react';
import styles from './addForm.module.css';
import Button from '../Button/Button';

const AddForm = ({createRecord}) =>{
    const titleRef = useRef();
    const tagsRef = useRef();
    const commentRef = useRef();
    const addressRef = useRef();
    const formRef = useRef(); 
    
    const onSubmit = (event)=>{
        event.preventDefault();
        
        const record = {
                id:Date.now(),
                title:titleRef.current.value||'',
                tags:convertTags(tagsRef.current.value)||'',
                comment:commentRef.current.value||'',
                address:addressRef.current.value||'',
        }
        // formRef.current.reset();
        createRecord(record)
    }
    
        return(
        <form ref={formRef} className={styles.form}>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >제목</label> 
                    <input ref = {titleRef} type="text" name='title' />
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >태그</label> 
                    <input ref = {tagsRef} type="text" name='tags'/>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >내용</label> 
                    <textarea ref={commentRef} name='comment'></textarea>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >주소</label> 
                    <input ref = {addressRef} type="text" name="address"/>
            </div>
            <div className={styles.inputContainer}>
                    <label className={styles.label} >thumbnail</label> 
                    <input type="file" name='thumbnail'/>
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