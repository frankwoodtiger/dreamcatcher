import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div className="mt-5">
                <div>Progress: {this.props.questionCount} / {this.props.totalQuestionCount}</div>
                <div>Score: {this.props.correctAnswerCount} / {this.props.questionCount}</div>
            </div>
        );
    }
}

export default Counter;