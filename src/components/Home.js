import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import React, {Component} from 'react';
import LandingPage from './Landing';
import SignUpPage from './SignUp';

import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import AccountPage from './Account';
import Navigation from './Navigation';

import * as routes from '../constants/routes';
import {firebase} from '../firebase';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState(() => ({ authUser }))
                : this.setState(() => ({ authUser: null }));

        });
    }


    render() {
        return (

            <div >
                <h1> HomePage1234566 welcome to login user::: </ h1 >
            </div>

        )
            ;
    }
}

export default Home;