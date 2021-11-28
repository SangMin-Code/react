import React from 'react';
import styles from './record.module.css'
const Record = ({record,onTagClick}) => {

    const {title, comment, thumnail, tags} = record

    const onClick = (tag)=>{
        onTagClick(tag)
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={thumnail} className = {styles.thumnail} alt="thumnail" />
            </div>
            <div className={styles.description}>
                <h1 className={styles.title}>{title}</h1>
                {/* <p className={styles.comment}>{comment}</p> */}
                <div className={styles.tags}>
                    {tags.map((tag,index)=><div className={styles.tag} key={index} onClick={(event) => onClick(tag)}>{tag}</div>)}
                </div>
            </div>
        </div>
    )

};

export default Record;