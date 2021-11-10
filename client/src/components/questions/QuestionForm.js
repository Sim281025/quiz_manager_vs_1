import React, { useState, useContext } from 'react';
import QuestionContext from '../../context/question/questionContext';


//Conditional rendering. The form does not display if user role is basic or viewer.
//I need userId to access the role.

const QuestionForm = () => {
    const questionContext = useContext(QuestionContext);

    const [question, current] = questionContext;

    const [question, setQuestion] = useState({
       // _id,
       // quizId,
        questionText: '',
        answerOptions: [],
        correctAnswer: ''
    });

    const { id, quizId, questionText, answerOptions, correctAnswer } = question; 

    //destructure answerOptions array to display as list
    const [answerOptions1, answerOptions2, answerOptions3, answerOptions4 ] = question.answerOptions;
  
    const onChange = e => setQuestion({...question, [e.target.name]: e.target.value});
   
    const onSubmit = e => {
        e.preventDefault();
        questionContext.addQuestion(question); //gets the addQuestion function from QuestionState.js
        setQuestion({                           //returns the form to initial state
            questionText: '',
            answerOptions: [], // addQuestion funtion only works if this is here
            answerOptions1: '', //answerOptions1-4 do not get added
            answerOptions2: '', 
            answerOptions3: '', 
            answerOptions4: '',
            correctAnswer: ''
        })
    }

    console.log("**************** question ",question)
    console.log("**************** question.answerOptions ",question.answerOptions)


    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary"> Add Question</h2>
            <input type=
                "text"
                placeholder="question"
                name="questionText"
                value={questionText} 
                onChange={onChange}
            />
            <input type=
                "text"
                placeholder="Option 1"
                name="answerOptions1"
                value={answerOptions1} 
                onChange={onChange}
            />
            <input type=
                "text"
                placeholder="Option 2"
                name="answerOptions2"
                value={answerOptions2} 
                onChange={onChange}
            />
            <input type=
                "text"
                placeholder="Option 3"
                name="answerOptions3"
                value={answerOptions3} 
                onChange={onChange}
            />
            <input type=
                "text"
                placeholder="Option 4"
                name="answerOptions4"
                value={answerOptions4} 
                onChange={onChange}
            />
            <input type=
                "text"
                placeholder="correct answer"
                name="correctAnswer"
                value={correctAnswer} 
                onChange={onChange}
            />
            <div>
                <input type="submit" value="Add Question" className="btn btn-primary btn-block"/>
            </div>
            
        </form>
    )
}

export default QuestionForm;
