import React, {Component} from 'react';
import './TopicForm.css';

class TopicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTopicContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeTopic = this.writeTopic.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e) {
        this.setState({
            newTopicContent: e.target.value, // the value of the text input
        })
    }

    writeTopic() {
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addTopic(this.state.newTopicContent);

        // Set newNoteContent back to an empty string.
        this.setState({
            newTopicContent: '',
        })
    }

    render() {
        return (
            <div className="formWrapper">
                <input className="noteInput"
                       placeholder="Write topic Name"
                       value={this.state.newtopicContent}
                       onChange={this.handleUserInput}/>
                <button className="noteButton"
                        onClick={this.writeTopic}>Add topic
                </button>
            </div>
        )
    }
}

export default TopicForm;