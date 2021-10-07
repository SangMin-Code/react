import styles from '../../css/search_header/searchHeader.module.css'

import React, { useRef } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';



const SearchHeader = ({onSearch}) => {
    
    const inputRef = useRef()
    
    const handleSearch = ()=>{
        const query = inputRef.current.value
        onSearch(query)
    }
    
    const onKeyPress= (e)=>{
        if(e.key === "Enter"){
            handleSearch()
        }
    }

    const onClick = (e)=>{
        handleSearch()
    }

    return (
        <header className={styles.searchbar}>
            <div className={styles.logobox}>
                <FontAwesomeIcon icon={faYoutube} className={styles.logoIcon} />
                <div className={styles.logoTitle}>Youtube</div>
            </div>
            <input ref={inputRef} 
                    type="search"
                    placeholder='Searh...'
                    className={styles.searchInput} onKeyPress={onKeyPress}/>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} onClick={onClick}/>
        </header>
    )
};

export default SearchHeader;