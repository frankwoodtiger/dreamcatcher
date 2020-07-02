import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div>
                <div>Progress: {this.props.questionCount} / {this.props.totalQuestionCount}</div>
                <div>Score: {this.props.correctAnswerCount} / {this.props.questionCount - 1}</div>
            </div>
        );
    }
}

export default Counter;