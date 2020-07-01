import React from "react";
import Choice from "./choice";

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="question">
                <div>{this.props.text}</div>
                <div>
                    {this.props.choices && this.props.choices.map(choice => {
                        return <Choice key={choice.id} text={choice.text} isAnswer={choice.answer} />
                    })}
                </div>
            </div>
        );
    }
}

export default Question;