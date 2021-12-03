import React from 'react';
import styles from './picturesInput.module.css';

const PicturesInput = ({imageUploader,onFileChange}) => {

    const onChange = async (event)=>{
        const uploaded =  await imageUploader.uploadfiles(event.target.files)

        console.log(uploaded)

        // onFileChange({
            // name:uploaded.original_filename,
            // url:uploaded.url,
        //   })
        // setFileURL(uploaded.url)
    
    }

    return(
        <input 
            type="file" 
            accept='image/*'
            name="file" 
            multiple
            onChange ={onChange} />
    )
}

export default PicturesInput;