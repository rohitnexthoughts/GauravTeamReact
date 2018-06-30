import React, { Component } from 'react';
import Project from './Project/Project';
import ProjectForm from './ProjectForm/ProjectForm';
// import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import {db} from '../firebase/firebase'

class Home extends Component {

    constructor(props){
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
    }

    addProject(project) {
        this.database.push().set({projectContent: project});
    }

    removeProject(projectId) {
        console.log("from the parent: " + projectId);
        this.database.child(projectId).remove();
    }

    render() {
        return (
            <div className="notesWrapper">
                <div className="notesHeader">
                    <div className="heading">React & Firebase To-Do List</div>
                </div>
                <div className="notesBody">
                    {
                        this.state.projects.map((project) => {
                            return (
                                <Project projectContent={project.projectContent}
                                      projectId={project.id}
                                      key={project.id}
                                      removeProject={this.removeProject}/>
                            )
                        })
                    }
                </div>
                <div className="notesFooter">
                    <ProjectForm addProject={this.addProject}/>
                </div>
            </div>
        );
    }
}

export default Home;
