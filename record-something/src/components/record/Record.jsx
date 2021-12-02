import React from 'react';
import styles from './record.module.css'
const Record = ({record,onTagClick}) => {

    const {title, comment, fileURL, tags} = record

    const onClick = (event)=>{
        onTagClick(event.target.innerText)
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={fileURL} className = {styles.thumnail} alt="thumnail" />
            </div>
            <div className={styles.description}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.comment}>{comment}</p>
                <div className={styles.tags}>
                    {tags && (Object.keys(tags).map((key) =>
                     (<div 
                            className={styles.tag} 
                            key={key} 
                            onClick={onClick}
                        >
                        {tags[key].tag}
                    </div>))
                    )}
                </div>
            </div>
        </div>
    )

};

export default Record;