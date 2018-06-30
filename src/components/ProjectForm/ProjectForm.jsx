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
            <div className="row formWrapper center-block">
                <input className="text-info col-lg-10"
                placeholder="Write Project Name"
                value={this.state.newProjectContent}
                onChange={this.handleUserInput} />
                <button className="btn btn-group col-lg-2 btn-primary"
                onClick={this.writeProject}>Add Project</button>
            </div>
        )
    }
}

export default ProjectForm;