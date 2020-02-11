import React from 'react';
import styles from './GamesListItem.module.css'
import GoogleMapsComponent from '../GoogleMapsComponent/GoogleMapsComponent'
import moment from 'moment';
import { withRouter } from 'react-router-dom'
import CommentsBoard from '../CommentsBoard/CommentsBoard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faCalendarAlt, faClock, faUserCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons'

class GamesListItem extends React.Component {
    state = {
        gamesPage: this.props.location.state,
        game: {
            id: 19,
            created_by: 2,
            game_name: "Dogwood Park",
            game_date: "2020-02-05T04:00:00.691Z",
            game_time: "20:00:00",
            game_street: "Dogwood Park",
            game_city: " Monroe Street",
            game_state: " Rockville",
            game_zip: "20852",
            game_lat: "39.0712654",
            game_lng: "-77.1527529",
          }
    }

    openGame = () => {
        if (!this.state.gamesPage){
            this.props.history.push({
                pathname: `/games/${this.state.game.id}`,
                state: {
                    gamesList: this.state.game,
                    lat: 232.23323,
                    lng: 22.323,
                    zoom: 10
                }
            })
        }
    }


    render() {

        let dateTimeParsed = moment(this.state.game.game_date).format("MMMM Do YYYY, h:mm A").split(',')
        let date = dateTimeParsed[0]
        let time = dateTimeParsed[1]

        let gameStreet = this.state.game.game_street
        let gameCityStateZip = `${this.state.game.game_city} ${this.state.game.game_state} ${this.state.game.game_zip}`
        
        return (
            <React.Fragment>
                <div className={!this.state.gamesPage ? styles["games-search-result"] : styles["games-page"]} onClick={this.openGame}> 
  
                        <header>
                            <h1>{this.state.game.game_name}</h1>
                        </header>
                    
                        <div className={styles["game-date"]}>
                            <div className={styles["icon-wrapper"]}>
                                <FontAwesomeIcon icon={faCalendarAlt} className={styles["icon"]}/>
                            </div>
                            <span className={styles["text-wrapper"]}>{date}</span>
                        </div>
                    
                        <div className={styles["game-time"]}>
                            <div className={styles["icon-wrapper"]}>
                                <FontAwesomeIcon icon={faClock} className={styles["icon"]}/>
                            </div>
                            <span className={styles["text-wrapper"]}>{time}</span>
                        </div>

                        {
                        
                        this.state.gamesPage ? 
                        
                        <div className={styles["google-maps-wrapper"]} >
                            <GoogleMapsComponent
                                loadingElement={<div style={{ height: '100%'}}/>}
                                containerElement={<div style={{ height: '200px'}}/>}
                                mapElement={<div style={{height: '100%'}}/>}
                                lat={+this.state.game.game_lat}
                                lng={+this.state.game.game_lng}
                                zoom={10}
                            />
                        </div> 

                        : null 
                        
                        }

                        <div className={styles["address"]}>
                            <div className={styles["icon-wrapper"]}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles["icon"]}/>
                            </div>

                            <a href={`https://www.google.com/maps`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="address-link"
                                onClick={(e)=> e.stopPropagation()}
                                >
                                <span className="game-street">{gameStreet}</span>
                                <span className="game-city-state-zip">{gameCityStateZip}</span>
                            </a>
                        </div>

                        <div className={this.state.gamesPage ? styles["rsvp-link"] : styles["rsvp"]} >
                            <div className={styles["icon-wrapper"]}>

                            {
                                !this.state.gamesPage ?
                                <FontAwesomeIcon icon={faUserCircle} className={styles["icon"]}/>
                                : 
                                <FontAwesomeIcon icon={faCaretDown} className={styles["icon"]}/>

                            }

                            </div>
                            <span className="text-wrapper">
                                2 players attending
                            </span>
                        </div>

                        <div className={this.state.showRoster && this.state.gamesPage ? styles["showRoster"] : styles["hideRoster"] }>
                        </div>

                        <div className={styles["rsvp-attending"]}>
                            <button> Check-in</button>
                            <button> Check-out</button>
                        </div>


                        { this.state.gamesPage ?  <CommentsBoard comments={this.props.comments} /> : null }
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(GamesListItem)