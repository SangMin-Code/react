import React from 'react';
import styles from './records.module.css';
import Record from '../record/Record';

const Records = ({records,onTagClick}) => {

    return(
        <section className = {styles.container}>
            {records.map((record) => <Record record = {record} onTagClick={onTagClick} key = {record.id}/>)}
        </section>
    )
};

export default Records;