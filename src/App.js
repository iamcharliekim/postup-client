import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import { Link, Route } from 'react-router-dom'
import SignUp from './SignUp/SignUp';
import Landing from './Landing/Landing';
import SignIn from './SignIn/SignIn';
import TokenService from './Services/TokenService';
import Home from './Home/Home'
import CreateGames from './CreateGames/CreateGames';
import GamesListItem from './GamesListItem/GamesListItem';
import styles from './App.module.css'
import Footer from './Footer/Footer'


export default class App extends React.Component {

  state = {
    games: [
      {id: 19,
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
      },
      {
        id: 21,
        created_by: 2,
        game_name: "Valentine's Day Game",
        game_date: "2020-02-05T04:00:00.987Z",
        game_time: "18:00:00",
        game_street: "Highland Park",
        game_city: " Los Angeles",
        game_state: " CA",
        game_zip: "90042",
        game_lat: "34.1154946",
        game_lng: "-118.1843898",
      },
      {
        id: 23,
        created_by: 2,
        game_name: "Twinbrook Community Game",
        game_date: "2020-08-17T04:00:00.000Z",
        game_time: "20:00:00",
        game_street: "Twinbrook Community Recreational Center",
        game_city: " Twinbrook Parkway",
        game_state: " Rockville",
        game_zip: "20851",
        game_lat: "39.0709478",
        game_lng: "-77.1149037"
      }
    ],
    comments: [
      {
        id: 1,
        user_id: 1,
        user_name: "cwkim3",
        comment: "njkl",
        game_id: null,
        date_created: "2020-02-01T03:57:44.000Z",
        date_modified: null,
      },
      {
        id: 5,
        user_id: 3,
        user_name: "jHoward22",
        comment: "you're all going down....",
        game_id: null,
        date_created: "2020-02-04T03:46:04.000Z",
      },
      {
        id: 7,
        user_id: 4,
        user_name: "randomDude12",
        comment: "this is kinda random...but i'll be there...",
        game_id: null,
        date_created: "2020-02-04T04:00:24.000Z",
        date_modified: null
      }


    ],
    searchString: '',
    openNav: false,
    user_id: 1
  }

  onOpenNav = () => {
    this.setState({openNav: !this.state.openNav})
  }

  
  signout = () => {
    TokenService.clearAuthToken()
    this.onOpenNav()
  }

  render(){
    let navLinks

        navLinks = [
          <Link to="/home" key="0" className={styles["nav-link"]} onClick={this.onOpenNav} >Home</Link>, 
          <Link to="/create-games" key="3" className={styles["nav-link"]} onClick={this.onOpenNav}>+ Create</Link>, 
          <Link to="/my-games" key="4" className={styles["nav-link"]} onClick={this.onOpenNav}>My Games</Link>, 
          <Link to="/sign-in" key="5" className={styles["nav-link"]} onClick={this.signout}>Sign-Out</Link> ] 
    
    return (
      <BrowserRouter>
          <main className={styles["App"]}>
            <Navbar loggedIn={TokenService.hasAuthToken()} onOpenNav={this.onOpenNav}/>

        {
            this.state.openNav ?
            
            <div className={styles["nav-links-wrapper"]}>
            { navLinks.map(link => {
                return link
            }) }
            </div> :
            null

        }

      
            { TokenService.hasAuthToken() ? <Redirect to='/home'/> : <Redirect to='/sign-in'/> }
            
            <Route path="/sign-up" exact component={SignUp}/>
            <Route path="/sign-in" exact component={SignIn}/>
            <Route path="/home" exact render={(props)=> <Home {...props} games={this.state.games}/>}/>
            <Route path="/my-games" exact render={(props)=> <Home {...props} games={this.state.games}/>}/>
            <Route path="/edit-games/:game_id" exact component={CreateGames}/>
            <Route path="/landing" exact component={Landing}/>
            <Route path="/create-games" exact component={CreateGames}/>
            <Route path="/games/:game_id" exact render={(props)=> <GamesListItem {...props} comments={this.state.comments}/>}/>
      
            { !this.state.openNav ? <Footer/> : null  }  
          </main>
      </BrowserRouter>
    );

  }

}

