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
            user: {},
        };
        // console.log("Result::::" + this.state.user);
        this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this)
    }

    hydrateStateWithLocalStorage() {
        // for all items in state
        console.log(JSON.parse(localStorage.getItem('user')));
        this.setState({
            user: JSON.parse(localStorage.getItem('user')),
        })
        // console.log("Result::::" + this.state.user);

    }

    componentDidMount() {
       this.hydrateStateWithLocalStorage()
        console.log("Result::::" + this.state.user.email);
    }


    render() {
        return (

            <div >
                <h1> HomePage1234566 welcome to login user:::</ h1 >
            </div>

        )
            ;
    }
}

export default Home;