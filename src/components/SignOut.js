import React, {Component} from 'react';
import * as routes from '../constants/routes';
import {auth} from '../firebase';
import {
    Link,
    withRouter,
} from 'react-router-dom';

const SignOutButton = ({history}) =>
    <SignOutForm history={history}/>



class SignOutForm extends Component {
    constructor(props) {
        super(props);

    }

    onSubmit = (event) => {
        const {
            history,
        } = this.props;

        auth.doSignOut()
            .then(result => {
                history.push(routes.LANDING);
            })
            .catch(error => {
            });

    };

    render() {
        return (
            < a href="javascript:void(0)"
                onClick={this.onSubmit}>
                Log Out
            </a>
        )
            ;
    }
}


export default withRouter(SignOutButton);
export {
    SignOutForm,
};
