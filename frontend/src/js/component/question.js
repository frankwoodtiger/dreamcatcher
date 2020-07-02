import React from "react";
import Choice from "./choice";
import Counter from "./counter";
import axios from "axios";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {},
            chosenIndex: -1,
            questionCount: 1,
            totalQuestionCount: 3, // dummy, need api call to fetch this info
            correctAnswerCount: 0,
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
                <Counter questionCount={this.state.questionCount}
                         totalQuestionCount={this.state.totalQuestionCount}
                         correctAnswerCount={this.state.correctAnswerCount}/>
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
        let chosenIndex = parseInt(e.target.getAttribute('data-index'));
        let correctAnswerCount = this.state.correctAnswerCount;
        if (this.state.question.choices[chosenIndex].answer) {
            correctAnswerCount++;
        }
        // Using shallow merge technique. For nested obj, we can use spread operator to deep merge.
        // Good article on this topic: https://medium.com/@imrobinkim/how-state-updates-are-merged-in-react-e07fc669fec2
        this.setState({
            chosenIndex: chosenIndex,
            questionCount: this.state.questionCount + 1,
            correctAnswerCount: correctAnswerCount
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