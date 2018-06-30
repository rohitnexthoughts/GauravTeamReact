import React, {Component} from 'react';
import {auth} from '../firebase';


import {
    Link,
    withRouter,
} from 'react-router-dom';

import * as routes from '../constants/routes';

const TopicPage = ({history}) =>
    <div className="panel-heading">
        <h1>Topic</h1>
        <Topic history={history}/>
    </div>


const INITIAL_STATE = {
    topicName: '',
    description: '',
    comments: '',
    followers: '',
    error: null,
};
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class Topic extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};

    }

    onSubmit = (event) => {
        const {
            topicName,
            description,
            comments,
            followers,
        } = this.state;

        const {
            history,
        } = this.props;
    };

    render() {
        const {
            topicName,
            description,
            comments,
            followers,
            error,
        } = this.state;

        return (

            <div className="form-group text-center col-md-6 panel-body">
                <fieldset>
                    <form onSubmit={this.onSubmit}>
                        <input className="form-control"
                               value={topicName}
                               onChange={event => this.setState(byPropKey('topicName', event.target.value))}
                               type="text"
                               placeholder="Topic Name"/>
                        <textarea className="form-control"
                               value={description}
                               onChange={event => this.setState(byPropKey('description', event.target.value))}
                               type="textarea"
                               placeholder="Description"/>
                        <textarea className="form-control"
                               value={comments}
                               onChange={event => this.setState(byPropKey('comments', event.target.value))}
                               type="textarea"
                               placeholder="Comments"/>
                        <select className="form-control"
                               value={followers}
                               onChange={event => this.setState(byPropKey('followers', event.target.value))}
                               placeholder="Followers"/>
                        <input type='submit' value='Submit Topic' className='btn btn-primary btn-block'/>

                    </form>
                </fieldset>
            </div>
        )
            ;
    }
}
const TopicLink = () =>
    <p>
        Do you want to create topic?
        {' '}
        <Link to={routes.TOPIC}>Topic</Link>
    </p>


export default withRouter(TopicPage);

export {
    Topic,
    TopicLink
};