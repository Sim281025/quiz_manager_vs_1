import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import QuestionContext from '../../context/question/questionContext';

//Gets the list of data from components/questions/Questions.js


const QuestionItem = ({ question }) => {
    // const authContext = useContext(authContext);
    //const { user } = authContext;

    // if(user.role === 'admin'){
    //     display form
    // } else {
    //     display: none
    // }

    const questionContext = useContext(QuestionContext);
    const { deleteQuestion, setCurrent, clearCurrent } = questionContext;

    const { id, quizId, questionText, answerOptions, correctAnswer } = question; 

    //destructure answerOptions array to display as list
    const [answerOptions1, answerOptions2, answerOptions3, answerOptions4 ] = question.answerOptions;
  

//conditional rendering depending on role or different - if options and correct answers are not returned do not display title

    const onDelete = () => {
      deleteQuestion(id); //access to question id from the question ln 12
      clearCurrent();
    };
    

    return (
        <div className='card bg-light'>
            
            <ul className='text-primary'>
                <li>Question:</li>
                <span className='text-dark'>
                    <li> {questionText} </li>
                </span>      
                <li >Options:</li>

                <span className='text-dark'>
                    {answerOptions && (
                        <ul>
                            <li>
                                {answerOptions1}
                            </li>
                            <li>
                                {answerOptions2}
                            </li>
                            <li>
                                {answerOptions3}
                            </li>
                            <li>
                                {answerOptions4}
                            </li>
                        </ul>
                        
                    )} 
                </span>
                <span className='text-primary'>
                    <li>Correct Answer:</li>
                </span>
                <span className='text-dark'>
                    {correctAnswer &&(
                        <li>
                            {correctAnswer}{' '}
                            <i className="fas fa-check-circle"></i>
                        </li>
                    )}
                </span>
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={() => setCurrent(question)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
};

QuestionItem.propTypes = {
    question: PropTypes.object.isRequired,
}

export default QuestionItem;

