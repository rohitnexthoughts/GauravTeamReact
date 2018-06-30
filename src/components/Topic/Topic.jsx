import React, { Component } from 'react';
import './topic.css';
import PropTypes from 'prop-types';

class topic extends Component{

    constructor(props){
        super(props);
        this.topicContent = props.topicContent;
        this.topicId = props.topicId;
        this.handleRemovetopic = this.handleRemovetopic.bind(this);
    }

    handleRemovetopic(id){
        this.props.removetopic(id);
    }

    render(){
        return(
            <div className="note fade-in">
                <span className="closebtn" 
                      onClick={() => this.handleRemovetopic(this.topicId)}>
                      &times;
                </span>
                <p className="noteContent">{ this.topicContent }</p>
            </div>
        )
    }
}

topic.propTypes = {
    topicContent: PropTypes.string
}

export default topic;
