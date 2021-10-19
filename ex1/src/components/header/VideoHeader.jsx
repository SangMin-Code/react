import React, { useRef } from 'react';
import styles from './videoHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const VideoHeader = ({onSearch}) => {

    const searchRef = useRef()   

    // Enter, searchBtn -> onSearch
    
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <FontAwesomeIcon icon={faYoutube} className={styles.logoIcon} />
                <span className={styles.logoName}>Youtube</span>
            </div>
            <input ref={searchRef} type="search" className={styles.searchInput} />
            <FontAwesomeIcon icon={faSearch} className={styles.searchBtn} />
        </header>
        )

};
            
    

export default VideoHeader;