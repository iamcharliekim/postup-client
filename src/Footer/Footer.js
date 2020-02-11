import React from 'react';
import styles from './Footer.module.css'

export default function Footer(props) {
    return (
        <React.Fragment>
            <footer>
                <div className={styles["inner-footer"]}>
                    <div className={styles["footer-links"]}>
                        Created by Charlie Kim
                        </div>

                    <div className={styles["footer-links"]}>
                        <span>
                            <img src={require('../githubIcon.png')} alt="github"/>
                        </span>                    
                        <span>
                            <img src={require('../linkedInIcon.png')} alt="linkedin"/>
                        </span>
                        
                    </div>

                    <div className={styles["footer-copyright"]}>
                        <span>Copyright © 2020 All Rights Reserved</span>
                    </div>    

                </div>
            </footer>
            
        </React.Fragment>
    );
}
