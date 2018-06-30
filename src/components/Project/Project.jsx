import React, {Component} from 'react';
import './Project.css';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Project extends Component {

    constructor(props) {
        super(props);
        this.projectContent = props.projectContent;
        this.projectId = props.projectId;
        this.handleRemoveProject = this.handleRemoveProject.bind(this);
    }

    handleRemoveProject(id) {
        this.props.removeProject(id);
    }

    render() {
        return (
            <div className="container">
                <font size="8%" face="verdana"><b>{ this.projectContent }</b></font>
                <div className="closebtn fade-in btn btn-danger"
                     onClick={() => this.handleRemoveProject(this.projectId)}>
                    &times;
                </div>
                <Link to={"topic/" + this.projectId}>Edit</Link>

            </div>

        )
    }
}

Project.propTypes = {
    projectContent: PropTypes.string
}

export default Project;
