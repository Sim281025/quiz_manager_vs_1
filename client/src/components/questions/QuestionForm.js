import React, { Fragment, useState, useContext, useEffect } from 'react';
import QuestionContext from '../../context/question/questionContext';
//import AuthContext from '../../context/auth/authContext';


//Conditional rendering. The form does not display if user role is basic or viewer.
//I need userId to access the role.

const QuestionForm = () => {
    const questionContext = useContext(QuestionContext);
    // const authContext = useContext(authContext);
    //const { user } = authContext;

    // if(user.role === 'admin'){
    //     display form
    // } else {
    //     display: none
    // }


    const { addQuestion, current, clearCurrent, updateQuestion } = questionContext

    //const [question, current] = questionContext;

    useEffect(() => {
        if(current !== null){
            setQuestion(current);
        } else {
           setQuestion({
            uestionText: '',
            answerOptions: [],
            correctAnswer: ''
           }) 
        }
    }, [questionContext, current]); //2nd parameter -  useEffect function only excecutes if the questionContext or the current is changed 

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
        if(current === null) {  //if current state is empty
            // setQuestion({...question, 
            //     question.answerOptions1
            // });
            addQuestion(question); //gets the addQuestion function from QuestionState.js //questionContext destructured
        } else {
            updateQuestion(question);
        }
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

    const clearAll = () => {
        clearCurrent();
    }

    //console.log("**************** question ",question)
    //console.log("**************** question.answerOptions ",question.answerOptions)


    return (
        <Fragment>
        <form onSubmit={onSubmit}>
            <h2 className="text-primary"> {current ? 'Edit Question' : 'Add Question'}</h2>
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
                <input type="submit" value={current ? 'Edit Question' : 'Add Question'} className="btn btn-primary btn-block"/>
            </div>
            {current && <div>
              <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>  
            </div>}
        </form>
        </Fragment>
    )
}

export default QuestionForm;
