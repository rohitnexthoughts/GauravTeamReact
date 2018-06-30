import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {SignUpLink} from './SignUp';
import {auth} from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({history}) =>
    <SignInForm/>

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
                alert(error);
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
            <div className="col-md-offset-4 col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        LOGIN
                    </div>
                    {error && <div className="alert alert-danger">{error.message}</div> }
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit} className="form">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                </h4>
                            </div>
                            <div className="panel-body">


                                <div className="form-group">
                                    <label className="sr-only" for="exampleInputEmail2">Email address</label>
                                    <input value={email}
                                           onChange={event => this.setState(byPropKey('email', event.target.value))}
                                           name={'email'} type='email' placeholder='Email'
                                           className='form-control' required/></div>
                                <div className="form-group">
                                    <label className="sr-only" for="exampleInputPassword2">Password</label>
                                    <input value={password}
                                           onChange={event => this.setState(byPropKey('password', event.target.value))}
                                           name={'password'} type='password' placeholder='Password'
                                           className='form-control' required/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>
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

export default withRouter(SignInPage);

export {
    SignInForm,
};


<form className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
    <div className="form-group">
        <label className="sr-only" for="exampleInputEmail2">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
    </div>
    <div className="form-group">
        <label className="sr-only" for="exampleInputPassword2">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
        <div className="help-block text-right"><a href="">Forget the password ?</a></div>
    </div>
    <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
    </div>
    <div className="checkbox">
        <label>
            <input type="checkbox"/> keep me logged-in
        </label>
    </div>
</form>