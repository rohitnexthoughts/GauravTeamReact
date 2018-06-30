import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {SignUpLink} from './SignUp';
import {auth} from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({history}) =>
    <div className="col-md-6">
        <h1 className="page-header">LogIn</h1>
        <SignInForm history={history}/>
        <SignUpLink />
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then((result) => {
                this.setState(() => ({...INITIAL_STATE}));
                console.log("Result::::" + result.user.email);
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <div class="panel panel-default" className="col-md-6">
                <form onSubmit={this.onSubmit}>
                    <div class="panel-heading">
                        <h4 class="panel-title">
                        </h4>
                    </div>
                    <div class="panel-body">
                        <form className='form-group' onSubmit={this.onSubmit}>
                            <input value={email} onChange={event => this.setState(byPropKey('email', event.target.value))}
                                   name={'email'} type='email' placeholder='Email'
                                   className='form-control' required/>
                            <input value={password} onChange={event => this.setState(byPropKey('password', event.target.value))}
                                   name={'password'} type='password' placeholder='Password'
                                   className='form-control' required/>
                            <input type='submit' value='Login' className='btn btn-primary btn-block'/>
                        </form>
                    </div>
                    { error && <p>{error.message}</p> }
                </form>
            </div>

        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};