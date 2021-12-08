import React,{useState,useRef} from 'react';
import styles from './picturesInput.module.css';



const PicturesInput = ({imageUploader,onPicturesChange,pictures}) => {


    const [loading, setLoading] = useState(false);
    const [fileURLs, setFileURLs] =  useState(pictures ? pictures : []);
    const inputRef = useRef();

    const onChange = async (event)=>{
        setLoading(true);
        const uploaded =  await imageUploader.uploadfiles(event.target.files)
        const uploadedURL = uploaded.map((file)=>({url:file.url}))
        setLoading(false);
        setFileURLs(uploaded)
        onPicturesChange(uploadedURL)
    }


    return(
        <div className={styles.container}>
            {loading && <div className={styles.loading}></div>}   
            {!loading &&
                (<>
                    <input 
                    ref = {inputRef}
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
                                    alt="pictures" />
                            </div>
                        ))
                    )}
                </div>
                </>)
            }
        </div>
    )
}

export default PicturesInput;