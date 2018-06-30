import React from 'react';

class ShowTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }


    render() {
        return (

            <div class="container">
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">TOPIC NAME</div>
                        <div className="panel-body">
                            <br/>
                            <textarea name="message" rows="3" cols="30">Description</textarea>
                            <textarea name="comments" rows="1" cols="30">Comments</textarea>

                        </div>
                        <div className="panel-footer">End Of Project</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ShowTopic
