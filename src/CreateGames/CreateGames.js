import React from 'react';
import styles from './CreateGames.module.css'
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import GoogleMapsComponent from '../GoogleMapsComponent/GoogleMapsComponent';


export default class CreateGames extends React.Component {

    state = {
        mapsApiKey: 'AIzaSyDOvfuKaaRuYocVQWNl9ICi3wadIephDyc',  // MOVE TO .env

        edit_game: false,
        error: null,
        zoom: 8,
    }

    render() {
  
        return (
                <React.Fragment>
                        <div className={styles["create-game-wrapper"]}>
                            <form>
                                <div className={styles["form-row"]}>
                                    <label htmlFor="game_name">Name:</label>
                                    <input type="text" placeholder="Give your game a name" id="game_name"/>
                                </div>

                                <div className={styles["form-row"]}>
                                    <label htmlFor="date-picker">Date/Time</label>
                                        <DateTimePicker 
                                        />
                                </div>

                                <div className={styles["map-row"]}>
                                    <div className={styles["map"]}>
                                        <div className={styles["map-search"]}>
                                           <input type="text" style={{ width: '100%'}}></input>
                                        </div>

                                        <GoogleMapsComponent
                                            loadingElement={<div style={{ height: '100%'}}/>}
                                            containerElement={<div style={{ height: '100%'}}/>}
                                            mapElement={<div style={{height: '100%'}}/>}
                                            lat={23.432}
                                            lng={225.2}
                                            zoom={12}                          
                                        /> 
                                    </div>
                                </div>
             
                                <div className={styles["address-manual"]}>
                                    <div className={styles["form-row"]}>
                                        <label htmlFor="street">Street:</label>
                                        <input type="text" id="street" />
                                    </div>                      
                                    
                                    <div className={styles["form-row"]}>
                                        <label htmlFor="city">City:</label>
                                        <input type="text" id="city"/>
                                    </div>

                                    <div className={styles["form-row"]}>
                                        <label htmlFor="state">State:</label>
                                        <input type="text" id="state" />
                                    </div>                  

                                    <div className={styles["form-row"]}>
                                        <label htmlFor="zip">Zip-code:</label>
                                        <input type="text" id="zip"/>
                                    </div>
                                </div>

                                <div className={styles["btns-panel"]}>
                                    <button type="submit">Submit</button>
                                </div> 
                            </form>    
                        </div>       

                     
                </React.Fragment>
        );
    }
}

