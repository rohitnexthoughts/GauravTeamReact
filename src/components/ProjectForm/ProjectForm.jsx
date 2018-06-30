import React, { Component } from 'react';
import './ProjectForm.css';

class ProjectForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newProjectContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeProject = this.writeProject.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){
        this.setState({
            newProjectContent: e.target.value, // the value of the text input
        })
    }

    writeProject(){
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addProject(this.state.newProjectContent);

        // Set newNoteContent back to an empty string.
        this.setState({
            newProjectContent: '',
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput"
                placeholder="Write Project Name"
                value={this.state.newProjectContent}
                onChange={this.handleUserInput} />
                <button className="noteButton"
                onClick={this.writeProject}>Add Project</button>
            </div>
        )
    }
}

export default ProjectForm;