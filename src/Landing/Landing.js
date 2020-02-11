import React from 'react';
import styles from './Landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faBasketballBall, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SignUp from '../SignUp/SignUp'

export default class Landing extends React.Component {

    render() {
        
        return (
            <React.Fragment>
                <main role="main" className={styles["landing-wrapper"]}>
                    <section className={styles["section-1"]}>

                        <div className={styles["section-1-hero-div"]}>
                           <div className={styles["section-1-hero-text"]}>
                               <h1>WHO'S GOT NEXT?</h1>
                               <span>The Post-Up App makes it easier than ever to find and run pickup basketball games in your area</span>

                               <button>SIGN-UP NOW</button>
                            </div>
                        </div>
                    </section>

                    <section className={styles["section-2"]}>     
                            <h1>Post-Up Allows You To...</h1>
                            <div className={styles["cards-wrapper"]}>
                                <div className={styles["section-2-card"]}>
                                    <div className={styles["players-icon"]}>
                                        <FontAwesomeIcon icon={faUser} className={styles["icon"]}/>
                                    </div>
                                    <div className={styles["card-text-wrapper"]}>
                                        <p className={styles["card-text-main"]}>
                                            Find Players 
                                        </p>
                                    </div>
                                    <p className={styles["card-text-sub"]}>
                                        Search for players nearby and invite them to games
                                    </p>
                                </div>
                                
                                <div className={styles["section-2-card"]}>
                                    <div className={styles["players-icon"]}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles["ball-icon"]}/>
                                        <FontAwesomeIcon icon={faBasketballBall} className={styles["ball-pin"]}/>

                                    </div>
                                    <div className={styles["card-text-wrapper"]}>

                                        <p className={styles["card-text-main"]}>
                                            Find Games 
                                        </p>
                                    </div>
                                    <p className={styles["card-text-sub"]}>
                                        Post-Up will automatically search for games near your location 
                                    </p>

                                </div>      

                                <div className={styles["section-2-card"]}>

                                    <div className={styles["players-icon"]}>
                                        <FontAwesomeIcon icon={faBasketballBall} className={styles["ball-icon"]}/>
                                    </div>

                                    <div className={styles["card-text-wrapper"]}>
                                        <p className={styles["card-text-main"]}>
                                            Create Games 
                                        </p>
                                    </div>
                                    <p className={styles["card-text-sub"]}>
                                        Create your own games and invite other players in your area 
                                    </p>
                                </div>
                            </div>
                    
                        
                    </section>

            

                   <section className={styles["section-4"]}>
                    <h1>SIGN-UP TODAY</h1>

                    <SignUp/>

                   </section>
                    
                </main>

            </React.Fragment>
        );
    }
}