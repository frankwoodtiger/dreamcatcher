import React from "react";

class Choice extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const choiceStyle = {
            cursor: "pointer"
        };
        return (
            <div className="choice" style={choiceStyle} data-isanswer={this.props.isAnswer} >
                <div>{this.props.text}</div>
            </div>
        );
    }
}

export default Choice;