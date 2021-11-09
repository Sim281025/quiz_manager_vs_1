import React from 'react';
import PropTypes from 'prop-types';

//Gets the list of data from components/questions/Questions.js


const QuestionItem = ({ question }) => {
    const { id, quizId, questionText, answerOptions:[answerOption1, answerOption2, answerOption3,answerOption4], correctAnswer } = question; //not sure
    
//conditional rendering depending on role or different - if options and correct answers are not returned do not display title


    return (
        <div className='card bg-light'>

            <h3 className="text-primary text-left">Question:</h3>
            <h3 className="text-left">
                {questionText} 
            </h3> 
            <ul className='list text-primary'>
                <li >Options:</li>

                <span className='text-dark'>
                    {answerOptions && (
                        <li>
                            {answerOptions}
                        </li>
                    )} 
                </span>
                <span className='text-primary'>
                    <li>Correct Answer:</li>
                </span>
                <span className='text-dark'>
                    {correctAnswer &&(
                        <li>
                            {correctAnswer}{' '}
                            <i class="fas fa-check-circle"></i>
                        </li>
                    )}
                </span>
            </ul>
            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
            </p>

                {/* {answerOptions && (<h3 className="text-primary text-left">Options: {answerOptions}</h3>)}
           
                {correctAnswer && (<h3 className="text-primary text-left">Correct answer: {correctAnswer}</h3>)} */}
               
        </div>
    )
};

QuestionItem.propTypes = {
    question: PropTypes.object.isRequired,
}

export default QuestionItem;

