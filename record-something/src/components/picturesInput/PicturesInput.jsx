import React,{useState,useRef} from 'react';
import styles from './picturesInput.module.css';



const PicturesInput = ({imageUploader,onFileChange}) => {

    const [loading, setLoading] = useState(false);
    const [fileURLs, setFileURLs] =  useState([]);
    const inputRef = useRef();

    const onChange = async (event)=>{
        const uploaded =  await imageUploader.uploadfiles(event.target.files)
        setFileURLs(uploaded)

        uploaded.map((file)=>console.log(file.url))
        // onFileChange({
        //     name:uploaded.original_filename,
    }

    return(
        <div className={styles.container}>
            <input 
                type="file" 
                accept='image/*'
                name="file" 
                multiple
                onChange ={onChange} />
            <div className= {styles.previewContainer}>
                {fileURLs && (
                    fileURLs.map((file,index)=>(
                        <div 
                            className={styles.imgContainer}
                            key = {index}>
                            <img
                                className ={styles.img} 
                                src={file.url} 
                                alt="picture" />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default PicturesInput;