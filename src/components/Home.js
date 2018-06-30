import React, {Component} from 'react';
import Project from './Project/Project';
import ProjectForm from './ProjectForm/ProjectForm';
// import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import {db} from '../firebase/firebase'

class Home extends Component {

    constructor(props) {
        super(props);
        this.addProject = this.addProject.bind(this);
        this.removeProject = this.removeProject.bind(this);

        this.database = db.ref().child('projects');

        // We're going to setup the React state of our component
        this.state = {
            projects: [],
        }
    }

    componentWillMount() {
        const previousProjects = this.state.projects;

        // DataSnapshot
        this.database.on('child_added', snap => {
            previousProjects.push({
                id: snap.key,
                projectContent: snap.val().projectContent,
                userUid: snap.val().userUid,
            })

            this.setState({
                projects: previousProjects
            })
        })

        this.database.on('child_removed', snap => {
            for (var i = 0; i < previousProjects.length; i++) {
                if (previousProjects[i].id === snap.key) {
                    previousProjects.splice(i, 1);
                }
            }

            this.setState({
                projects: previousProjects
            })
        })
        this.sendFeedbackEmail('template1','abhinav.sri2009@gmail.com','gaurav.gupta@nexthoughts.com',{to:'gaurav.gupta@nexthoughts.com',name:'gaurav'});
    }

    addProject(project) {
        this.database.push().set({userUid: this.props.authUser.uid, projectContent: project});
    }

    sendFeedbackEmail (templateId, senderEmail, receiverEmail, feedback) {
        alert("Send email method");
        window.emailjs.send('gmail',templateId,feedback) .then(res => {
            console.log("succes"+res)
                .catch(err =>
                    alert('errrrrrrrrr'+err))

    })
    }


    removeProject(projectId) {
        console.log("from the parent: " + projectId);
        this.database.child(projectId).remove();
    }

    render() {
        return (
            <div className="notesWrapper">
                <div className="notesHeader">
                    <div className="heading">
                        <h1>Projects List</h1>
                    </div>
                </div>
                {this.props.authUser ?
                    <div className="noteButton">
                        <ProjectForm addProject={this.addProject}/>
                    </div>
                    : ''}
                <div className="notesBody">
                    {
                        this.state.projects.map((project) => {
                            if (this.props.authUser && (project.userUid == this.props.authUser.uid)) {
                                return (
                                    <Project projectContent={project.projectContent}
                                             projectId={project.id}
                                             key={project.id}
                                             removeProject={this.removeProject}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;
