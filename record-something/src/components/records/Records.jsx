import React from 'react';
import styles from './records.module.css';
import Record from '../record/Record';

const Records = ({records,onTagClick}) => {
    return(
        <section className = {styles.container}>
            {records && (Object.keys(records).map((key) =>
                                 (<Record 
                                        record = {records[key]} 
                                        onTagClick={onTagClick} 
                                        key = {key}/>))
            )}
        </section>
    )
};

export default Records;