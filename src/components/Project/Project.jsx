import React, {Component} from 'react';
import './Project.css';
import PropTypes from 'prop-types';

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
                { this.projectContent }
                <div className="closebtn fade-in btn btn-danger"
                     onClick={() => this.handleRemoveProject(this.projectId)}>
                    &times;
                </div>
            </div>
        )
    }
}

Project.propTypes = {
    projectContent: PropTypes.string
}

export default Project;
