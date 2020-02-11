import React from 'react';
import styles from'./Search.module.css'

export default class Search extends React.Component {

    render() {
        return (
            <React.Fragment>
            <div className={styles["search-games-wrapper"]}>
                    <input 
                        type="text" 
                        placeholder="Search for games" 
                        />  
            </div>      
            </React.Fragment>
        );
    }
}
