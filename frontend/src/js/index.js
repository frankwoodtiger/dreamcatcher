import React from "react";
import ReactDOM from "react-dom";
import Question from "./component/question"

import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {question: {}};
    }

    componentDidMount() {
        axios.get('/api/questions/1')
            .then(response => {
                console.log(response);
                this.setState({question: response.data});
            });
    }

    render() {
        return (
            <Question text={this.state.question.text}
                choices={this.state.question.choices}/>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)

console.log("dreamcatcher loaded!");