import React, {Component} from 'react';
import {auth} from '../firebase';

import {
    Link,
    withRouter,
} from 'react-router-dom';

import * as routes from '../constants/routes';

const SignUpPage = ({history}) =>
    <div>
        <h1>SignUp</h1>
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
            phoneNumber,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === ''||
            phoneNumber==='';

        return (

            <form onSubmit={this.onSubmit}>
                <div className="form-group text-center col-md-6">
                    <div>
                        <label className="col-md-3">UserName:</label>
                        <input className="form-control"
                               value={username}
                               onChange={event => this.setState(byPropKey('username', event.target.value))}
                               type="text"
                               placeholder="Full Name"
                        />
                    </div>
                    <input className="form-control"
                           value={email}
                           onChange={event => this.setState(byPropKey('email', event.target.value))}
                           type="text"
                           placeholder="Email Address"
                    />
                    <input
                        value={passwordOne}
                        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        value={passwordTwo}
                        onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <button disabled={isInvalid} type="submit">
                        Sign Up
                    </button>
                    <div className="alert-danger alert ">hello</div>
                    { error && <p>{error.message}</p> }
                </div>

            </form>
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