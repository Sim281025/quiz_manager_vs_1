import React from 'react';
import PropTypes from 'prop-types';

//Gets the list of data from components/quizzes/Quizzes.js

const QuizItem = ({ quiz }) => {
    const {id, quizTitle, userId} = quiz;
    return (
        <div className='bg-success card2'>
            <h3 className="text-center text-light">
                {quizTitle}
            </h3>
        </div>
    )
};

export default QuizItem;


