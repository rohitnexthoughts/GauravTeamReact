import React, {Component} from 'react';
import {auth} from '../firebase';
import {db} from '../firebase/firebase'

import * as routes from '../constants/routes';

const AddUser = ({history}) =>
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
        this.database = db.ref().child('users');

    }

    onSubmit = (event) => {
        const {
            username,
            email,
        } = this.state;
        alert("Add user"+username)

        const {
            history,
        } = this.props;
        var service_id = "default_service";
        var template_id = "template1";
        var template_params = {
            "to": email,
            "name": username,
            "ink": "localhost:3000/signin",
            "from": "Gaurav Gupta"
        }
        this.sendFeedbackEmail(template_id,'abhinav.sri2009@gmail.com','gaurav.gupta@nexthoughts.com',template_params);

        this.database.push().set({createdBy: this.props.authUser.uid, username: username,email:email});




        event.preventDefault();
    };

    sendFeedbackEmail (templateId, senderEmail, receiverEmail, feedback) {
        alert("Send email");
        alert("Send email method");
        window.emailjs.send('gmail',templateId,feedback) .then(res => {
            console.log("succes"+res)
                .catch(err =>
                    alert('errrrrrrrrr'+err))

        })
    }
    render() {
        const {
            username,
            email,
            error,
        } = this.state;

        const isInvalid =
            email === '' ||
            username === ''
        ;

        return (
            <div className="col-md-offset-4 col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            Add User
                        </h4>
                    </div>
                    {error && <div className="alert alert-danger">{error.message}</div>}
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit} className="form">
                            <div className="panel-body">
                                <div className="form-group">
                                    <label className="sr-only" for="exampleInputEmail2">Name</label>
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
                                    <button type="submit" disabled={isInvalid}
                                            className="btn btn-primary btn-block">Add
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        )
            ;
    }
}

export default AddUser;