import React from 'react';
import styles from './Home.module.css'
import Search from '../Search/Search';
import GamesListItem from '../GamesListItem/GamesListItem';

export default class Home extends React.Component {

    render() {
        return (
                <React.Fragment>
                            <Search/>
                            <div className={styles["games-list"]}>
                                {this.props.games.map((game, i) => {
                                    return  <GamesListItem 
                                            key={i} 
                                            game={game}
                                            selectedGame={[game]}
                                            pathname={this.props.location.pathname}
                                />
                                })}
                            </div>
                </React.Fragment>
        );
    }
}

