// Character class for Electronic Detective


import React, {Component} from 'react';
import "../../css/characters/Questions.css";

class CharacterQuestions extends Component {

    constructor(props) {
        super(props);
        this.props = props;

        const clickedState = [];
        for (let i = 0; i ++; i < this.props.questions.length) {
            clickedState.push(false);
        }

        this.state = {clicked: clickedState};
    }

    handleQuestionClick = (e, data) => {
        // Don't let the standard browser click go anywhere
        e.preventDefault();

        // Update the state of the clicked item to true
        const clickedState = this.state.clicked.slice(0);
        clickedState[data - 1] = true;
        this.setState({clicked: clickedState});

        this.props.handleQuestionClick(data);
    }

    render = () => {
        return (
            <div className="Questions">
                {this.props.questions && this.props.questions.map(question =>
                    <div className="Question" key={question.id}>
                        <a href={`question-link-${question.id}`} key={question.id}
                           className={this.state.clicked[question.id - 1] ? "Question-clicked" : "Question-unclicked"}
                           onClick={((e) => this.handleQuestionClick(e, question.id))}>
                            {question.question}
                        </a>
                    </div>
                )}
            </div>
        );
    }
}

export default CharacterQuestions;