import React from "react";
import Choice from "./choice";
import Counter from "./counter";
import axios from "axios";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originalQuestionPool: [],
            questionPool: [],
            question: {},
            chosenIndex: -1,
            questionCount: 0,
            totalQuestionCount: 0,
            correctAnswerCount: 0,
            finished: false
        }
        this.handleChoiceClick = this.handleChoiceClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    componentDidMount() {
        axios.get('/api/questions')
            .then(response => {
                console.log(response.data);
                this.initializeState(response.data._embedded.questions)
            });
    }

    getRandomQuestion(questions) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    }

    removeQuestionFromPool(question) {
        this.setState({
            questionPool: this.state.questionPool
                .filter(q => q._links.question.href !== question._links.question.href)
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
                {!this.state.finished && this.hasAnswered() ? <button className="btn" onClick={this.handleNextClick}>Next</button> : null}
                <button className="btn right" onClick={this.handleResetClick}>Reset</button>
                {this.state.finished ? <div>You have finished all the questions! Good luck!</div> : null}
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
            correctAnswerCount: correctAnswerCount,
            finished: (this.state.questionCount + 1) === this.state.totalQuestionCount
        });
    }

    hasAnswered() {
        return this.state.chosenIndex > -1;
    }

    handleNextClick() {
        let randomQuestion = this.getRandomQuestion(this.state.questionPool);
        this.setState({
            chosenIndex: -1,
            question: randomQuestion
        })
        this.removeQuestionFromPool(randomQuestion);
    }

    initializeState(questions) {
        const randomQuestion = this.getRandomQuestion(questions);
        const _originalQuestionPool = [...questions];
        const _questionPool = [...questions];
        this.setState({
            originalQuestionPool: _originalQuestionPool,
            questionPool: _questionPool,
            question: randomQuestion,
            chosenIndex: -1,
            questionCount: 0,
            totalQuestionCount: questions.length,
            correctAnswerCount: 0,
            finished: false
        }, () => { this.removeQuestionFromPool(randomQuestion); });
        // Note that we need to use call back instead just a statement after setState because we want to make sure
        // the questionPool of the state is set before we remove which is not guaranteed due to the async nature of JS.
        // In JS world, we can use callback to make sure the value being set before we removed. There might be other
        // ways like leveraging Promise but can be done later.
    }

    handleResetClick() {
        this.initializeState(this.state.originalQuestionPool);
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