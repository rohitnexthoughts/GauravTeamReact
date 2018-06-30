import React, {Component} from 'react';
import {auth,db} from '../firebase';

import {
    Link,
    withRouter,
} from 'react-router-dom';

import * as routes from '../constants/routes';

const SignUpPage = ({history}) =>
    <div>
        <SignUpForm history={history}/>
    </div>


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState(() => ({...INITIAL_STATE}));
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === ''
        ;

        return (
            <div className="col-md-offset-4 col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            Sign Up
                        </h4>
                    </div>
                    {error && <div className="alert alert-danger">{error.message}</div> }
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit} className="form">
                            <div className="panel-body">
                                <div className="form-group">
                                    <label className="sr-only" for="exampleInputEmail2">Full Name</label>
                                    <input className="form-control" id="exampleInputEmail2"
                                           value={username}
                                           onChange={event => this.setState(byPropKey('username', event.target.value))}
                                           type="text"
                                           placeholder="Full Name"/>
                                </div>

                                <div className="form-group">
                                    <label className="sr-only" for="exampleInputEmail3">Email address</label>
                                    <input className="form-control" id="exampleInputEmail3"
                                           value={email}
                                           onChange={event => this.setState(byPropKey('email', event.target.value))}
                                           type="text"
                                           placeholder="Email Address"/>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" for="exampleInputPassword4">Password</label>
                                    <input className="form-control" id="exampleInputPassword4"
                                           value={passwordOne}
                                           onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                                           type="password"
                                           placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" for="exampleInputPassword5">Confirm Password</label>
                                    <input className="form-control" id="exampleInputPassword5"
                                           value={passwordTwo}
                                           onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                                           type="password"
                                           placeholder="Confirm Password"/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" disabled={isInvalid} className="btn btn-primary btn-block">Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div >
            </div>
        )
            ;
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account?
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
};