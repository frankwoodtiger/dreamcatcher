import React from "react";
import Choice from "./choice";
import axios from "axios";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {},
            chosenIndex: -1
        }
        this.handleChoiceClick = this.handleChoiceClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    componentDidMount() {
        axios.get('/api/questions/1')
            .then(response => {
                console.log(response.data);
                this.setState({question: response.data});
            });
    }

    render() {
        return (
            <div className="question">
                <div>{this.state.question.text}</div>
                <div>
                    {this.state.question.choices && this.state.question.choices.map((choice, index) => {
                        return <Choice key={choice.id}
                                       text={choice.text}
                                       bgColorClassName={this.determineChoiceBgColorClassName(choice, index)}
                                       clickable={!this.hasAnswered()}
                                       onClick={this.hasAnswered() ? ( false || null ): this.handleChoiceClick}
                                       index={index}/>
                    })}
                </div>
                {this.hasAnswered() ? <button onClick={this.handleNextClick}>Next</button> : null}
                <button onClick={this.handleResetClick}>Reset</button>
            </div>
        );
    }

    handleChoiceClick(e) {
        // Using shallow merge technique. For nested obj, we can use spread operator to deep merge.
        // Good article on this topic: https://medium.com/@imrobinkim/how-state-updates-are-merged-in-react-e07fc669fec2
        this.setState({
            chosenIndex: parseInt(e.target.getAttribute('data-index'))
        });
    }

    hasAnswered() {
        return this.state.chosenIndex > -1;
    }

    handleNextClick() {
        // should fire API call to get next question
    }

    handleResetClick() {
        // should fire API call to reset counter
    }

    determineChoiceBgColorClassName(choice, index) {
        if (this.hasAnswered()) {
            if (choice.answer) {
                return " bg-color-aliceblue";
            }
            if (this.state.chosenIndex === index && !choice.answer) {
                return " bg-color-antiquewhite";
            }
        }
        return "";
    }
}

export default Question;