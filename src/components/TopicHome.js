import React, {Component} from 'react';
import Topic from './Topic/Topic';
import TopicForm from './TopicForm/TopicForm';
// import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import {db} from '../firebase/firebase'

class TopicHome extends Component {

    constructor(props) {
        super(props);
        this.addTopic = this.addTopic.bind(this);
        this.removeTopic = this.removeTopic.bind(this);

        this.database = db.ref().child('topics');

        // We're going to setup the React state of our component
        this.state = {
            topics: [],
        }
    }

    componentWillMount() {
        const previousTopics = this.state.topics;

        // DataSnapshot
        this.database.on('child_added', snap => {
            previousTopics.push({
                id: snap.key,
                topicContent: snap.val().topicContent,
                userUid: snap.val().userUid,
                projectId: snap.val().projectId,
            })

            this.setState({
                topics: previousTopics
            })
        })

        this.database.on('child_removed', snap => {
            for (var i = 0; i < previousTopics.length; i++) {
                if (previousTopics[i].id === snap.key) {
                    previousTopics.splice(i, 1);
                }
            }

            this.setState({
                topics: previousTopics
            })
        })
    }

    addTopic(topic) {
        this.database.push().set({
            userUid: this.props.authUser.uid,
            topicContent: topic,
            projectId: this.props.projectId
        });
    }

    removeTopic(topicId) {
        console.log("from the parent: " + topicId);
        this.database.child(topicId).remove();
    }

    render() {
        return (
            <div className="notesWrapper">
                <div className="notesHeader">
                    <div className="heading">React & Firebase To-Do List</div>
                </div>
                <div className="notesBody">
                    {
                        this.state.topics.map((topic) => {

                            if (this.props.authUser && (topic.userUid == this.props.authUser.uid) && (topic.projectId == this.props.projectId)) {
                                return (
                                    <Topic topicContent={topic.topicContent}
                                           topicId={topic.id}
                                           key={topic.id}
                                           removeTopic={this.removeTopic}/>
                                )
                            }
                        })
                    }
                </div>
                {this.props.authUser ?
                    <div className="notesFooter">
                        <TopicForm addTopic={this.addTopic}/>
                    </div>
                    : ''}
            </div>
        );
    }
}

export default TopicHome;
