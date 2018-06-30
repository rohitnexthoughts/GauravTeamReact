import React, { Component } from 'react';
import './topicForm.css';

class topicForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newtopicContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writetopic = this.writetopic.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){
        this.setState({
            newtopicContent: e.target.value, // the value of the text input
        })
    }

    writetopic(){
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addtopic(this.state.newtopicContent);

        // Set newNoteContent back to an empty string.
        this.setState({
            newtopicContent: '',
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput"
                placeholder="Write topic Name"
                value={this.state.newtopicContent}
                onChange={this.handleUserInput} />
                <button className="noteButton"
                onClick={this.writetopic}>Add topic</button>
            </div>
        )
    }
}

export default topicForm;