import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import React, {Component} from 'react';
import LandingPage from './Landing';
import SignUpPage, {SignUpForm} from './SignUp';

import SignInPage, {SignInForm} from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import TopicHome from './TopicHome';
import AccountPage from './Account';
import Navigation from './Navigation';

import * as routes from '../constants/routes';
import {firebase} from '../firebase';
import AddUser from './AddUser';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState(() => ({authUser}))
                : this.setState(() => ({authUser: null}));

        });
    }


    render() {
        return (
            <Router>
                <div>
                    <Navigation authUser={this.state.authUser}/>

                    <Route
                        exact path={routes.LANDING}
                        component={() => <LandingPage/>}
                    />
                    <Route
                        exact path={routes.SIGN_UP}
                        component={() => <SignUpPage/>}
                    />
                    <Route
                        exact path={routes.SIGN_IN}
                        component={() => <SignInPage/>}
                    />
                    <Route
                        exact path={routes.PASSWORD_FORGET}
                        component={() => <PasswordForgetPage/>}
                    />
                    <Route
                        exact path={routes.HOME}
                        component={() => <HomePage authUser={this.state.authUser}/>}
                    />
                    <Route
                        exact path={routes.TOPIC}
                        component={() => <TopicHome authUser={this.state.authUser}/>}
                    />
                    <Route
                        exact path={routes.ACCOUNT}
                        component={() => <AccountPage/>}
                    />
                    <Route
                        exact path={routes.ADD_USER}
                        component={() => <AddUser/>}
                    />
                </div>
            </Router>
        );
    }
}

export default App;