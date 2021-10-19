import React, { useRef } from 'react';
import styles from './videoHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const VideoHeader = ({onSearch,onLogoClick}) => {

    const searchRef = useRef()   


    const logoClick = ()=>{
        onLogoClick()
        searchRef.current.value = ''
    }

    // Enter, searchBtn -> onSearch
    const search = ()=>{
        const query = searchRef.current.value
        onSearch(query)
    }

    const onKeyPress = (e)=>{
        if(e.key === 'Enter'){
            search()
        }
    }

    const onClick = (e)=>{
        search()
    }

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer} onClick = {logoClick}>
                <FontAwesomeIcon icon={faYoutube} className={styles.logoIcon} />
                <span className={styles.logoName}>Youtube</span>
            </div>
            <input ref={searchRef} type="search" className={styles.searchInput} onKeyPress={onKeyPress}/>
            <FontAwesomeIcon icon={faSearch} className={styles.searchBtn} onClick = {onClick}/>
        </header>
        )

};
            
    

export default VideoHeader;