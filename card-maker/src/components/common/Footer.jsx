import React from 'react';
import { memo } from 'react';
import styles from './footer.module.css'


const Footer = memo((props) => {
    return (
        <div className={styles.footer}>
            <h1 className={styles.comment}>
                Code your dream
            </h1>
        </div>
    );
});

export default Footer;