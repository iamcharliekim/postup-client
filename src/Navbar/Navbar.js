import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom'
import TokenService from '../Services/TokenService';
import { withRouter } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBasketballBall, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {
    onSignOut = (e) => {
        TokenService.clearAuthToken()
    }

    render() {
        let navLinks = [
                <Link to="/home" key="0" className={styles["nav-link"]}>Home</Link>, 
                <Link to="/create-games" key="3" className={styles["nav-link"]}>+ Create</Link>, 
                <Link to="/my-games" key="4" className={styles["nav-link"]}>My Games</Link>, 
            ] 
        

        return (
                <nav className={styles["navbar"]}>
                    <div className={styles["inner-nav"]}>

                        <Link to="/landing" className={styles["logo"]} onClick={this.onClickLogo}>
                            <div className={styles["players-icon"]}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles["logo-pin"]}/>
                                <FontAwesomeIcon icon={faBasketballBall} className={styles["logo-ball-in-pin"]}/>
                            </div>

                            <h1>Post-Up</h1>
                        </Link>

                        <div className={ TokenService.hasAuthToken() ? styles["nav-links-wrapper"] : styles["no-auth-nav-links-wrapper"] } >
                            {
                                navLinks.map(link => link)
                            }

                        </div>

                        <div className={styles["hamburger"]} onClick={this.props.onOpenNav}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default withRouter(Navbar)