import React from 'react';
import styles from './records.module.css';
import Record from '../record/Record';

const Records = ({records}) => {

    return(
        <section className = {styles.container}>
            {records.map((record) => <Record record = {record} key = {record.id}/>)}
        </section>
    )
};

export default Records;