import React, {Component} from 'react';
import '../App.css';

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
            newTopicContent: ''})
    }

    render() {
        return (

            <div className="form-group text-center col-md-offset-3  col-md-6 panel-body">
                <fieldset>

                    <input className="form-control"
                       placeholder="Write topic Name"
                       value={this.state.newtopicContent}
                       onChange={this.handleUserInput} />

                    <textarea className="form-control"
                              value={this.state.description}

                              type="textarea"
                              placeholder="Description"/>

                    <button className="btn btn-group btn-primary" onClick={this.writeTopic}>Add topic</button>

                </fieldset>
            </div>
        )
    }
}

export default TopicForm;