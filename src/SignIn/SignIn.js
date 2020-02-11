import React from 'react';
import styles from './SignIn.module.css'

export default class SignIn extends React.Component { 

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.history.push('/home')
    }

    
    render() {
        return (
            <React.Fragment>
                    <div className={styles["sign-in-wrapper"]}>
                        <form onSubmit={this.onSubmitHandler}>
                            <fieldset>
                                <legend>Sign-In</legend>
        
                                <label htmlFor="username">
                                    Username: 
                                    <input type="text" id="username" />
                                </label> 
        
                                <label htmlFor="password">
                                    Password:
                                    <input type="password" id="password" />
                                </label> 
        
                                <div className={styles["btns-div"]}>
                                    <button className={styles["sign-in-btn"]} type="submit">Sign In</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                
            </React.Fragment>
        );
    }
}
