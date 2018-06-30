import React, { Component } from 'react';
import './Topic.css';
import PropTypes from 'prop-types';

class topic extends Component{

    constructor(props){
        super(props);
        this.topicContent = props.topicContent;
        this.topicId = props.topicId;
        this.handleRemovetopic = this.handleRemovetopic.bind(this);
    }

    handleRemovetopic(id){
        this.props.removeTopic(id);
    }

    render(){
        return(
            <div className = "container" >
                <div className = "col-md-offset-3 col-md-6" >
                    <div className = "panel panel-default" >
                        <div className = "panel-heading" > TOPIC NAME:-- {this.topicContent}
                        <span className="closebtn"
                              onClick={() => this.handleRemovetopic(this.topicId)}>
              &times;
                 </span></div>
                        <div className="panel-body ">
                            Description:---->
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

topic.propTypes = {
    topicContent: PropTypes.string
}

export default topic;
