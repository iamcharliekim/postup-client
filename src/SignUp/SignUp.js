import React from 'react';
import styles from './SignUp.module.css'

export default class SignUp extends React.Component {

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.history.push('/sign-in')
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitHandler}>
                    <fieldset>
                        {/* <legend>Sign-Up</legend> */}

                        <label htmlFor="firstname">
                            First Name: 
                            <input type="text" id="firstname" />
                        </label> 

                        <label htmlFor="lastname">
                            Last Name: 
                            <input type="text" id="lastname" />
                        </label> 

                        <label htmlFor="email">
                            Email: 
                            <input type="email" id="email" />
                        </label> 

                        <label htmlFor="username">
                            Username: 
                            <input type="text" id="username" />
                        </label> 

                        <label htmlFor="password">
                            Password:
                            <input type="password" id="password" />
                        </label> 

                        <div className={styles["btns-div"]}>
                            <button className={styles["sign-up-btn"]}>Sign Up</button>
                        </div>
                    </fieldset>
                </form>            
                </React.Fragment>
        );
    }
}
